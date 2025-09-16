class LocalStorageStateManager {
  KEYS = {
    BADGES: "UAM_MODULE_DATA_awards_badges",
    ITEMS: "UAM_MODULE_DATA_awards_items",
    CATEGORIES: "UAM_MODULE_DATA_achievements_categories",
    ACHIEVEMENTS: "UAM_MODULE_DATA_achievements",
  }

  /** @type {LocalStorageStateManager} */
  static instance;

  constructor() {
    this.initializeStorage();
  }

  static getInstance() {
    if (!LocalStorageStateManager.instance) {
      LocalStorageStateManager.instance = new LocalStorageStateManager();
    }
    return LocalStorageStateManager.instance;
  }

  /** @param {number} categoryId */
  getAchievements(categoryId) { 

    return this.getData(this.KEYS.ACHIEVEMENTS).filter(a => a.categoryId == categoryId)
  }

  /** @returns {UserProfileData} */
  getUserProfileData() {
    const {
      allBadges,
      allItems,
      allCategories,
      allAchievements
    } = this.getAllData()

    const loadAchievementDetails = (achievement) => {
      const parent = allAchievements.find(x => x.id == achievement.parentId)
      const category = allCategories.find(x => x.id == achievement.categoryId)
      const badge = allBadges.find(x => x.id == achievement.rewards.badgeId)
      const items = allItems.filter(x => achievement.rewards?.items?.includes(x.id))
      const childrenIds = allAchievements.filter(a => a.parentId == achievement.id).map(a => a.id)

      achievement.parent = parent
      achievement.category = category
      achievement.badge = badge
      achievement.items = items
      achievement.childrenIds = childrenIds

      return achievement
    }
    const userProfileData = {
      activeBadge: allBadges[0],
      statistics: {
        rankingNumber: 4,
        allAchievementsNumber: allAchievements.length,
        allItemsNumber: allItems.length,
        allBadgesNumber: allBadges.length,
        maxAchievementPoints: Utils.getAchievementPoints(allAchievements),
        achievementPoints: Utils.getAchievementPoints(allAchievements.filter(a => a.status === AchievementStatus.ACHIVED)),
        achievementsUnlockedNumber: Utils.getAchievementsByStatus(allAchievements, AchievementStatus.NOT_ACHIEVED).length,
        achievementsBlockedNumber: Utils.getAchievementsByStatus(allAchievements, AchievementStatus.NOT_AVAILABLE).length,
        achievementsAchivedNumber: Utils.getAchievementsByStatus(allAchievements, AchievementStatus.ACHIVED).length,
        badgesUnlockedNumber: Utils.getDataNumberByProp(allBadges, "isUnlocked"),
        itemsUnlockedNumber: Utils.getDataNumberByProp(allItems, "isUnlocked"),
      },
      highlightedAchievements: allAchievements.filter(a => a.isHighlighted),
      cabinetBadgesAwards: allBadges.filter(a => a.isHighlighted),
      cabinetItemsAwards: allItems.filter(a => a.isHighlighted)
    }

    userProfileData.highlightedAchievements = userProfileData.highlightedAchievements.map(a => loadAchievementDetails(a))

    return userProfileData
  }


  /** @param {number} id */
  unlockBadge(id) {
    const allBadges = this.getData(this.KEYS.BADGES)

    const badgeIndex = allBadges.findIndex(b => b.id == id)

    allBadges[badgeIndex].isUnlocked = true
    allBadges[badgeIndex].unlockedDate = (new Date()).toISOString()

    this.saveData(allBadges, this.KEYS.BADGES)

    return true
  }

  /** @param {number[]} ids */
  unlockItems(ids) {
    const allItems = this.getData(this.KEYS.ITEMS)

    ids.forEach(id => {
      const itemIndex = allItems.findIndex(i => i.id == id)

      allItems[itemIndex].isUnlocked = true
      allItems[itemIndex].unlockedDate = (new Date()).toISOString()
    })

    this.saveData(allItems, this.KEYS.ITEMS)

    return true
  }

  /** 
   * @param {number[]} ids
   * @param {Achievement} achievementData 
   */
  updateManyAchievements(ids, achievementData) {
    const allAchievements = this.getData(this.KEYS.ACHIEVEMENTS)

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]; 
      const achievementIndex = allAchievements.findIndex(a => a.id == id)

      allAchievements[achievementIndex] = {
        ...allAchievements[achievementIndex],
        ...achievementData
      }
    } 

    this.saveData(allAchievements, this.KEYS.ACHIEVEMENTS)

    return true
  }

  /** 
   * @param {number} id 
   * @param {boolean} isHighlighted 
   * @param {string} itemKey
   */
  setHighlightData(id, isHighlighted, itemKey) {
    const data = this.getData(itemKey)
    const dataIndex = data.findIndex(x => x.id == id) 

    if (dataIndex !== -1) {
      data[dataIndex].isHighlighted = isHighlighted 

      this.saveData(data, itemKey)

      return true
    } else {
      return false
    }
  }

  /** 
   * @param {number} achievementId  
   * @returns {number} 
   */
  getAchievementsCount(categoryId) {
    /** @type {Achievement[]} */
    const allAchievements = this.getData(this.KEYS.ACHIEVEMENTS)
    return allAchievements.filter(a => a.categoryId == categoryId).length
  }

  /** @returns {number} */
  getRewardsItemsCount() { 
    return this.getData(this.KEYS.ITEMS).length
  }
  /** @returns {number} */
  getRewardsBadgesCount() {
    return this.getData(this.KEYS.BADGES).length
  }

  /** 
   * @param {number} achievementId  
   * @returns {AchievementDetails} 
   */
  getAchievementDetails(achievementId) {
    const {
      allBadges,
      allItems,
      allCategories,
      allAchievements
    } = this.getAllData()

    /** @type {Achievement} */
    const achievement = allAchievements.find(x => x.id == achievementId)

    if (!achievement) return null

    const parent = allAchievements.find(x => x.id == achievement.parentId)
    const category = allCategories.find(x => x.id == achievement.categoryId)
    const badge = allBadges.find(x => x.id == achievement.rewards.badgeId)
    const items = allItems.filter(x => achievement.rewards.items.includes(x.id))
    const childrenIds = allAchievements.filter(a => a.parentId == achievementId).map(a => a.id)

    achievement.parent = parent
    achievement.category = category
    achievement.badge = badge
    achievement.items = items
    achievement.childrenIds = childrenIds

    return achievement
  }

  /** 
   * @param {number} categoryId  
   * @param {number} offset 
   * @param {number} limit 
   * @return {AchievementDetails[]}
   */
  getAchievementsForList(categoryId, offset, limit) {

    if (!categoryId) {
      return []
    }

    const allAchievements = this.getData(this.KEYS.ACHIEVEMENTS)
    const achievements = Utils
      .sortAchievementsByStatus(allAchievements)
      .filter(achievement => achievement.categoryId == categoryId)
      .slice(offset, offset + limit)
      .map(achievement => this.getAchievementDetails(achievement.id))


    return achievements
  }

  /** 
   * @param {number} badgeId  
   * @returns {AchievementRewardBadgeDetails} 
   */
  getBadgeDetails(badgeId) {
    const allBadges = this.getData(this.KEYS.BADGES)
    /** @type {Achievement[]} */
    const allAchievements = this.getData(this.KEYS.ACHIEVEMENTS)
    const badge = allBadges.find(b => b.id == badgeId)

    const relatedAchievements = allAchievements.filter(a => a.rewards.badgeId == badgeId)

    badge.relatedAchievements = relatedAchievements

    return badge
  }

  /** 
   * @param {number} itemId  
   * @returns {AchievementRewardItem} 
   */
  getItemDetails(itemId) {
    const allItems = this.getData(this.KEYS.ITEMS)
    const item = allItems.find(i => i.id == itemId)

    return item
  }

  /** @param {string} itemName */
  getData(itemName) {
    const data = localStorage.getItem(itemName);
    return data ? JSON.parse(data) : {};
  }

  /** 
   * @param {Object} data 
   * @param {string} key 
   */
  saveData(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getAllData() {
    return {
      allBadges: this.getData(this.KEYS.BADGES),
      allItems: this.getData(this.KEYS.ITEMS),
      allCategories: this.getData(this.KEYS.CATEGORIES),
      allAchievements: this.getData(this.KEYS.ACHIEVEMENTS)
    }
  }

  /** Załadowanie danych statycznych do localstorage */
  initializeStorage() {
    const localStorageKeys = this.KEYS
    let staticDataIsLoaded = true

    for (const key in localStorageKeys) {
      if (!localStorage.getItem(localStorageKeys[key]) && localStorageKeys.hasOwnProperty(key)) {
        staticDataIsLoaded = false
      }
    }

    if (!staticDataIsLoaded) {
      localStorage.setItem(localStorageKeys.ACHIEVEMENTS, JSON.stringify(ACHIEVEMENTS_DATA_STATIC))
      localStorage.setItem(localStorageKeys.BADGES, JSON.stringify(BADGES_DATA_STATIC))
      localStorage.setItem(localStorageKeys.ITEMS, JSON.stringify(ITEMS_DATA_STATIC))
      localStorage.setItem(localStorageKeys.CATEGORIES, JSON.stringify(CATEGORIES_DATA_STATIC))
    }
  }
}


class ApiService {
  static API_BASE_URL = "https://example.com/api/user-achievements";


  /** @type {ApiService} */
  static instance;

  constructor() {
    this.baseUrl = ApiService.API_BASE_URL;
    this.state = LocalStorageStateManager.getInstance()
  }

  static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * Uniwersalna funkcja do wysyłania żądań do API.
   * @param {string} endpoint 
   * @param {string} method 
   * @param {Object|null} body 
   * @returns {Promise<Object>} 
   */
  async fetchAPI(endpoint, method = "GET", body = null) {
    const url = `${this.baseUrl}${endpoint}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) options.body = JSON.stringify(body);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API error:", error);
    }
  }

  /** @returns {Promise<UserProfileData>} */
  async getUserProfileData() {
    // return this.fetchAPI("/profile-data-json"); 


    // zasymulowanie ładowania danych z bazy, usuń ten kod i odkomentuj ten wyżej  
    return this.simulateLoadingFromDatabase(this.state.getUserProfileData())
  }

  /** 
   * @param {number} offset
   * @param {number} limit
   * @return {Promise<AchievementRewardItem[]>}
   */
  async getRewardsItems(offset, limit) {
    // return this.fetchAPI("/get-rewards-items-json");   
    const allItems = Utils.sortByIsUnlocked(this.state.getData(this.state.KEYS.ITEMS))

    return this.simulateLoadingFromDatabase(
      allItems.slice(offset, offset + limit)
    )
  }

  /** @param {number} id */
  async unlockBadge(id) {
    // return this.fetchAPI("/unlock-badge-json");    

    return this.simulateLoadingFromDatabase(this.state.unlockBadge(id))
  }

  /** @param {number[]} ids */
  async unlockItems(ids) {
    // return this.fetchAPI("/unlock-items-json");    

    return this.simulateLoadingFromDatabase(this.state.unlockItems(ids))
  }

  /** 
   * @param {number} id 
   * @param {Achievement} achievementData 
   */
  async updateAchievement(id, achievementData) {
    // return this.fetchAPI("/unlock-achievement-by-user-json");

    return this.simulateLoadingFromDatabase(this.state.updateManyAchievements([id], achievementData))
  }

  /** 
   * @param {number[]} ids
   * @param {Achievement} achievementData 
   */
  async updateManyAchievements(ids, achievementData) { 

    return this.simulateLoadingFromDatabase(this.state.updateManyAchievements(ids, achievementData))
  }

  /** 
   * @param {number} categoryId  
   * @return {Promise<number>}
   */
  getAchievementsCount(categoryId) {
    // return this.fetchAPI("/get-achievements-count-for-list-json");    

    return this.simulateLoadingFromDatabase(
      this.state.getAchievementsCount(categoryId)
    )
  }

  /** 
   * @param {number} categoryId  
   * @param {number} offset 
   * @param {number} limit  
   * @return {Promise<AchievementDetails[]>}
   */
  async getAchievementsForList(categoryId, offset, limit) {
    // return this.fetchAPI("/get-achievements-details-for-list-json");    

    return this.simulateLoadingFromDatabase(
      this.state.getAchievementsForList(categoryId, offset, limit)
    )
  }

  /** 
   * @param {number} achievementId 
   * @return {Promise<AchievementDetails>}
   */
  async getAchievementDetails(achievementId) {
    // return this.fetchAPI("/get-achievement-details-json");   

    return this.simulateLoadingFromDatabase(
      this.state.getAchievementDetails(achievementId)
    )
  }

  /** 
   * @param {number} badgeId  
   * @returns {Promise<AchievementRewardBadge>} 
   */
  async getBadgeDetails(badgeId) {
    // return this.fetchAPI("/get-badge-details-json");   

    return this.simulateLoadingFromDatabase(
      this.state.getBadgeDetails(badgeId)
    )
  }

  /** 
   * @param {number} itemId  
   * @returns {Promise<AchievementRewardItem>} 
   */
  async getItemDetails(itemId) {
    // return this.fetchAPI("/get-item-details-json");   

    return this.simulateLoadingFromDatabase(
      this.state.getItemDetails(itemId)
    )
  }

  async getUserRewardsStats() {
    // return this.fetchAPI("/get-user-rewards-stats-json");   
    const profileData = this.state.getUserProfileData()
    const {
      allItemsNumber,
      allBadgesNumber,
      badgesUnlockedNumber,
      itemsUnlockedNumber,
    } = profileData.statistics

    return {
      allItemsNumber,
      allBadgesNumber,
      badgesUnlockedNumber,
      itemsUnlockedNumber,
    }
  }

  /** 
   * @param {number} id 
   * @param {boolean} isHighlighted 
   */
  async setHighlightBadge(id, isHighlighted) {
    // return this.fetchAPI("/set-highlight-badge-json");   

    const operationSucced = this.state.setHighlightData(id, isHighlighted, this.state.KEYS.BADGES) 

    return this.simulateLoadingFromDatabase(operationSucced)
  }

  /** 
   * @param {number} id 
   * @param {boolean} isHighlighted 
   */
  async setHighlightItem(id, isHighlighted) {
    // return this.fetchAPI("/set-highlight-item-json");   

    const operationSucced = this.state.setHighlightData(id, isHighlighted, this.state.KEYS.ITEMS)

    return this.simulateLoadingFromDatabase(operationSucced)
  }


  /** 
   * @param {number} id 
   * @param {boolean} isHighlighted 
   */
  async setHighlightAchievement(id, isHighlighted) {
    // return this.fetchAPI("/set-highlight-achievement-json");   

    const operationSucced = this.state.setHighlightData(id, isHighlighted, this.state.KEYS.ACHIEVEMENTS)

    return this.simulateLoadingFromDatabase(operationSucced)
  }

  /** 
   * @param {number} offset
   * @param {number} limit
   */
  async getRewardsBadges(offset, limit) {
    // return this.fetchAPI("/get-rewards-items-json");   
    const allBadges = Utils.sortByIsUnlocked(this.state.getData(this.state.KEYS.BADGES))

    return this.simulateLoadingFromDatabase(
      allBadges.slice(offset, offset + limit)
    )
  }

  /** @param {number} categoryId */
  async getAchievements(categoryId) {
    // return this.fetchAPI("/get-achievements-by-category-json");  

    return this.simulateLoadingFromDatabase(
      this.state.getAchievements(categoryId)
    )
  }

  async getAllAchievementsCategories() {
    // return this.fetchAPI("/all-achievements-categories-json");  

    return this.simulateLoadingFromDatabase(
      this.state.getData(this.state.KEYS.CATEGORIES)
    )
  }

  // tylko do symulacji. Usuń
  simulateLoadingFromDatabase(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value)
      }, 200); //700
    });
  }

}