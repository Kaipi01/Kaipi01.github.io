// --------------------------------- GENEROWANIE DRZEWA Z OSIĄGNIĘCIAMI ---------------------------------

class AchievementTreeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AchievementTreeError';
    }
}

class MissingRootNodeError extends AchievementTreeError {
    constructor(categoryId) {
        super(`Cannot create achievement tree - no root node found. At least one achievement must have parentId set to null in category ${categoryId}`);
        this.name = 'MissingRootNodeError';
    }
}

class AchievementTree {
    static ANIMATION_DURATION = 300
    static MOBILE = 'mobile'
    static DESKTOP = 'desktop'
    static CLASS = {
        ACHIEVEMENT: 'achievement',
        ACHIEVEMENT_TREE: 'achievement-tree',
        ACHIEVEMENT_LEVEL: 'achievement-level',
        ACHIEVEMENT_WRAPPER: 'achievement-wrapper',
        ACHIEVEMENT_NAME: 'achievement-name',
        CONNECTION_LINES: 'connection-lines',
        CONNECTION_LINE: 'connection-line',

        DESKTOP_ACHIEVEMENT: 'desktop-achievement',

        MOBILE_DIFFICULTY_INDICATOR: 'mobile-difficulty-indicator',
        MOBILE_CONNECTION_LINES: 'mobile-connection-lines',
        MOBILE_CONNECTION_LINE: 'mobile-connection-line',
        MOBILE_ACHIEVEMENT: 'mobile-achievement',
        MOBILE_ACHIEVEMENT_WRAPPER: 'mobile-achievement-wrapper',
        MOBILE_TREE: 'mobile-tree',
        MOBILE_TREE_ITEM: 'mobile-tree-item',
        MOBILE_TREE_LIST: 'mobile-tree-list',

        EMPTY_TREE: 'empty-tree',
        EMPTY_TREE_MESSAGE: 'empty-tree-message',

        DIFFICULTY_INDICATOR: 'difficulty-indicator',
        LOCKED: 'locked',
        HIGHLIGHT: 'highlight',
        TOOLTIP: 'tooltip',
    };

    connectionsLayer
    connectionLineClass

    constructor(container, data, category) {
        this.module = Utils.getModuleContainer()
        /** @type {HTMLElement} */
        this.container = container;
        this.connectionsLayer = null;
        this.data = data;
        this.category = category;
        this.CONNECTION_LINE_WIDTH = Utils.remToPx(0.3)

        if (!container) {
            throw new AchievementTreeError('Container element is required');
        }
        if (!category) {
            throw new AchievementTreeError('Category data is required');
        }

        this.categoryId = data[0]?.categoryId
        this.tooltip = this.getTooltip();
        this.achievementElementsCache = new Map();
        this.geometryCache = new Map();
        this.lastContainerSize = null;
        this.detailsModalId = Utils.ACHIEVEMENTS_DETAILS_MODAL_ID
    }

    clearCache() {
        this.achievementElementsCache.clear()
        this.geometryCache.clear()
    }

    highlightPathBetweenNodes(startId, endId) {

        if (!startId || !endId) {
            console.warn('Warning: Start and end node IDs not found');
            return;
        }

        const path = this.findPath(startId, endId);

        if (!path) {
            return;
        }

        // Przygotuj wszystkie linie do animacji
        const pathLines = [];
        const selector = path.reduce((acc, currentId, index) => {
            if (index < path.length - 1) {
                acc.push(`[data-connection-line][data-from="${currentId}"][data-to="${path[index + 1]}"]`);
            }
            return acc;
        }, []).join(',');

        if (selector) {
            pathLines.push(...this.container.querySelectorAll(selector));
        }

        const animate = (index) => {
            if (index >= pathLines.length) return;

            requestAnimationFrame(() => {
                pathLines[index].classList.add('highlight');
                setTimeout(() => animate(index + 1), 300);
            });
        };

        animate(0);
    }

    async destroy() {
        const treeElement = this.getTreeElement()

        this.container.onmouseover = null
        this.container.onmousemove = null
        this.container.onmouseout = null
        this.connectionsLayer = null;
        this.tooltip = null;

        return Utils.fadeAnimation(() => {
            treeElement.remove()
        }, treeElement, AchievementTree.ANIMATION_DURATION)
    }

    cacheAchievementElements() {
        const elements = this.container.querySelectorAll('[data-id]');
        elements.forEach(el => this.achievementElementsCache.set(parseInt(el.dataset.id), el));
    }

    getAchievementElement(id) {
        return this.achievementElementsCache.get(id);
    }

    getTreeElement = () => this.module.querySelector(`[data-tree]`);

    getType = () => this.getTreeElement().dataset.tree;

    getConnectionsLayer = () => this.getTreeElement().querySelector('[data-connection-lines]')

    /** 
     * @param {Achievement} achievement 
     * @param {string} prefix  
     */
    createBaseAchievementElement(achievement, prefix = '') {
        const card = document.createElement('a');
        const isBlocked = achievement.status === AchievementStatus.NOT_AVAILABLE
        const lockedClass = isBlocked ? AchievementTree.CLASS.LOCKED : ''
        const achievedClass = achievement.status === AchievementStatus.ACHIVED ? "achieved" : '';
        const toCollectClass = achievement.status === AchievementStatus.ACHIVED_NOT_REWARDED ? "achieved-no-rewarded pulse-animation" : '';
        card.className = `${prefix}${AchievementTree.CLASS.ACHIEVEMENT} ${AchievementTree.CLASS.ACHIEVEMENT} ${lockedClass} ${achievedClass} ${toCollectClass}`;
        card.dataset.id = achievement.id;
        card.href = `#${achievement.id}`;
        card.setAttribute('data-achievement', '')
        card.setAttribute('data-unlocked', !isBlocked)

        const img = document.createElement('img');
        img.src = achievement.icon;
        img.alt = achievement.name;
        card.appendChild(img);

        return card;
    }

    drawConnections() {
        this.connectionsLayer = this.getConnectionsLayer(this.type)

        if (!this.connectionsLayer) {
            return
        }

        const fragment = document.createDocumentFragment();

        this.cacheAchievementElements()
        this.connectionsLayer.innerHTML = '';

        this.data.forEach(achievement => {
            if (achievement.parentId !== null) {
                const childElement = this.getAchievementElement(achievement.id);
                const parentElement = this.getAchievementElement(achievement.parentId);

                if (childElement && parentElement) {
                    const line = this.createConnectionLine(
                        childElement,
                        parentElement,
                        this.connectionsLayer.getBoundingClientRect(),
                        this.connectionLineClass,
                        achievement
                    );
                    fragment.appendChild(line);
                }
            }
        });

        this.connectionsLayer.appendChild(fragment)
    }

    createConnectionLine(childElement, parentElement, containerRect, className, achievement) {

        if (!childElement || !parentElement) {
            throw new AchievementTreeError(`Cannot create connection line - missing elements for achievement ${achievement?.id}`);
        }

        const {
            startX,
            startY,
            endX,
            endY
        } = this.calculateLinePositions(
            childElement,
            parentElement,
            containerRect
        );

        const line = document.createElement('span');
        line.className = className;
        line.setAttribute('data-connection-line', '')

        if (achievement) {
            line.dataset.from = achievement.parentId;
            line.dataset.to = achievement.id;
        }

        const {
            length,
            angle
        } = this.calculateLineGeometry(startX, startY, endX, endY); 

        this.applyLineStyles(line, length, startX, startY, angle);

        return line;
    }

    updateConnectionStyles() {
        this.cacheAchievementElements();

        if (!this.connectionsLayer) return

        const containerRect = this.connectionsLayer.getBoundingClientRect();
        const connectionLines = this.connectionsLayer.querySelectorAll('[data-connection-line]');

        connectionLines.forEach(line => {
            const fromId = parseInt(line.dataset.from);
            const toId = parseInt(line.dataset.to);
            const childElement = this.getAchievementElement(toId);
            const parentElement = this.getAchievementElement(fromId);

            if (childElement && parentElement) {
                const positions = this.calculateLinePositions(childElement, parentElement, containerRect);
                const geometry = this.calculateLineGeometry(positions.startX, positions.startY, positions.endX, positions.endY);
                this.applyLineStyles(line, geometry.length, positions.startX, positions.startY, geometry.angle);
            }
        });
    }

    hasContainerSizeChanged() {
        const rect = this.connectionsLayer.getBoundingClientRect();
        const size = {
            width: rect.width,
            height: rect.height
        };

        if (!this.lastContainerSize ||
            this.lastContainerSize.width !== size.width ||
            this.lastContainerSize.height !== size.height) {
            this.lastContainerSize = size;
            this.geometryCache.clear();
            return true;
        }
        return false;
    }

    calculateLinePositions(childElement, parentElement, containerRect) {
        const childRect = childElement.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();
        const lineThickness = this.CONNECTION_LINE_WIDTH / 2.0

        return {
            startX: (lineThickness + parentRect.left + parentRect.width / 2) - containerRect.left,
            startY: parentRect.top + parentRect.height / 2 - containerRect.top,
            endX: (lineThickness + childRect.left + childRect.width / 2) - containerRect.left,
            endY: childRect.top + childRect.height / 2 - containerRect.top
        };
    }

    calculateLineGeometry(startX, startY, endX, endY) {
        const cacheKey = `${startX}-${startY}-${endX}-${endY}`;

        if (this.geometryCache.has(cacheKey)) {
            return this.geometryCache.get(cacheKey);
        }

        const geometry = {
            length: Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)),
            angle: Math.atan2(endY - startY, endX - startX) * 180 / Math.PI
        };

        this.geometryCache.set(cacheKey, geometry);
        return geometry;
    }

    applyLineStyles(line, length, startX, startY, angle) {
        line.style.width = `${length}px`;
        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 0';
    }

    // Metoda pomocnicza do znajdowania ścieżki między węzłami
    findPath(startId, endId) {
        const path = [];
        const findPathRecursive = (currentId) => {
            path.push(currentId);

            if (currentId === endId) {
                return true;
            }

            const children = this.data.filter(item => item.parentId === currentId);
            for (const child of children) {
                if (findPathRecursive(child.id)) {
                    return true;
                }
            }

            path.pop();
            return false;
        };

        if (findPathRecursive(startId)) {
            return path;
        }
        return null;
    }

    getTooltip() {
        return this.module.querySelector('[data-achievement-tooltip]')
    }

    /** @param {Achievement} achievement */
    getTooltipHTML(achievement) {

        if (!achievement) {
            console.warn('Warning: Achievement data is not found for tooltip');
            return ''
        }

        const itemsLength = achievement.rewards?.items?.length
        const badgeInfo = achievement.rewards?.badgeId ? `<li>
                  <i class="fa-solid fa-award" aria-hidden="true"></i>
                  <span class="reward-name">Odznaka</span>
                </li>` : ''
        const itemsInfo = itemsLength > 0 ? `<li>
                  <i class="fa-solid fa-cube" aria-hidden="true"></i>
                  <span><span class="reward-name">Liczba Przedmiotów:</span> ${itemsLength}</span>
                </li>` : ''

        return `
        <div class="achievement-header">  
          <div class="achievement-content">  
  
            <div class="achievement-title-section">
              <img 
                src="${achievement.icon}" 
                alt="${achievement.name}" 
                class="achievement-icon"
              >
              <div class="achievement-title-wrapper">
                <p class="achievement-title">${achievement.name}</p>
                <p>Typ: <span class="achievement-type">${achievement.type ? Utils.capitalize(achievement.type) : "Inny"}</span></p>
                <p class="achievement-stats">
                  <i class="fa-solid fa-chart-simple" aria-hidden="true"></i>
                  <span class="achievement-stats-name">Trudność:</span>
                  <span>${achievement.difficulty ?? 0}</span>
                </p>
              </div>
            </div>
  
            <div class="achievement-category-info"> 
              <img 
                src="${this.category.icon}" 
                alt="${this.category.name}" 
                class="achievement-category-icon"
              > 
            </div>
   
            <p class="achievement-description">${achievement.desc}</p>  
   
            <div class="rewards-section">
              <p class="rewards-section-title">Nagrody:</p>
              <ul class="rewards-list">
                <li>
                  <i class="fa-solid fa-circle-dot" aria-hidden="true"></i>
                  <span><span class="reward-name">Punkty Osiągnięć:</span> ${achievement.rewards.points}</span>
                </li>
                <li>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <span><span class="reward-name">Doświadczenie:</span> ${achievement.rewards.exp}</span>
                </li>
                ${badgeInfo}
                ${itemsInfo}
              </ul>
            </div> 
        </div> 
        `
    }

    addTooltipListeners(achievementSelector) {
        const tooltipGap = 45;
        const achievementTree = this.getTreeElement();
        const tooltip = this.getTooltip();
        const tooltipCache = new Map();

        this.container.onmouseover = (e) => {
            const achievement = e.target.closest(achievementSelector);

            if (!achievement || achievement.dataset.unlocked === "false") return;

            const id = parseInt(achievement.dataset.id);

            if (!tooltipCache.has(id)) {
                const achievementData = this.data.find(item => item.id === id);
                if (!achievementData) return;

                tooltipCache.set(id, this.getTooltipHTML(achievementData))
            }

            tooltip.innerHTML = tooltipCache.get(id);
            tooltip.style.display = 'block';
            tooltip.style.position = 'absolute'
            this.positionTooltip(e, tooltip, achievementTree, tooltipGap);
        }

        this.container.onmousemove = (e) => {
            const achievement = e.target.closest(achievementSelector);
            if (!achievement || !tooltip.style.display === 'block') return;

            this.positionTooltip(e, tooltip, achievementTree, tooltipGap);
        }

        this.container.onmouseout = (e) => {
            const achievement = e.target.closest(achievementSelector);
            if (!achievement) return;

            tooltip.style.display = 'none';
        }
    }

    /** 
     * @param {MouseEvent} e 
     * @param {HTMLElement} tooltip 
     * @param {HTMLElement} achievementTree
     * @param {number} gap 
     */
    positionTooltip(e, tooltip, achievementTree, gap) {
        const treeRect = achievementTree.getBoundingClientRect()
        const tooltipRect = tooltip.getBoundingClientRect();
        let left = e.clientX - treeRect.left + gap;
        let top = e.clientY - treeRect.top + gap;

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }

}

class AchievementTreeDesktop extends AchievementTree {
    constructor(container, data, category) {
        super(container, data, category);
        this.treeWrapperSelector = `[data-tree="${AchievementTree.DESKTOP}"][data-category-id="${this.categoryId}"]`;
        this.type = AchievementTree.DESKTOP
        this.connectionLineClass = AchievementTree.CLASS.CONNECTION_LINE
    }

    init() { 
        if (this.data.length === 0) return

        this.createLevels(this.data);
        this.addTooltipListeners(`.${AchievementTree.CLASS.ACHIEVEMENT}`); 
        this.connectionsLayer = this.getConnectionsLayer(this.type)
        this.drawConnections() 
    }

    createAchievementElement(achievement) {
        const div = super.createBaseAchievementElement(achievement, 'desktop-');
        const name = document.createElement('span');
        name.className = AchievementTree.CLASS.ACHIEVEMENT_NAME + " sr-only";
        name.textContent = achievement.name;
        div.appendChild(name);
        return div;
    }

    createLevels(data) {
        // Organizuje osiągnięcia w poziomy
        const levels = this.organizeLevels(data);
        const fragment = document.createDocumentFragment();
        const treeContainer = document.createElement('div');
        treeContainer.className = AchievementTree.CLASS.ACHIEVEMENT_TREE
        treeContainer.setAttribute('data-category-id', data[0]?.categoryId)
        treeContainer.setAttribute('data-tree', 'desktop')

        levels.forEach((level, levelIndex) => {
            const levelDiv = document.createElement('div');
            levelDiv.className = AchievementTree.CLASS.ACHIEVEMENT_LEVEL
            levelDiv.dataset.level = levelIndex;

            level.forEach(achievement => {
                const achievementElement = this.createAchievementElement(achievement);
                levelDiv.appendChild(achievementElement);
            });

            fragment.appendChild(levelDiv);
        });

        treeContainer.appendChild(fragment);
        this.container.appendChild(treeContainer);

        const connectionsLayer = document.createElement('div');
        connectionsLayer.className = AchievementTree.CLASS.CONNECTION_LINES
        connectionsLayer.setAttribute('data-connection-lines', '')
        treeContainer.appendChild(connectionsLayer);
    }


    createAchievementHTML(achievement) {
        const lockedClass = achievement.isUnlocked ? '' : AchievementTree.CLASS.LOCKED;
        const achievedClass = achievement.status === AchievementStatus.ACHIVED ? AchievementStatus.ACHIVED : '';

        return `
            <a class="desktop-${AchievementTree.CLASS.ACHIEVEMENT} ${AchievementTree.CLASS.ACHIEVEMENT} ${lockedClass} ${achievedClass}"
               data-id="${achievement.id}"
               href="#${achievement.id}"
               data-achievement>
                <img src="${achievement.icon}" alt="${achievement.name}">
                <span class="desktop-${AchievementTree.CLASS.DIFFICULTY_INDICATOR}">
                    ${achievement.difficulty || '1'}
                </span>
                <span class="${AchievementTree.CLASS.ACHIEVEMENT_NAME} sr-only">
                    ${achievement.name}
                </span>
            </a>
        `.trim();
    }



    organizeLevels(data) {
        const levels = [];
        const addToLevel = (node, level = 0) => {
            if (!levels[level]) levels[level] = [];
            levels[level].push(node);

            const children = data.filter(item => item.parentId === node.id);
            children.forEach(child => addToLevel(child, level + 1));
        };

        const root = data.find(item => item.parentId === null);

        if (!root) {
            throw new MissingRootNodeError(this.categoryId);
        }

        addToLevel(root);

        return levels;
    }
}

class AchievementTreeMobile extends AchievementTree {
    constructor(container, data, category) {
        super(container, data, category);
        this.treeWrapperSelector = `[data-tree="${AchievementTree.MOBILE}"][data-category-id="${this.categoryId}"]`;
        this.type = AchievementTree.MOBILE
        this.connectionLineClass = AchievementTree.CLASS.MOBILE_CONNECTION_LINE
    }

    init() {
        this.createTree();
        this.connectionsLayer = this.getConnectionsLayer(this.type) 
        this.drawConnections();
    }

    createAchievementElement(achievement) {
        return super.createBaseAchievementElement(achievement, 'mobile-');
    }


    createTree() {
        const treeContainer = document.createElement('div');
        treeContainer.className = AchievementTree.CLASS.MOBILE_TREE
        treeContainer.setAttribute('data-category-id', this.data[0]?.categoryId)
        treeContainer.setAttribute('data-tree', 'mobile')

        const list = this.createTreeList(this.data);
        treeContainer.appendChild(list);

        const connectionsLayer = document.createElement('div');
        connectionsLayer.className = AchievementTree.CLASS.MOBILE_CONNECTION_LINES
        connectionsLayer.setAttribute('data-connection-lines', '')
        treeContainer.appendChild(connectionsLayer);

        this.container.appendChild(treeContainer);
    }

    createTreeList(data, parentId = null, level = 0) {
        const items = data.filter(item => item.parentId === parentId);
        if (items.length === 0) return null;

        const fragment = document.createDocumentFragment();
        const ul = document.createElement('ul');

        ul.className = AchievementTree.CLASS.MOBILE_TREE_LIST
        ul.dataset.level = level;


        items.forEach(item => {
            const li = document.createElement('li');
            li.className = AchievementTree.CLASS.MOBILE_TREE_ITEM

            const achievementWrapper = document.createElement('div');
            achievementWrapper.className = AchievementTree.CLASS.MOBILE_ACHIEVEMENT_WRAPPER + " " + AchievementTree.CLASS.ACHIEVEMENT_WRAPPER

            const achievement = this.createAchievementElement(item);
            achievementWrapper.appendChild(achievement);

            li.appendChild(achievementWrapper);

            const childList = this.createTreeList(data, item.id, level + 1);
            if (childList) {
                li.appendChild(childList);
            }
            fragment.appendChild(li);
        });

        ul.appendChild(fragment);

        return ul;
    }

}

class TreeManager {
    static BREAKPOINT = 850

    /** @type {AchievementCategory[] | null} */
    categories
    /** @type {AchievementTreeDesktop | null} */
    desktopTree
    /** @type {AchievementTreeMobile | null} */
    mobileTree
    /** @type {AchievementTree | null} */
    currentTree
    /** @type {string | null} */
    currentCategoryId

    /** @param {HTMLElement} container  */
    constructor(container) {
        this.container = container;
        this.apiService = ApiService.getInstance()
        this.stateManager = LocalStorageStateManager.getInstance()
        this.module = Utils.getModuleContainer() 
        this.breakpoint = TreeManager.BREAKPOINT; 
        /** @type {Map<number, Achievement[]>} */
        this.achievementsDataCache = new Map()
        this.isInitialized = true

        this.setupResizeHandler();
    }

    /** 
     * Podświetla ścieżki dla zdobytych osiągnięć, włączając ścieżki między rodzicem a dzieckiem.
     * @param {Achievement[]} data
     */
    showActivePaths(data) {
        const rootAchievementId = data[0]?.id;
        const currentTree = this.getActiveTree();
        if (!currentTree) return;

        const achievementsToHighlight = new Set();

        data.filter(a => a.isUnlocked).forEach(a => achievementsToHighlight.add(a.id));

        data.forEach(achievement => {
            const parent = data.find(a => a.id === achievement.parentId);

            if (parent && parent.isUnlocked) {
                achievementsToHighlight.add(achievement.id);
            }
        });

        achievementsToHighlight.forEach(id => {
            currentTree.highlightPathBetweenNodes(rootAchievementId, id);
        });
    }

    clearCache() {
        this.achievementsDataCache.clear()
    }

    /** 
     * @param {AchievementCategory[]} categories 
     * @param {number | null} initCategoryId
     */
    async initializeTree(categories, initCategoryId = null) {
        if (!categories.length) return;

        this.categories = categories
        this.currentCategoryId = initCategoryId ?? categories[0]?.id;

        await this.switchCategory(this.currentCategoryId);
        this.handleWindowResize();
    }

    shouldUpdateLayout() {
        const currentWidth = window.innerWidth;
        if (Math.abs(this.lastWidth - currentWidth) < 5) return false;
        this.lastWidth = currentWidth;
        return true;
    }

    setupResizeHandler() {
        const handleResize = Utils.debounce(() => {
            if (!this.shouldUpdateLayout()) return;
            this.reDrawConnections();
        }, 300);

        window.addEventListener('resize', handleResize);
    }

    reDrawConnections() {

        const activeTree = this.getActiveTree()

        if (activeTree && activeTree.getConnectionsLayer()) {
            activeTree.updateConnectionStyles()
        }
    }

    /** @param {string} errorMessage */
    showError(errorMessage) {
        CustomToast.show(CustomToast.ERROR, errorMessage)
    }

    async getAchievements(categoryId) {
        let achievements = []

        if (this.achievementsDataCache.has(categoryId)) {
            achievements = this.achievementsDataCache.get(categoryId)
        } else {
            try {
                achievements = await this.apiService.getAchievements(categoryId)

                this.achievementsDataCache.set(categoryId, achievements)
            } catch (e) {
                console.error(e)
                this.showError(e.message)
            }
        }

        return achievements
    }

    async switchCategory(categoryId) {
        const achievements = await this.getAchievements(categoryId)

        this.currentCategoryId = categoryId;
        await this.getActiveTree()?.destroy()

        if (achievements.length === 0) {
            this.renderEmptyState();
            return
        }

        this.currentTree = this.renderTree(achievements) 

        if (this.isInitialized) {
            await Utils.waitForImages(this.currentTree.getTreeElement()) 
            await Utils.wait(50)
            this.isInitialized = false
            this.currentTree.drawConnections()
        }   

        setTimeout(() => this.showActivePaths(achievements), 1000)
    }

    destroyTree() {
        const activeTree = this.getActiveTree()
        activeTree?.destroy()

        this.currentTree = null
    }

    renderTree(achievements) {
        const isMobile = this.checkIsMobile()
        const currentCategory = this.categories.find(c => c.id == this.currentCategoryId)

        const tree = isMobile ?
            new AchievementTreeMobile(this.container, achievements, currentCategory) :
            new AchievementTreeDesktop(this.container, achievements, currentCategory);

        tree.init()

        return tree
    }

    handleWindowResize() {
        const toggleTreeType = async (prevTree) => {
            const achievements = await this.getAchievements(this.currentCategoryId)

            await prevTree.destroy()

            this.currentTree = this.renderTree(achievements)
        }

        const resizeHandler = async () => {
            const isMobile = this.checkIsMobile()
            const currentTree = this.getActiveTree()

            if (!currentTree) return

            // Sprawdź czy potrzebna jest zmiana typu drzewa
            if (
                (isMobile && currentTree.getType() === AchievementTree.DESKTOP) ||
                (!isMobile && currentTree.getType() === AchievementTree.MOBILE)
            ) {
                toggleTreeType(currentTree)
            }
        };

        const saveResizeHandler = Utils.throttle(resizeHandler, 350);

        window.addEventListener('resize', (e) => saveResizeHandler())
    }

    renderEmptyState() {
        const fragment = document.createDocumentFragment();
        const isMobile = this.checkIsMobile()
        const type = isMobile ? AchievementTree.MOBILE : AchievementTree.DESKTOP

        const emptyContainer = document.createElement('div');
        emptyContainer.className = AchievementTree.CLASS.EMPTY_TREE;
        emptyContainer.setAttribute('data-tree', type);
        emptyContainer.setAttribute('data-category-id', this.currentCategoryId);

        const message = document.createElement('div');
        message.className = AchievementTree.CLASS.EMPTY_TREE_MESSAGE;
        message.textContent = 'Brak danych';
        fragment.appendChild(message);

        emptyContainer.appendChild(fragment);
        this.container.appendChild(emptyContainer);

        return emptyContainer
    }

    checkIsMobile = () => window.innerWidth < this.breakpoint;

    getActiveTree = () => this.currentTree
}

// --------------------------------- GENEROWANIE KATEGORII DO DRZEWA ---------------------------------


class CategoriesList {
    static CATEGORY_CHNAGE_EVENT = "custom-achievement-category-change-event"
    IMAGE_CLASS = "category-image"
    CARD_CLASS = "category-card"

    /** 
     * @param {HTMLDivElement} container 
     * @param {AchievementCategory[]} data 
     */
    constructor(container, data) {
        this.container = container;
        this.data = data ?? [];

        if (!this.container) {
            throw new Error("CategoriesList Constructor Error: this.container is null!")
        }
        if (this.data.length === 0) {
            console.warn("categories data is emapty!")
        }


        this.init()
    }

    init() {
        this.renderCategories()

        this.container.addEventListener('click', (e) => {

            if (e.target.hasAttribute('data-category')) {
                this.onChangeCategoryHandler(e)
            }
        })
    }

    /** @param {CustomEvent} e  */
    onChangeCategoryHandler(e) {
        e.preventDefault()

        const changeCategory = () => {
            const id = e.target.dataset.id
            const allCategoriesCards = this.container.querySelectorAll('[data-category]')

            allCategoriesCards.forEach(card => card.classList.remove('active'))

            e.target.classList.add('active')

            Utils.dispatchCustomEvent(CategoriesList.CATEGORY_CHNAGE_EVENT, {
                id
            })
        }
 
        const saveChangeCategory = Utils.throttle(changeCategory, 800)

        saveChangeCategory()
    }

    renderCategoryCard(category, index) {
        const categoryImage = document.createElement('img')
        const categoryCard = document.createElement('a')

        categoryImage.className = this.IMAGE_CLASS
        categoryImage.src = category.icon

        categoryCard.href = `#${category.id}`
        categoryCard.className = `${this.CARD_CLASS} ${index === 0 ? 'active': ''}`
        categoryCard.append(categoryImage)
        categoryCard.setAttribute('data-category', '')
        categoryCard.setAttribute('data-id', category.id)

        return categoryCard
    }

    renderCategories() {
        const listFragment = document.createDocumentFragment()

        this.data.forEach((category, index) => listFragment.append(this.renderCategoryCard(category, index)))

        this.container.append(listFragment)
    }
}

// --------------------------------- LISTY WYŚWIETLAJĄCE DANE ---------------------------------


class CardsList {
    constructor(container, listElement) {
        this.container = container
        this.listElement = listElement;

        this.offset = 0;
        this.currentPage = 1;
        this.totalPages = 0;
        this.totalItems = 0;

        // Cache
        this.cardsCache = new Map();
        this.pageCache = new Map();

        // Paginacja
        this.paginationBtnClass = "tab-button pagination__button link small variant2";
        this.paginationContainer = document.createElement('div');
        this.paginationContainer.className = 'tab-navigation pagination';
        this.container.appendChild(this.paginationContainer);

        this.isInitialized = false;
        this.cardType = null
        this.stateManager = LocalStorageStateManager.getInstance()
        this.apiService = ApiService.getInstance();

        this.apiCall = async () => {
            throw new Error("Method 'apiCall' must be implemented");
        };

        // Event listener dla paginacji
        this.container.addEventListener('click', (e) => {
            const pageNumber = e.target.getAttribute('data-page-btn');
            if (pageNumber) {
                this.goToPage(pageNumber);
            }
        });
    }

    /** 
     * Inicjalizuje listę i wyświetla pierwszą stronę danych.
     */
    async showCards() {
        try {
            await this.loadData();
            this.renderPagination();
            this.isInitialized = true;
        } catch (error) {
            this.dispatchError(error);
        }
    }


    /** 
     * Renderuje karty przekazane w danych. 
     * @param {Array} data - tablica odznak lub przedmiotów 
     * @param {Function} renderFunction - funkcja renderująca pojedynczy element 
     * @param {boolean} isSecret - czy karta jest ukryta
     * @param {boolean} onlyForPreview - czy karta jest tylko do podglądu 
     */
    static renderCards(data, renderFunction, isSecret = false, onlyForPreview = false) {
        const fragment = document.createDocumentFragment()
        const itemsCount = data.length
        let cardsNumber = 0

        for (let i = 0; i < itemsCount; i++) {
            fragment.append(renderFunction(data[i], isSecret, onlyForPreview))
        }

        return fragment
    }

    renderData(data) {
        const sortedData = Utils.sortByIsUnlocked(data);

        if (data.length === 0 && this.offset === 0) {
            Utils.showAlert(CustomAlert.INFO, "Brak danych", this.listElement)
        } else {
            const cards = CardsList.renderCards(sortedData, this.renderFunction);

            this.listElement.append(cards)
        }
    }

    dispatchError(e) {
        Utils.dispatchCustomEvent(Panel.ERROR_EVENT, {
            error: e,
            panel: Panel.AWARDS,
            content: this.container
        })
    }

    clearCache() {
        this.cardsCache.clear();
        this.pageCache.clear();
    }

    getCacheKey(page) {
        return `page-${page}`;
    }

    getPageFromCache(page) {
        return this.pageCache.get(this.getCacheKey(page));
    }

    setPageInCache(page, data) {
        this.pageCache.set(this.getCacheKey(page), {
            data,
            html: this.listElement.innerHTML
        });
    }

    /** @abstract Abstrakcyjna metoda do nadpisania */
    getCachedCard(item) {
        throw new Error("Method 'getCachedCard' must be implemented");
    }

    async loadData() {
        try {
            this.updateTotalCounts();

            const cachedPage = this.getPageFromCache(this.currentPage);
            if (cachedPage) {
                this.listElement.innerHTML = cachedPage.html;
                return;
            }

            const data = await this.apiCall();
            this.listElement.innerHTML = '';

            const fragment = document.createDocumentFragment();
            data.forEach(item => {
                const card = this.getCachedCard(item);
                fragment.appendChild(card);
            });

            this.listElement.appendChild(fragment);
            this.setPageInCache(this.currentPage, data);
            await Utils.waitForImages(this.listElement);
        } catch (e) {
            this.dispatchError(e);
        }
    }

    /** @abstract Abstrakcyjna metoda do nadpisania */
    updateTotalCounts() {
        throw new Error("Method 'updateTotalCounts' must be implemented");
    }

    async goToPage(page) {
        if (page < 1 || page > this.totalPages) return;

        Utils.showLoading(this.listElement);
        this.currentPage = parseInt(page);
        await this.loadData();

        this.renderPagination();

        Utils.hideLoading(this.listElement);
    }

    renderPagination() {
        this.paginationContainer.innerHTML = '';
        if (this.totalPages <= 1) return;

        const fragment = document.createDocumentFragment();

        // Przycisk "Poprzednia"
        fragment.appendChild(this.createNavigationButton('previous'));

        // Numery stron
        for (let i = 1; i <= this.totalPages; i++) {
            if (this.shouldShowPageNumber(i)) {
                fragment.appendChild(this.createPageButton(i));
            }
        }

        // Przycisk "Następna"
        fragment.appendChild(this.createNavigationButton('next'));

        this.paginationContainer.appendChild(fragment);
    }

    shouldShowPageNumber(pageNum) {
        return pageNum === 1 ||
            pageNum === this.totalPages ||
            (pageNum >= this.currentPage - 2 && pageNum <= this.currentPage + 2);
    }

    createNavigationButton(type) {
        const button = document.createElement('button');
        const isPrevious = type === 'previous';
        button.innerHTML = isPrevious ?
            '<i class="fa-solid fa-chevron-left"></i><span class="tab-text">Poprzednia</span>' :
            '<span class="tab-text">Następna</span><i class="fa-solid fa-chevron-right"></i>';
        button.className = this.paginationBtnClass;
        button.disabled = isPrevious ? this.currentPage === 1 : this.currentPage === this.totalPages;
        button.setAttribute('data-page-btn', isPrevious ? this.currentPage - 1 : this.currentPage + 1);
        return button;
    }

    createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = `${this.paginationBtnClass} ${pageNum == this.currentPage ? 'active' : ''}`;
        button.setAttribute('data-page-btn', pageNum);
        return button;
    }
}

class BadgesAwardsList extends CardsList {
    static ITEMS_PER_PAGE = 18;

    constructor(container, listElement) {
        super(container, listElement);
        this.cardType = AchievementReward.BADGE;
        this.renderFunction = BadgesAwardsList.renderBadgeCard;

        this.apiCall = () => {
            const offset = (this.currentPage - 1) * BadgesAwardsList.ITEMS_PER_PAGE;
            return this.apiService.getRewardsBadges(offset, BadgesAwardsList.ITEMS_PER_PAGE);
        };
    }

    updateTotalCounts() {
        const totalCount = this.stateManager.getRewardsBadgesCount();
        this.totalItems = totalCount;
        this.totalPages = Math.ceil(totalCount / BadgesAwardsList.ITEMS_PER_PAGE);
    }

    getCachedCard(badge) {
        const cacheKey = `${badge.id}-${badge.isUnlocked}`;
        if (!this.cardsCache.has(cacheKey)) {
            this.cardsCache.set(cacheKey, BadgesAwardsList.renderBadgeCard(badge));
        }
        return this.cardsCache.get(cacheKey).cloneNode(true);
    }

    /** 
     * @param {AchievementRewardBadge} badge 
     * @param {boolean} isSecret
     * @param {boolean} onlyForPreview
     */
    static renderBadgeCard(badge, isSecret = false, onlyForPreview = false) {
        const card = document.createElement('li')
        const lockedMessage = badge.isUnlocked || onlyForPreview ? '' : '<span class="sr-only">Zablokowane</span>'
        const additionalClasses = !badge.isUnlocked && !onlyForPreview ? 'locked' : 'unlocked'
        const cardType = onlyForPreview ? 'span' : 'a'
        const cardHref = onlyForPreview ? '' : `href="#${badge.id}"`
        const isNewUnlocked = Utils.isDateWithinOneDay(badge.unlockedDate)

        card.setAttribute('data-award-card', AchievementReward.BADGE)
        card.setAttribute(`data-${AchievementReward.BADGE}-card`, '')
        card.setAttribute('data-new', '')
        card.setAttribute('data-id', badge.id)

        card.innerHTML = `
        <${cardType} data-award="${AchievementReward.BADGE}" data-${AchievementReward.BADGE} data-id="${badge.id}" style="--badge-color: ${badge.nameColor}; --badge-color-opacity: ${Utils.setColorOpacity(badge.nameColor, 0.25)}" data-unlocked="${badge.isUnlocked}" ${cardHref} class="badge-card ${additionalClasses} shine-animation" role="button" aria-label="${badge.name}">
          ${lockedMessage}
          ${isNewUnlocked ? '<span class="new-badge">Nowe</span>' : ''}
          <span aria-hidden="true" class="shine-effect"></span>
          <span class="badge-icon-wrapper">
            <img src="${badge.icon}" alt="${badge.name}" class="badge-icon">
          </span>
          <span class="badge-info">
            <span class="badge-title">${badge.name}</span> 
          </span>
          <img class="rarity-badge" src="./images/banner.svg" alt="">
        </${cardType}> 
      `

        return card
    }
}

class ItemsAwardsList extends CardsList {
    static ITEMS_PER_PAGE = 21;

    constructor(container, listElement) {
        super(container, listElement);
        this.cardType = AchievementReward.ITEM;
        this.renderFunction = ItemsAwardsList.renderItemCard;

        this.apiCall = () => {
            const offset = (this.currentPage - 1) * ItemsAwardsList.ITEMS_PER_PAGE;
            return this.apiService.getRewardsItems(offset, ItemsAwardsList.ITEMS_PER_PAGE);
        };
    }

    updateTotalCounts() {
        const totalCount = this.stateManager.getRewardsItemsCount();
        this.totalItems = totalCount;
        this.totalPages = Math.ceil(totalCount / ItemsAwardsList.ITEMS_PER_PAGE);
    }

    getCachedCard(item) {
        const cacheKey = `${item.id}-${item.isUnlocked}`;
        if (!this.cardsCache.has(cacheKey)) {
            this.cardsCache.set(cacheKey, ItemsAwardsList.renderItemCard(item));
        }
        return this.cardsCache.get(cacheKey).cloneNode(true);
    }


    /** 
     * @param {AchievementRewardItem} item  
     * @param {boolean} isSecret
     * @param {boolean} onlyForPreview
     */
    static renderItemCard(item, isSecret = false, onlyForPreview = false) {
        const card = document.createElement('li')
        const lockedMessage = item.isUnlocked || onlyForPreview ? '' : '<span class="sr-only">Zablokowane</span>'
        const additionalClasses = !item.isUnlocked && !onlyForPreview ? 'locked' : 'unlocked'
        const valueInfo = Utils.getRewardValueInfo(item.value)
        const valueColor1 = Utils.setColorOpacity(valueInfo.color, 0.8)
        const valueColor2 = Utils.setColorOpacity(valueInfo.color, 0.4)
        const itemImage = isSecret ?
            `<img src="./images/question-mark.svg" alt="Nieznany" class="item-icon">` :
            `<img src="${item.icon}" alt="${item.name}" class="item-icon">`

        const cardType = onlyForPreview ? 'span' : 'a'
        const cardHref = onlyForPreview ? '' : `href="#${item.id}"`
        const isNewUnlocked = Utils.isDateWithinOneDay(item.unlockedDate)

        card.setAttribute('data-award-card', AchievementReward.ITEM)
        card.setAttribute(`data-${AchievementReward.ITEM}-card`, '')
        card.setAttribute('data-new', '')
        card.setAttribute('data-id', item.id)

        card.innerHTML = `
        <${cardType} data-award="${AchievementReward.ITEM}" data-${AchievementReward.ITEM} data-id="${item.id}" ${cardHref} data-unlocked="${item.isUnlocked}" class="item-card ${additionalClasses}" role="button" aria-label="${item.name}" style="--value-color: ${valueColor1}; --value-color-opacity: ${valueColor2};">
          ${lockedMessage}
          ${isNewUnlocked ? '<span class="new-badge">Nowe</span>' : ''}
          <span class="item-frame">${itemImage}</span>
          <span class="item-info">
            <span class="item-name"><b>${isSecret ? 'Nieznany przedmiot' : item.name}</b></span>  
          </span>                                
        </${cardType}>
      `

        return card
    }
}

class AchievementsList extends CardsList {
    static ITEMS_PER_PAGE = 12;

    constructor(container, listElement) {
        super(container, listElement);
        this.cardType = 'achievement';
        this.renderFunction = AchievementsList.renderAchievementCard;
        this.currentCategoryId = null;
        this.currentAchievements = [];

        // Dodatkowy cache dla kategorii
        this.categoryPagesCache = new Map();

        this.apiCall = () => {
            const offset = (this.currentPage - 1) * AchievementsList.ITEMS_PER_PAGE;
            return this.apiService.getAchievementsForList(
                this.currentCategoryId,
                offset,
                AchievementsList.ITEMS_PER_PAGE
            );
        };
    }

    /** @override */
    getCacheKey(page) {
        return `${this.currentCategoryId}-${page}`;
    }

    /** @override */
    clearCache() {
        super.clearCache();
        this.categoryPagesCache.clear();
    }

    clearCategoryCache(categoryId) {
        for (const key of this.pageCache.keys()) {
            if (key.startsWith(`${categoryId}-`)) {
                this.pageCache.delete(key);
            }
        }
    }

    updateTotalCounts() {
        const totalCount = this.stateManager.getAchievementsCount(this.currentCategoryId);
        this.totalItems = totalCount;
        this.totalPages = Math.ceil(totalCount / AchievementsList.ITEMS_PER_PAGE);
    }

    getCachedCard(achievement) {
        const cacheKey = `${achievement.id}-${achievement.status}`;
        if (!this.cardsCache.has(cacheKey)) {
            this.cardsCache.set(cacheKey, AchievementsList.renderAchievementCard(achievement));
        }
        return this.cardsCache.get(cacheKey).cloneNode(true);
    }

    async changeCategory(categoryId) {
        this.currentCategoryId = categoryId;
        this.currentPage = 1;
        this.listElement.innerHTML = '';
        await this.loadData();
        this.renderPagination();
    }

    /** @override */
    async loadData() {
        try {
            this.updateTotalCounts();

            const cachedPage = this.getPageFromCache(this.currentPage);
            if (cachedPage) {
                this.listElement.innerHTML = cachedPage.html;
                this.currentAchievements = cachedPage.data;
                return;
            }

            const data = await this.apiCall();
            this.currentAchievements = data;
            this.listElement.innerHTML = '';

            const fragment = document.createDocumentFragment();
            data.forEach(achievement => {
                const card = this.getCachedCard(achievement);
                fragment.appendChild(card);
            });

            this.listElement.appendChild(fragment);
            this.setPageInCache(this.currentPage, data);
            await Utils.waitForImages(this.listElement);
        } catch (e) {
            this.dispatchError(e);
        }
    }

    async showCards(currentCategoryId) {
        this.currentCategoryId = currentCategoryId;
        await this.loadData();
        this.renderPagination();
    }

    getCurrentAchievements = () => this.currentAchievements;

    /**
     * Rozszerzona implementacja showCards dla osiągnięć.
     * @override
     * @param {number} categoryId - ID kategorii osiągnięć do wyświetlenia
     */
    async showCards(categoryId) {
        try {
            if (this.currentCategoryId !== categoryId) {
                this.currentCategoryId = categoryId;
                this.currentPage = 1; 
            }

            await this.loadData();
            this.renderPagination();

            this.isInitialized = true;

            return this.getCurrentAchievements();
        } catch (error) {
            this.dispatchError(error);
        }
    }

    /** 
     * @param {AchievementDetails} achievement  
     * @param {boolean} isSecret
     * @param {boolean} onlyForPreview
     */
    static renderAchievementCard(achievement, isSecret = false, onlyForPreview = false) {

        if (!achievement || !achievement.category) {
            throw new Error('Incomplete Achievement details data!')
        }

        const card = document.createElement('li')
        const {
            status,
            category
        } = achievement
        const descCutSliceNumberc = onlyForPreview ? 47 : 120
        const isAchieved = status === AchievementStatus.ACHIVED
        const isBlocked = status === AchievementStatus.NOT_AVAILABLE
        const isCompletedNotRewarded = status === AchievementStatus.ACHIVED_NOT_REWARDED
        const blockedMessage = isBlocked ? '<span class="sr-only">Zablokowane</span>' : ''
        const unlockDateMessage = isAchieved ? Utils.getFullDateAndHoursAndMinutes(achievement.unlockDate) : "Niezdobyte"
        const achievementDesc = achievement.desc.slice(0, descCutSliceNumberc).trim()
        const achievementDescDots = achievement.desc.length > achievementDesc.length ? "..." : ""
        const categoryColorOpacity = Utils.setColorOpacity(category.color, 0.3)
        const toCollectClass = isCompletedNotRewarded ? "pulse-animation" : '';

        card.setAttribute('data-achievement-card', '')
        card.setAttribute('data-id', achievement.id)

        card.innerHTML = `
        <a role="button" data-achievement href="#${achievement.id}" data-id="${achievement.id}" data-unlocked="${!isBlocked}" class="achievement-card ${isBlocked ? 'locked' : 'unlocked' } ${isAchieved ? 'achieved' : '' }" style="--category-color: ${category.color}; --category-color-opacity: ${categoryColorOpacity}">
            ${blockedMessage} 
            ${isCompletedNotRewarded ? '<span data-collect-rewards-badge class="new-badge new-badge--top">Odbierz nagrody!</span>' : ''}
            <span class="achievement-card-bg" aria-hidden="true"></span>
            <span class="achievement-card-icon-wrapper">
              <img data-achievement-icon src="${achievement.icon}" alt="${achievement.name}" class="achievement-card-icon ${toCollectClass}">
            </span> 
            <span class="achievement-card-info">
              <span class="achievement-card-category">
                <span class="achievement-card-category-name">${category.name}</span>
                <img class="achievement-card-category-icon" src="${category.icon}" alt="Kategoria: ${category.name}">
              </span> 
              <span class="achievement-card-title">${achievement.name}</span>
              <span class="achievement-card-desc">${achievementDesc}${achievementDescDots}</span>
              <span class="achievement-card-achieved-date">${unlockDateMessage}</span>
            </span>
        </a>
      `

        return card
    }
}



// --------------------------------- MODALE ---------------------------------

/** @abstract */
class ModalDetails {
    constructor() {
        this.apiService = ApiService.getInstance()
        this.stateManager = LocalStorageStateManager.getInstance()
        this.modalId = null
        this.modal = null
        this.detailsType = null
        this.getDataFromState = (id) => {
            throw new Error("Method 'getDataFromState' must be implemented");
        };
        this.displayData = (data) => {
            throw new Error("Method 'displayData' must be implemented");
        };
    }

    /** @param {Error} e */
    displayError(e) {
        const errorMessage = `Wystąpił błąd podczas ładowania danych: ${e.message}`

        console.error(errorMessage, e)
        Utils.hideModal(this.modalId)

        CustomToast.show(CustomToast.ERROR, errorMessage)
    }

    /** @param {number} id */
    async loadData(id) {
        const data = this.getDataFromState(id)

        if (data) {
            this.displayData(data)
        } else {
            throw new Error(`${this.getDetailName()} o id: ${id} nie istnieje`)
        }

        return Promise.resolve()
    }

    getDetailName() {
        let detailName
        switch (this.detailsType) {
            case AchievementReward.ITEM:
                detailName = 'Przedmiot';
                break;
            case AchievementReward.BADGE:
                detailName = 'Odznaka';
                break;
            default:
                detailName = 'Osiągnięcie';
                break;
        }

        return detailName
    }

    /** @param {HTMLElement} card */
    showBlockedInfo(card) {
        let blockedInfo
        switch (this.detailsType) {
            case AchievementReward.ITEM:
                blockedInfo = 'Przedmiot jest zablokowany';
                break;
            case AchievementReward.BADGE:
                blockedInfo = 'Odznaka jest zablokowana';
                break;
            default:
                blockedInfo = 'Osiągnięcie jest zablokowane';
                break;
        }

        CustomToast.show(CustomToast.INFO, blockedInfo)
        Utils.shakeAnimation(card, 400)
    }

    /** @param {Event} e  */
    async show(e) {
        e.preventDefault()

        const card = e.target
        const {
            id,
            unlocked
        } = card.dataset

        if (!unlocked || unlocked !== "true") {
            this.showBlockedInfo(card)
            return
        }

        Utils.showModalLoading(this.modalId)
        Utils.showModal(this.modalId)

        try {
            await this.loadData(parseInt(id))
            await Utils.waitForImages(this.modal)

        } catch (e) {
            this.displayError(e)
        } finally {
            Utils.hideModalLoading(this.modalId)
        }
    }
}

class RewardModalDetails extends ModalDetails {

    constructor() {
        super()
        this.detailsType = 'reward'
        this.rewardType = null
        this.modalId = Utils.REWARD_DETAILS_MODAL_ID
        this.modal = Utils.getModal(this.modalId)
        this.rewardChest = new RewardChest(this.modal)
        this.imageEl = this.modal.querySelector('[data-image]')
        this.nameEl = this.modal.querySelector('[data-reward-name]')
        this.rewardTitle = this.modal.querySelector('[data-reward-title]')
        this.valueNameEl = this.modal.querySelector('[data-value-name]')
        this.descriptionEl = this.modal.querySelector('[data-desc]')
        this.openChestBtn = this.modal.querySelector('[data-open-chest-btn]')
        this.rewardMainContent = this.modal.querySelector('[data-main-content]')
        this.rewardContentInfo = this.modal.querySelector('[data-reward-info]')
        this.hideReward = false
        this.displayData = (data) => this.displayRewardDetails(data);
    }

    getDataFromState = (id) => {
        const idNumber = parseInt(id)

        return this.rewardType === AchievementReward.BADGE ?
            this.stateManager.getBadgeDetails(idNumber) :
            this.stateManager.getItemDetails(idNumber)
    }

    /** 
     * @param {AchievementRewardBadge | AchievementRewardItem} rewardData 
     */
    displayRewardDetails(rewardData) {
        const rewardValueInfo = Utils.getRewardValueInfo(rewardData.value)

        this.imageEl.src = rewardData.icon
        this.imageEl.style.removeProperty('display')

        this.rewardTitle.textContent = this.rewardType === AchievementReward.BADGE ?
            "Gratulacje zdobyłeś nową odznakę" :
            "Gratulacje zdobyłeś nowy przedmiot!"
        this.rewardContentInfo.style.setProperty('--transform', 'translateY(0)')
        this.nameEl.textContent = rewardData.name
        this.valueNameEl.textContent = rewardValueInfo.title
        this.descriptionEl.textContent = rewardData.desc

        this.rewardMainContent.style.removeProperty('--reward-color')
        this.valueNameEl.style.removeProperty('--value-color')
        this.rewardMainContent.style.removeProperty('--reward-color-opacity')

        this.openChestBtn.removeAttribute('disabled')

        const showRewardInfo = () => {
            this.rewardContentInfo.style.setProperty('--opacity', '1')
            if (this.hideReward) {
                this.rewardContentInfo.style.setProperty('--transform', 'translateY(-5rem)')
            }
            this.rewardMainContent.style.setProperty('--reward-color', rewardValueInfo.color)
            this.valueNameEl.style.setProperty('--value-color', rewardValueInfo.color)
            this.rewardMainContent.style.setProperty('--reward-color-opacity', Utils.setColorOpacity(rewardValueInfo.color, 0.5))
        }

        if (this.hideReward) {
            this.rewardContentInfo.style.setProperty('margin', '0 auto -4rem auto')
            this.rewardContentInfo.style.setProperty('--opacity', '0')

            if (this.rewardType === AchievementReward.ITEM) {
                this.imageEl.style.setProperty('display', 'none')
                this.imageEl.classList.remove('show')
            } else {
                this.imageEl.classList.add('show')
            }

            this.openChestBtn.style.removeProperty('display')
            this.rewardChest.chestElement.style.removeProperty('display')

            const openChest = async () => {
                this.openChestBtn.setAttribute('disabled', 'true')
                this.imageEl.classList.add('animate')
                this.imageEl.style.removeProperty('display')

                await this.rewardChest.open()
                this.imageEl.classList.add('show')
                this.openChestBtn.removeEventListener('click', openChest)

                showRewardInfo()
            }
            const resetChest = () => {
                this.rewardChest.reset()
                this.imageEl.classList.remove('animate')
                this.imageEl.classList.remove('show')
                this.rewardContentInfo.style.removeProperty('margin')
                this.modal.removeEventListener('close', resetChest)
            }

            this.openChestBtn.addEventListener('click', openChest)
            this.modal.addEventListener('close', resetChest)
        } else {
            this.imageEl.classList.add('show')
            this.openChestBtn.style.setProperty('display', 'none')
            this.rewardChest.chestElement.style.setProperty('display', 'none')
            showRewardInfo()
        }
    }

    /** 
     * @typedef {Object} MultipleRewardsProps 
     * @property {string} rewardType
     * @property {number[]} rewardsIds
     * @property {boolean} hideRewards  
     * @property {(nextId) => {}} callback
     * Wyświetla nagrody w kolejce
     * @param {MultipleRewardsProps} props
     */
    async showMultipleRewards({
        rewardType,
        rewardsIds,
        hideRewards = false,
        endRewardsCallback = () => {}
    }) {
        const openNextReward = () => {
            const nextId = rewardsIds.shift()

            if (nextId) {
                this.show(rewardType, nextId, hideRewards)
            } else {
                endRewardsCallback()
                this.modal.removeEventListener('close', openNextReward)
            }
        }
        openNextReward()

        this.modal.addEventListener('close', openNextReward)
    }

    /** 
     * @override
     * @param {string} rewardType
     * @param {number} id
     * @param {boolean} hideReward
     */
    async show(rewardType, id, hideReward = false) {
        this.hideReward = hideReward
        this.rewardType = rewardType

        Utils.showModalLoading(this.modalId)
        Utils.showModal(this.modalId)

        try {
            await this.loadData(parseInt(id))
            await Utils.waitForImages(this.modal)

        } catch (e) {
            this.displayError(e)
        } finally {
            Utils.hideModalLoading(this.modalId)
        }
    }
}

class AchievementModalDetails extends ModalDetails {
    constructor() {
        super()
        this.detailsType = 'osiagniecie'
        this.modalId = Utils.ACHIEVEMENTS_DETAILS_MODAL_ID
        this.modal = Utils.getModal(this.modalId)
        this.rewardModal = new RewardModalDetails()

        this.imageEl = this.modal.querySelector('[data-image]')
        this.nameEl = this.modal.querySelector('[data-name]')
        this.descriptionEl = this.modal.querySelector('[data-desc]')

        this.itemRewardsList = this.modal.querySelector('[data-item-rewards-list]')
        this.itemRewardContent = this.modal.querySelector('[data-items-reward-content]')

        this.badgeReward = this.modal.querySelector('[data-badge-reward]')
        this.badgeRewardContent = this.modal.querySelector('[data-badge-reward-content]')
        this.badgeRewardName = this.modal.querySelector('[data-badge-name]')

        this.difficultyValueEL = this.modal.querySelector('[data-difficulty-value]')
        this.pointsValueEl = this.modal.querySelector('[data-points-value]')
        this.expValueEl = this.modal.querySelector('[data-exp-value]')

        this.unlockedAtEl = this.modal.querySelector('[data-unlocked-at]')
        this.createdAtEl = this.modal.querySelector('[data-created-at]')
        this.categoryNameEl = this.modal.querySelector('[data-category-name]')
        this.modifiedAtEl = this.modal.querySelector('[data-modified-at]')
        this.typeNameEl = this.modal.querySelector('[data-type]')
        this.statusNameEl = this.modal.querySelector('[data-status]')
        this.categoryIconEl = this.modal.querySelector('[data-category-icon]')
        this.requirementsListEl = this.modal.querySelector('[data-requirements-list]')

        this.rewardsTabBtn = this.modal.querySelector('[data-tab-button][aria-controls="rewards-panel"]')
        this.requirementsTabBtn = this.modal.querySelector('[data-tab-button][aria-controls="requirements-panel"]')
        this.alertsContent = this.modal.querySelector('[data-alerts-content]')

        this.collectRewardsBtn = this.modal.querySelector('[data-collect-rewards-btn]')

        this.parentAchievementEl = this.modal.querySelector('[data-parent-content]')
        this.parentNameEl = this.modal.querySelector('[data-parent-name]')
        this.parentIconEl = this.modal.querySelector('[data-parent-icon]')
        this.parentTypeEl = this.modal.querySelector('[data-parent-type]')

        this.highlightButton = this.modal.querySelector('highlight-button')

        this.getDataFromState = (id) => this.stateManager.getAchievementDetails(parseInt(id));
        this.displayData = (data) => this.displayAchievementData(data);
    }

    /** 
     * @param {AchievementRewardBadge | null} badge 
     * @param {AchievementRewardItem[]} items 
     * @param {boolean} isRewardItemsSecret 
     */
    displayRewardsCards(badge, items, isRewardItemsSecret = false) {
        this.itemRewardsList.innerHTML = ''
        this.badgeReward.innerHTML = ''

        if (items && items.length > 0) {
            const cards = CardsList.renderCards(items, ItemsAwardsList.renderItemCard, isRewardItemsSecret, true);

            this.itemRewardsList.append(cards)
            this.itemRewardContent.style.removeProperty('display')
        } else {
            this.itemRewardContent.style.setProperty('display', 'none')
        }

        if (badge) {
            this.badgeRewardName.textContent = badge.name

            const cards = CardsList.renderCards([badge], BadgesAwardsList.renderBadgeCard, false, true)

            this.badgeReward.append(cards)
            this.badgeRewardContent.style.removeProperty('display')
        } else {
            this.badgeRewardContent.style.setProperty('display', 'none')
        }
    }

    /** @param {Achievement} parent */
    displayParentInfo(parent) {
        if (parent) {
            const {
                name,
                icon,
                type
            } = parent

            this.parentNameEl.textContent = name
            this.parentIconEl.src = icon
            this.parentTypeEl.textContent = Utils.capitalize(type)
            this.parentAchievementEl.style.removeProperty('display')
        } else {
            this.parentAchievementEl.style.setProperty('display', 'none')
        }
    }

    /** @param {AchievementDetails} achievementData */
    displayAchievementData(achievementData) {

        const {
            requirements,
            category
        } = achievementData

        if (achievementData.isUnlocked) {
            this.highlightButton.removeAttribute('hidden')
            this.highlightButton.setAttribute('data-type', 'achievement')
            this.highlightButton.setAttribute('data-type-id', achievementData.id)
            this.highlightButton.setAttribute('data-is-highlighted', achievementData.isHighlighted)
        } else {
            this.highlightButton.setAttribute('hidden', '')
        }

        this.imageEl.src = achievementData.icon
        this.nameEl.textContent = achievementData.name
        this.descriptionEl.textContent = achievementData.desc

        this.expValueEl.textContent = achievementData.rewards.exp
        this.pointsValueEl.textContent = achievementData.rewards.points
        this.difficultyValueEL.textContent = achievementData.difficulty

        this.requirementsListEl.innerHTML = ''

        this.requirementsListEl.append(this.createRequirementsList(requirements))

        this.unlockedAtEl.textContent = achievementData.unlockDate ? Utils.getFullDate(achievementData.unlockDate) : "Nie odblokowane"
        this.createdAtEl.textContent = Utils.getFullDate(achievementData.createdAt)
        this.categoryNameEl.textContent = category ? category.name : "Brak"

        if (achievementData.category) {
            this.categoryIconEl.src = category.icon
        }

        if (achievementData.items.length > 0 || achievementData.badge) {
            this.rewardsTabBtn.style.removeProperty('display')
            this.requirementsTabBtn.classList.remove('tab-button-single')
        } else {
            this.rewardsTabBtn.style.setProperty('display', 'none')
            this.requirementsTabBtn.classList.add('tab-button-single')
        }

        this.modifiedAtEl.textContent = Utils.getFullDate(achievementData.updatedAt)
        this.typeNameEl.textContent = Utils.capitalize(achievementData.type)
        this.statusNameEl.textContent = Utils.getFriendyStatusName(achievementData.status)

        this.displayParentInfo(achievementData.parent)
        this.initCollectRewardsButton(achievementData)
        this.displayRewardsCards(achievementData.badge, achievementData.items, achievementData.isRewardItemsSecret)
        this.showAlerts(achievementData.status)
    }

    /** @param {string} status  */
    showAlerts(status) {
        this.alertsContent.innerHTML = ''

        if (status === AchievementStatus.ACHIVED_NOT_REWARDED) {
            Utils.showAlert(CustomAlert.SUCCESS, "Gratulacje spełniłeś wszystkie warunki do odblokowania osiągnięcia!", this.alertsContent)
        }

        if (status === AchievementStatus.NOT_ACHIEVED) {
            Utils.showAlert(CustomAlert.INFO, "Spełnij wszystkie wymagania poniżej aby odblokować", this.alertsContent)
        }

        if (status === AchievementStatus.ACHIVED) {
            Utils.showAlert(CustomAlert.SUCCESS, "Gratulacje! Odblokowałeś osiągnięcie – świetna robota!", this.alertsContent)
        }
    }

    /** @param {AchievementDetails} achievement */
    showAllRewardsToasts(achievement) {
        const {
            items,
            badge,
            name,
            rewards
        } = achievement

        if (items && items.length > 0) {
            items.forEach(item => AchievementRewardToast.show(item.icon, item.name, AchievementReward.ITEM))
        }

        if (badge) {
            AchievementRewardToast.show(badge.icon, badge.name, AchievementReward.BADGE)
        }

        if (rewards.points > 0) {
            AchievementRewardToast.show(null, `Zdobyto Nowe Punkty + ${rewards.points}`)
        }
        if (rewards.exp > 0) {
            AchievementRewardToast.show(null, `Doświaczenie + ${rewards.exp}`)
        }

        AchievementUnlockedToast.show(name) 
    }

    /** @param {AchievementDetails} achievementData */
    async saveAchievementState(achievementData) {
        const {
            childrenIds,
            rewards
        } = achievementData
        const {
            items,
            badgeId,
        } = rewards


        if (items.length > 0) {
            await this.apiService.unlockItems(items)
        }

        if (childrenIds.length > 0) {
            await this.apiService.updateManyAchievements(childrenIds, {
                status: AchievementStatus.NOT_ACHIEVED,
            })
        }

        if (badgeId) {
            await this.apiService.unlockBadge(badgeId)
        }

        await this.apiService.updateAchievement(achievementData.id, {
            isUnlocked: true,
            status: AchievementStatus.ACHIVED,
            unlockDate: (new Date()).toISOString()
        })

        return Promise.resolve()
    }

    /** @param {AchievementDetails} achievementData */
    showAllItemsRewards(achievementData) {
        const {
            points,
            items,
            badgeId,
        } = achievementData.rewards
        const itemIdsCopy = Array.from(items)

        this.rewardModal.showMultipleRewards({
            rewardType: AchievementReward.ITEM,
            rewardsIds: items,
            hideRewards: achievementData.isRewardItemsSecret,
            endRewardsCallback: () => {
                this.showAllRewardsToasts(achievementData)

                Utils.dispatchCustomEvent(AchievementsPanel.UNLOCK_ACHIEVEMENT_EVENT, {
                    achievementId: achievementData.id,
                    points: points,
                    itemIds: itemIdsCopy,
                    badgeId: badgeId,
                    childrenIds: achievementData.childrenIds
                })
            }
        })
    }

    /** @param {AchievementDetails} achievementData */
    async collectRewards(achievementData) {
        const {
            items,
            badgeId
        } = achievementData.rewards

        Utils.showLoading(this.collectRewardsBtn)

        await this.saveAchievementState(achievementData)

        Utils.hideModal(this.modalId)
        Utils.hideLoading(this.collectRewardsBtn)

        if (badgeId) {
            this.rewardModal.showMultipleRewards({
                rewardType: AchievementReward.BADGE,
                rewardsIds: [badgeId],
                endRewardsCallback: () => {

                    if (items && items.length > 0) {
                        this.showAllItemsRewards(achievementData)
                    } else {
                        this.showAllRewardsToasts(achievementData)
                    } 
                }
            })
        } else {
            this.showAllItemsRewards(achievementData)
        }
    }

    /** @param {AchievementDetails} achievementData */
    initCollectRewardsButton(achievementData) {
        if (achievementData.status === AchievementStatus.ACHIVED_NOT_REWARDED) {
            this.collectRewardsBtn.style.removeProperty('display')
            this.collectRewardsBtn.classList.add('pulse-animation')

            this.collectRewardsBtn.addEventListener('click', (e) => this.collectRewards(achievementData), {
                once: true
            });

        } else {
            this.collectRewardsBtn.style.setProperty('display', 'none')
        }
    }

    /** @param {AchievementRequirement[]} requirements */
    createRequirementsList(requirements) {
        const requirementsListFragment = document.createDocumentFragment()

        requirements.forEach(requirement => {
            const card = document.createElement('li')
            const {
                requiredConditionsNumber,
                overallLogic,
                conditions
            } = requirement
            const requiredStatsListEl = document.createElement('ul')
            const conditionsListEl = document.createElement('ul')

            conditionsListEl.className = "requirement-condition-list"
            requiredStatsListEl.className = "details-stats requirement-stats"

            requiredStatsListEl.innerHTML = ` 
                <li class="stat-group requirement-stat-group">
                    <i class="fa-solid fa-chart-simple stat-icon"></i>
                    <span class="stat-name">Liczba warunków:</span>
                    <span class="stat-value">${requiredConditionsNumber}</span>
                </li>

                <li class="stat-group requirement-stat-group">
                    <i class="fa-solid fa-circle-dot stat-icon"></i>
                    <span class="stat-name">Czy wszystkie muszą być spełnione?:</span>
                    <span class="stat-value">${overallLogic === AchievementRequirement.LOGIC_AND ? "TAK" : "NIE"}</span>
                </li> 
            `

            conditions.forEach(condition => {
                const li = document.createElement('li')
                const {
                    target,
                    current,
                    desc,
                    type
                } = condition
                const currentFriendlyName = current ? 'Wykonano' : 'Nie Wykonano'
                const isCompleted = current == target || current === true

                li.className = `requirement-item requirement-condition-item requirements-card ${isCompleted ? 'requirements-card--completed': ''}`
                li.innerHTML = `
                 <span class="info">
                    <span class="desc">${desc}</span>
                    <hr>
                    <span class="type">
                        <i class="fa-solid fa-layer-group"></i> Typ: ${Utils.getConditionTypeName(type)}
                    </span>
                    <hr>
                    <span class="target">
                        <i class="fa-solid fa-bullseye"></i> Cel: ${typeof target === "number" ? target : Utils.snakeCaseToTitleCase(target)}
                    </span>
                    <hr>
                    <span class="current">
                        <i class="fa-solid fa-circle-dot"></i> Obecnie: ${typeof current === "number" ? current : currentFriendlyName}
                    </span> 
                 </span>
                `
                conditionsListEl.append(li)
            })

            card.append(requiredStatsListEl)
            card.append(conditionsListEl)

            requirementsListFragment.append(card)
        })

        return requirementsListFragment
    }
}

class BadgeModalDetails extends ModalDetails {
    constructor() {
        super()
        this.detailsType = AchievementReward.BADGE
        this.modalId = Utils.BADGE_DETAILS_MODAL_ID
        this.card3D = Utils.checkWindowWiderThanRem(85, () => new Card3D('#card-3D-test'))
        this.modal = Utils.getModal(this.modalId)
        this.badgeImage = this.modal.querySelector('[data-badge-image]')
        this.badgeName = this.modal.querySelector('[data-badge-name]')
        this.badgeUnlockedDate = this.modal.querySelector('[data-badge-unlocked-date]')
        this.badgeRarity = this.modal.querySelector('[data-badge-rarity]')
        this.badgeDesc = this.modal.querySelector('[data-badge-desc]')
        this.badgeRelatedList = this.modal.querySelector('[data-badge-related]')
        this.highlightButton = this.modal.querySelector('highlight-button')

        this.getDataFromState = (id) => this.stateManager.getBadgeDetails(parseInt(id));
        this.displayData = (data) => this.displayBadgeData(data);
    }

    /** @param {AchievementRewardBadgeDetails} badgeData */
    displayBadgeData(badgeData) {
        const badgeRelatedFragment = document.createDocumentFragment()
        const badgeValueInfo = Utils.getRewardValueInfo(badgeData.value)
        const badgeAchievements = badgeData.relatedAchievements.slice(0, 5)

        badgeData.badgeValueInfo = badgeValueInfo

        if (badgeData.isUnlocked) {
            this.highlightButton.removeAttribute('hidden')
            this.highlightButton.setAttribute('data-type', AchievementReward.BADGE)
            this.highlightButton.setAttribute('data-type-id', badgeData.id)
            this.highlightButton.setAttribute('data-is-highlighted', badgeData.isHighlighted)
        } else {
            this.highlightButton.setAttribute('hidden', '')
        }

        this.badgeRarity.textContent = badgeValueInfo.title
        this.badgeRarity.style.setProperty('--value-color', badgeValueInfo.color)

        this.badgeImage.src = badgeData.icon
        this.badgeName.textContent = badgeData.name
        this.modal.style.setProperty('--badge-color', badgeData.nameColor)
        this.badgeDesc.textContent = badgeData.desc
        this.badgeUnlockedDate.textContent = "Odblokowano: " + Utils.getFullDateAndHoursAndMinutes(badgeData.unlockedDate)
        this.badgeRelatedList.innerHTML = ''

        badgeAchievements.forEach(achievement => {
            const achievementCard = document.createElement('li')
            achievementCard.className = "card"
            achievementCard.innerHTML = `
          <img class="icon" src="${achievement.icon}" />
          <span class="name">${achievement.name}</span>
          <span class="type">${Utils.capitalize(achievement.type)}</span>
        `
            badgeRelatedFragment.append(achievementCard)
        })

        this.badgeRelatedList.append(badgeRelatedFragment)
    }
}

class ItemModalDetails extends ModalDetails {
    constructor() {
        super()
        this.detailsType = AchievementReward.ITEM
        this.modalId = Utils.ITEM_DETAILS_MODAL_ID
        this.modal = Utils.getModal(this.modalId)
        this.itemImage = this.modal.querySelector('[data-item-image]')
        this.itemName = this.modal.querySelector('[data-item-name]')
        this.itemUnlockedDate = this.modal.querySelector('[data-item-unlocked-date]')
        this.itemRarity = this.modal.querySelector('[data-item-rarity]')
        this.itemDesc = this.modal.querySelector('[data-item-desc]')
        this.itemValue = this.modal.querySelector('[data-item-value]')
        this.itemValueQuote = this.modal.querySelector('[data-item-rarity-quote]')
        this.statsContainer = this.modal.querySelector('[data-item-stats]')
        this.highlightButton = this.modal.querySelector('highlight-button')
        this.progressBarsCache = new Map();

        this.getDataFromState = (id) => this.stateManager.getItemDetails(parseInt(id));
        this.displayData = (data) => this.displayItemData(data);
    }

    /** @param {AchievementRewardItem} itemData */
    displayItemData(itemData) {
        const itemValueInfo = Utils.getRewardValueInfo(itemData.value)
        const valueColor = itemValueInfo.color
        const valueColorOpacity = Utils.setColorOpacity(valueColor, 0.4)


        if (itemData.isUnlocked) {
            this.highlightButton.setAttribute('data-type', AchievementReward.ITEM)
            this.highlightButton.setAttribute('data-type-id', itemData.id)
            this.highlightButton.setAttribute('data-is-highlighted', itemData.isHighlighted)
            this.highlightButton.removeAttribute('hidden')
        } else {
            this.highlightButton.setAttribute('hidden', '')
        }

        this.itemRarity.textContent = itemValueInfo.title
        this.itemValueQuote.textContent = `"${itemValueInfo.desc}"`
        this.modal.style = `--value-color: ${valueColor}; --value-color-opacity: ${valueColorOpacity}`

        this.itemImage.src = itemData.icon
        this.itemName.textContent = itemData.name
        this.itemName.style.color = itemData.nameColor
        this.itemValue.textContent = itemData.value + " / 10"
        this.itemDesc.textContent = itemData.desc
        this.itemUnlockedDate.textContent = "Odblokowano: " + Utils.getFullDateAndHoursAndMinutes(itemData.unlockedDate)
        this.statsContainer.innerHTML = ''

        this.renderProgressBars(itemData.statistics);
    }

    /** 
     * Generuje klucz cache'a dla statystyki
     * @param {AchievementRewardItemStatistic} stat 
     * @returns {string}
     */
    getStatCacheKey(stat) {
        return `${stat.name}-${stat.value}-${stat.maxValue}-${stat.color}`;
    }

    /**
     * Generuje HTML dla pojedynczego progress bara
     * @param {AchievementRewardItemStatistic} stat 
     * @param {number} index 
     * @returns {HTMLElement}
     */
    createProgressBar(stat, index) {
        const progress = document.createElement('div');
        const percent = Utils.getPercentOfData(stat.value, stat.maxValue);
        const statsColorOpacity = Utils.setColorOpacity(stat.color, 0.5);
        const gradient = `linear-gradient(to right, ${statsColorOpacity}, ${stat.color})`;

        progress.setAttribute('data-progress-bar', `progress-${index + 1}`);
        progress.className = "animated-progress";
        progress.innerHTML = `  
        <div class="animated-progress-bar">
          <img class="animated-progress-icon" src="${stat.icon}" alt="${stat.name}">
          <div class="animated-progress-per" style="background: ${gradient};" per="${percent}"></div>
        </div> 
        <div class="animated-progress-info">
            <div data-name class="animated-progress-name">${stat.name}</div>
            <div class="animated-progress-stats">
                <span data-current-value>${stat.value}</span> / <span data-max-value>${stat.maxValue}</span>
            </div> 
        </div> 
      `;

        return progress;
    }

    /** 
     * @param {AchievementRewardItemStatistic[]} statistics 
     */
    renderProgressBars(statistics) {
        const statsListFragment = document.createDocumentFragment();

        statistics.forEach((stat, index) => {
            const cacheKey = this.getStatCacheKey(stat);
            let progressBar;

            if (this.progressBarsCache.has(cacheKey)) {
                progressBar = this.progressBarsCache.get(cacheKey).cloneNode(true);
            } else {
                progressBar = this.createProgressBar(stat, index);
                this.progressBarsCache.set(cacheKey, progressBar.cloneNode(true));
            }

            statsListFragment.append(progressBar);
        });

        this.statsContainer.append(statsListFragment);

        new AnimatedProgressBars(this.modal, "[data-progress-bar] [per]", 1750);
    }
}

// --------------------------------- ZAKŁADKI ---------------------------------

/** @abstract */
class Panel {
    static ERROR_EVENT = "panel-error-occur-event"
    static PROFILE = "profile"
    static AWARDS = "awards"
    static ACHIEVEMENTS = "achievements"

    /** @param {string} containerSelector */
    constructor(containerSelector) {
        /** @type {HTMLElement} */
        this.containerSelector = containerSelector
        this.container = document.querySelector(containerSelector);
        this.apiService = ApiService.getInstance()
        this.stateManager = LocalStorageStateManager.getInstance()
        this.panelName = null
        this.badgeDetails = new BadgeModalDetails()
        this.itemDetails = new ItemModalDetails()
        this.achievementDetails = new AchievementModalDetails()
        this.setPanelEvents()
    }

    /** 
     * @param {ItemModalDetails | BadgeModalDetails | AchievementModalDetails} detailsModal 
     * @param {CustomEvent} e 
     */
    openDetailsModal(detailsModal, e) {
        try {
            detailsModal.show(e)
        } catch (e) {
            this.showError(e)
        }
    }

    /** @final */
    setPanelEvents() {
        document.addEventListener(Panel.ERROR_EVENT, (e) => {
            const {
                error,
                panel,
                content
            } = e.detail

            if (panel === this.panelName) {
                this.showError(error, content)
            }
        })

        this.container.addEventListener('click', (e) => {
            const target = e.target

            if (e.target.hasAttribute('data-achievement-card') || e.target.hasAttribute('data-achievement')) {
                this.openDetailsModal(this.achievementDetails, e)
            }
            if (target.dataset.award === AchievementReward.ITEM) {
                this.openDetailsModal(this.itemDetails, e)
            }
            if (target.dataset.award === AchievementReward.BADGE) {
                this.openDetailsModal(this.badgeDetails, e)
            }
        })
    }

    /** @final */
    getCurrentHash() {
        return window.location.hash.replace('#', '')
    }

    /** 
     * @final
     * @param {Error} e 
     * @param {HTMLElement | null} content
     */
    showError(e, content = null) {
        const context = content ?? this.container
        const anyErrorAlerts = context.querySelectorAll('.alert.error-alert')

        console.error(e);

        if (anyErrorAlerts.length === 0) {
            Utils.showAlert(CustomAlert.ERROR, e.message, context)
        }

        CustomToast.show(CustomToast.ERROR, e.message)
    }

    /** 
     * @final
     * @param {string} attrName 
     */
    getByAttribute(attrName) {
        const element = this.container.querySelector(`[${attrName}]`)

        if (!element) {
            console.error(`element[${attrName}] is null!`);
        }

        return element
    }

    /**
     * 
     * @param {string[][]} filterPairs
     * @param {HTMLElement} filterWrapper 
     * @param {Function} filterCallback 
     */
    setFilterCheckboxEventListeners(filterPairs, filterWrapper, filterCallback) {
        const filterMethods = filterPairs.flat()
        const getCheckbox = (name) => filterWrapper.querySelector(`input[type="checkbox"][name="${name}"]`)
        const checkboxFilterPairsMap = new Map([
            ...filterPairs.map(([first, second]) => [getCheckbox(first), getCheckbox(second)]),
            ...filterPairs.map(([first, second]) => [getCheckbox(second), getCheckbox(first)])
        ]);

        filterWrapper.addEventListener('change', (e) => {
            const checkbox = e.target
            const nameAttribute = checkbox.getAttribute('name')

            if (filterMethods.includes(nameAttribute)) {

                if (checkbox.checked) {
                    const oppositeCheckbox = checkboxFilterPairsMap.get(checkbox);

                    if (oppositeCheckbox) {
                        oppositeCheckbox.checked = false;
                    }
                }

                const checkedFilterCheckboxes = filterWrapper.querySelectorAll(`input[type="checkbox"]:checked`)
                const checkedFilterMethods = [...checkedFilterCheckboxes].map(checkbox => checkbox.getAttribute('name'))

                filterCallback(...checkedFilterMethods)
            }

        })
    }
}

class UserProfilePanel extends Panel {
    static MAX_CABINET_AWARDS_NUMBER = 7
    static MAX_ACHIEVEMENTS_NUMBER = 5

    currentCabinetItems = 0
    currentCabinetBadges = 0
    currentCabinetAchievements = 0

    achievementsPointsProgressBar
    achievementsNumberProgressBar
    badgesProgressBar
    itemsProgressBar
    progressBarsComponent
    customPieChart

    constructor(containerSelector) {
        super(containerSelector)
        this.itemList = this.getByAttribute('data-items-list')
        this.badgesList = this.getByAttribute('data-badges-list')
        this.errorCard = this.getByAttribute('data-error-card')
        this.achievementsList = this.getByAttribute('data-achievements-list')
        this.pieChartAppearance = this.getByAttribute('data-pie-chart-appearance');

        this.userRankingNumber = this.container.querySelector("[data-ranking-number]")
        this.userAchievementsNumber = this.container.querySelector("[data-achievements-number]")
        this.userBadgesNumber = this.container.querySelector("[data-badges-number]")
        this.userItemsNumber = this.container.querySelector("[data-items-number]")

        this.profileData = null

        this.isInitialized = false
        this.panelName = Panel.PROFILE
        this.init()

        document.addEventListener(MainNavigation.CHANGE_PAGE_EVENT, (e) => this.init())
        this.setEventListeners()
    }

    init() {
        if (super.getCurrentHash() === MainNavigation.PAGE_PROFILE && !this.isInitialized) {
            this.showProfileData()
        }
    }

    setEventListeners() {
        document.addEventListener(AchievementsPanel.UNLOCK_ACHIEVEMENT_EVENT, (e) => {
            this.updateProgressBars(e)
            this.updateUserStatistics(e)

            if (this.customPieChart && e.detail.achievementId) { 
                this.customPieChart.reRender(() => {
                    const {statistics} = this.stateManager.getUserProfileData() 
                    this.showPieChart(statistics)
                })
            }
        })

        document.addEventListener(HighlightButton.CHANGE_HIGHLIGHT_EVENT, (e) => this.onChangeHighlightStatus(e))
    }

    /** @param {CustomEvent} e */
    updateUserStatistics(e) {
        const {
            itemIds,
            badgeId,
            achievementId,
        } = e.detail

        if (itemIds && itemIds.length > 0) {
            const currentItemsNumber = parseInt(this.userItemsNumber.textContent)
            this.userItemsNumber.textContent = currentItemsNumber + itemIds.length
        }

        if (badgeId) {
            const currentBadgesNumber = parseInt(this.userBadgesNumber.textContent)
            this.userBadgesNumber.textContent = currentBadgesNumber + 1
        }

        if (achievementId) {
            const currentAchievementsNumber = parseInt(this.userAchievementsNumber.textContent)
            this.userAchievementsNumber.textContent = currentAchievementsNumber + 1
        }
    } 

    /** @param {CustomEvent} e */
    updateProgressBars(e) {
        const {
            itemIds,
            badgeId,
            achievementId,
            points
        } = e.detail

        const updateProgressBar = (progressBar, updateValue) => {
            if (!progressBar) return

            const currentValueAttr = progressBar.getAttribute('current-value')
            const maxValueAttr = progressBar.getAttribute('max-value')
            const maxValue = parseInt(maxValueAttr)
            const newValue = parseInt(currentValueAttr) + parseInt(updateValue)
            const progressWrapperEl = progressBar.closest('[data-progress-bar]')
            const currentValueEl = progressWrapperEl.querySelector('[data-current-value]')

            if (currentValueEl) currentValueEl.textContent = newValue

            progressBar.setAttribute('per', Utils.getPercentOfData(newValue, maxValue))

            this.progressBarsComponent.animateElement(progressBar, false)
        }

        if (points > 0) updateProgressBar(this.achievementsPointsProgressBar, points)

        if (itemIds && itemIds.length > 0) updateProgressBar(this.itemsProgressBar, itemIds.length)

        if (badgeId) updateProgressBar(this.badgesProgressBar, 1)

        if (achievementId) updateProgressBar(this.achievementsNumberProgressBar, 1)

        this.progressBarsComponent?.reset()
    }

    /** @param {CustomEvent} e */
    onChangeHighlightStatus(e) {
        const {
            type
        } = e.detail

        if (type === AchievementReward.BADGE) {
            this.updateHighlighedBadges(e)
        } else if (type === AchievementReward.ITEM) {
            this.updateHighlighedItems(e)
        } else {
            this.updateHighlighedAchievements(e)
        }
    }

    async showProfileData() {
        Utils.showLoading(this.container)

        try {
            const profileData = await this.apiService.getUserProfileData()

            this.profileData = profileData

            this.setUserTitle(profileData.activeBadge.name, profileData.activeBadge.nameColor)
            this.initUserStatistics()
            this.initPieChart()
            this.initProgressBars()
            this.renderCabinetAwards(profileData.cabinetBadgesAwards, profileData.cabinetItemsAwards)
            this.renderHighlightedAchievementList(profileData.highlightedAchievements)

            this.isInitialized = true

            await Utils.waitForImages(this.container)

        } catch (e) {
            this.showError(e, this.errorCard)
        } finally {
            Utils.hideLoading(this.container)
        }
    }

    /** @param {AchievementDetails[]} achievements  */
    renderHighlightedAchievementList(achievements) {
        const max = UserProfilePanel.MAX_ACHIEVEMENTS_NUMBER
        const achievementsData = achievements.slice(0, max)
        const cards = CardsList.renderCards(achievementsData, AchievementsList.renderAchievementCard, true);

        this.currentCabinetAchievements = cards.childElementCount

        this.achievementsList.append(cards)
    }

    /**
     * @param {AchievementRewardBadge[]} badgesAwards 
     * @param {AchievementRewardItem[]} itemsAwards 
     */
    renderCabinetAwards(badgesAwards, itemsAwards) {
        const max = UserProfilePanel.MAX_CABINET_AWARDS_NUMBER

        const badgesCards = CardsList.renderCards(badgesAwards.slice(0, max), BadgesAwardsList.renderBadgeCard);
        const itemsCards = CardsList.renderCards(itemsAwards.slice(0, max), ItemsAwardsList.renderItemCard);

        this.currentCabinetItems = itemsCards.childElementCount
        this.currentCabinetBadges = badgesCards.childElementCount

        this.itemList.append(itemsCards)
        this.badgesList.append(badgesCards)
    }

    /** 
     * @param {string} title 
     * @param {string} titleColor 
     */
    setUserTitle(title, titleColor) {
        const userTitleEl = this.getByAttribute('data-user-title')

        userTitleEl.style.color = titleColor;
        userTitleEl.style.backgroundColor = Utils.invertColor(titleColor);
        userTitleEl.innerHTML = `<i class="fa-solid fa-award"></i>${title}`
    }

    initUserStatistics() {
        const {
            achievementsAchivedNumber,
            rankingNumber,
            badgesUnlockedNumber,
            itemsUnlockedNumber,
        } = this.profileData.statistics

        this.userRankingNumber.textContent = '#' + rankingNumber
        this.userAchievementsNumber.textContent = achievementsAchivedNumber
        this.userBadgesNumber.textContent = badgesUnlockedNumber
        this.userItemsNumber.textContent = itemsUnlockedNumber
    }

    initProgressBars() {
        const {
            achievementPoints,
            maxAchievementPoints,
            allAchievementsNumber,
            allItemsNumber,
            allBadgesNumber,
            achievementsAchivedNumber,
            badgesUnlockedNumber,
            itemsUnlockedNumber,
        } = this.profileData.statistics

        const initProgressBar = (progressName, currentValue, maxValue) => {
            const progressWrapperEl = this.container.querySelector(`[data-progress-bar="${progressName}"]`)
            const progressEl = progressWrapperEl.querySelector(`[per]`)
            const currentValueEl = progressWrapperEl.querySelector('[data-current-value]')
            const maxValueEl = progressWrapperEl.querySelector('[data-max-value]')
            progressEl.setAttribute('per', Utils.getPercentOfData(currentValue, maxValue))
            progressEl.setAttribute('current-value', currentValue)
            progressEl.setAttribute('max-value', maxValue)

            currentValueEl.textContent = currentValue
            maxValueEl.textContent = maxValue

            return progressEl
        }

        this.achievementsPointsProgressBar = initProgressBar("achievements-points", achievementPoints, maxAchievementPoints)
        this.achievementsNumberProgressBar = initProgressBar("achievements-number", achievementsAchivedNumber, allAchievementsNumber)
        this.badgesProgressBar = initProgressBar("badges", badgesUnlockedNumber, allBadgesNumber)
        this.itemsProgressBar = initProgressBar("items", itemsUnlockedNumber, allItemsNumber)

        this.progressBarsComponent = new AnimatedProgressBars(this.container, "[data-progress-bar] [per]", 1000); 
    } 

    initPieChart() {
        this.showPieChart(this.profileData.statistics)
        this.customPieChart = new CustomPieChart(this.containerSelector + " [data-pie-chart]");
    }

    /** @param {UserProfileStatistics} statistics */
    showPieChart(statistics) {
        const {
            achievementsUnlockedNumber,
            allAchievementsNumber,
            achievementsBlockedNumber,
            achievementsAchivedNumber
        } = statistics 

        this.pieChartAppearance.setAttribute(
            "data-pie",
            JSON.stringify({
                data: [{
                        color: "var(--yellow)",
                        percent: Utils.getPercentOfData(achievementsAchivedNumber, allAchievementsNumber),
                        label: `Osiągnięte (${achievementsAchivedNumber})`,
                    },
                    {
                        color: "var(--gray)",
                        percent: Utils.getPercentOfData(achievementsBlockedNumber, allAchievementsNumber),
                        label: `Zablokowane (${achievementsBlockedNumber})`,
                    },
                    {
                        color: "var(--light-gray)",
                        percent: Utils.getPercentOfData(achievementsUnlockedNumber, allAchievementsNumber),
                        label: `Do Zdobycia (${achievementsUnlockedNumber})`,
                    },
                ],
                animate: true,
                animationSpeed: 1250,
            })
        );
    }

    /** @param {CustomEvent} e */
    async updateHighlighedAchievements(e) {
        const {
            typeId: id,
            isHighlighted
        } = e.detail

        if (this.currentCabinetAchievements === 0) {
            this.currentCabinetAchievements = this.stateManager.getUserProfileData().highlightedAchievements.length
        }

        if (isHighlighted && this.currentCabinetAchievements < UserProfilePanel.MAX_ACHIEVEMENTS_NUMBER) {
            const achievement = this.stateManager.getAchievementDetails(id)
            const achievementCard = AchievementsList.renderAchievementCard(achievement)

            this.achievementsList.append(achievementCard)
            this.currentCabinetAchievements++

            await this.apiService.setHighlightAchievement(id, isHighlighted)

            CustomToast.show(CustomToast.SUCCESS, "Osiągnięcie zostało wyróżnione w profilu!")

        } else if (!isHighlighted) {
            const achievementCard = this.achievementsList.querySelector(`[data-achievement-card][data-id="${id}"]`)

            if (achievementCard) {
                achievementCard.remove()
                this.currentCabinetAchievements--

                await this.apiService.setHighlightAchievement(id, isHighlighted)
            }

            CustomToast.show(CustomToast.SUCCESS, "Osiągnięcie zostało usunięte z profilu")

        } else {
            CustomToast.show(CustomToast.INFO, "Przekroczyłeś limit wyróżnionych osiągnięć w profilu!")
        }
    }

    /** @param {CustomEvent} e */
    async updateHighlighedBadges(e) {
        const {
            typeId: id,
            isHighlighted
        } = e.detail

        if (this.currentCabinetBadges === 0) {
            this.currentCabinetBadges = this.stateManager.getUserProfileData().cabinetBadgesAwards.length
        }

        if (isHighlighted && this.currentCabinetBadges < UserProfilePanel.MAX_CABINET_AWARDS_NUMBER) {
            const badge = this.stateManager.getBadgeDetails(id)
            const badgeCard = BadgesAwardsList.renderBadgeCard(badge)

            this.badgesList.append(badgeCard)
            this.currentCabinetBadges++

            await this.apiService.setHighlightBadge(id, isHighlighted)

            CustomToast.show(CustomToast.SUCCESS, "Odznaka została dodana do gablotki!")

        } else if (!isHighlighted) { 
            const badgeCard = this.badgesList.querySelector(`[data-badge-card][data-id="${id}"]`)

            if (badgeCard) {
                badgeCard.remove()
                this.currentCabinetBadges--

                await this.apiService.setHighlightBadge(id, isHighlighted)
            }

            CustomToast.show(CustomToast.SUCCESS, "Odznaka została usunięta z gablotki!")
        } else {
            CustomToast.show(CustomToast.INFO, "Gablotka z odznakami jest już pełna!")
        }
    }

    /** @param {CustomEvent} e */
    async updateHighlighedItems(e) {
        const {
            typeId: id,
            isHighlighted
        } = e.detail

        if (this.currentCabinetItems === 0) {
            this.currentCabinetItems = this.stateManager.getUserProfileData().cabinetItemsAwards.length
        }

        if (isHighlighted && this.currentCabinetItems < UserProfilePanel.MAX_CABINET_AWARDS_NUMBER) {
            const item = this.stateManager.getItemDetails(id)
            const itemCard = ItemsAwardsList.renderItemCard(item)

            this.itemList.append(itemCard)
            this.currentCabinetItems++

            await this.apiService.setHighlightItem(id, isHighlighted)

            CustomToast.show(CustomToast.SUCCESS, "Przedmiot został dodany do gablotki!")

        } else if (!isHighlighted) {
            const itemCard = this.itemList.querySelector(`[data-item-card][data-id="${id}"]`)

            if (itemCard) {
                itemCard.remove()
                this.currentCabinetItems--

                await this.apiService.setHighlightItem(id, isHighlighted)
            }

            CustomToast.show(CustomToast.SUCCESS, "Przedmiot został usunięty z gablotki!")
            
        } else {
            CustomToast.show(CustomToast.INFO, "Gablotka z przedmiotami jest już pełna!")
        }
    }

}

class AchievementsPanel extends Panel {
    static UNLOCK_ACHIEVEMENT_EVENT = "custom-update-achievement-event"

    MODE = {
        LIST: "list",
        TILES: "tiles",
        TREE: "tree"
    }

    CHANGE_MODE_ANIMATION_DURATION = 300

    categories
    currentCategoryId
    categoriesList
    treeManager

    constructor(containerSelector) {
        super(containerSelector)
        this.categoriesContainer = this.getByAttribute('data-categories')
        this.achievementsContainer = this.getByAttribute('data-achievements-container')
        this.treeContainer = this.getByAttribute('data-tree-container')
        this.achievementsListEl = this.getByAttribute('data-achievements-list')
        this.achievementsListContainer = this.getByAttribute('data-achievements-list-container')
        this.filterAwardsWrapper = this.getByAttribute('data-filter-achievements')
        this.treeManager = new TreeManager(this.treeContainer);
        this.achievementsList = new AchievementsList(this.achievementsListContainer, this.achievementsListEl)
        this.sortSelect = new CustomSelect(this.getByAttribute('data-custom-select'))
        this.panelName = Panel.ACHIEVEMENTS
        this.currentDisplayMode = this.MODE.TILES
        this.isInitialized = false

        this.backgroundElement = this.getByAttribute('data-bg');
        this.initParallax();

        this.setFilterCheckboxEventListeners(
            [
                ["only-unlocked", "only-no-unlocked"],
                ["only-hard", "only-easy"],
            ],
            this.filterAwardsWrapper, (...args) => this.filterAchievements(...args)
        )

        document.addEventListener(MainNavigation.CHANGE_PAGE_EVENT, (e) => {
            if (super.getCurrentHash() === MainNavigation.PAGE_ACHIEVEMENTS && !this.isInitialized) {
                this.init()
            }
        })

        if (super.getCurrentHash() === MainNavigation.PAGE_ACHIEVEMENTS) {
            this.init()
        }
    }

    initParallax() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (prefersReducedMotion.matches) {
            return;
        }
        this.updateBackgroundPosition();

        window.addEventListener('scroll', () => this.updateBackgroundPosition());
    }

    updateBackgroundPosition() {
        const scrollPosition = window.scrollY || window.pageYOffset;

        this.backgroundElement.style.transform = `translateY(${scrollPosition}px)`;
    }

    async init() {
        this.setEventListeners()

        Utils.showLoading(this.container)

        try {
            if (!this.categories) {
                this.categories = await this.apiService.getAllAchievementsCategories()
                this.categoriesList = new CategoriesList(this.categoriesContainer, this.categories);
                this.currentCategoryId = this.categories[0]?.id
            }

            if (this.currentDisplayMode === this.MODE.TREE) {
                await this.initializeAchievementsTree(this.currentCategoryId)
            } else {
                await this.achievementsList.showCards(this.currentCategoryId)
            }

        } catch (e) {
            this.showError(e, this.achievementsContainer)
        } finally {
            Utils.hideLoading(this.container)
            this.isInitialized = true
        }
    }

    /** @param {CustomEvent} e  */
    onUpdateAchievements(e) {
        const {
            achievementId,
            childrenIds
        } = e.detail
        const tree = this.treeManager?.getActiveTree()
        const isTreeViewMode = this.currentDisplayMode === this.MODE.TREE
        const context = isTreeViewMode ? this.treeContainer : this.achievementsListContainer
        const childsElements = []
        const achievementElement = context.querySelector(`[data-achievement][data-id="${achievementId}"]`)

        if (achievementElement) {
            achievementElement.classList.remove("achieved-no-rewarded", "pulse-animation")
            achievementElement.classList.add('achieved')

            if (context === this.achievementsListContainer) {
                const achievementImageElement = achievementElement.querySelector('[data-achievement-icon]')
                const achievementCollectRewardsBadge = achievementElement.querySelector('[data-collect-rewards-badge]')

                achievementImageElement.classList.remove("pulse-animation")
                achievementCollectRewardsBadge?.remove()
            }
        }

        childrenIds.forEach(id => {
            const childElement = context.querySelector(`[data-achievement][data-id="${id}"]`)

            if (tree) tree.highlightPathBetweenNodes(achievementId, id)

            if (childElement) childsElements.push(childElement)
        })

        childsElements.forEach(childElement => {
            childElement.classList.remove("locked")
            childElement.setAttribute('data-unlocked', 'true')
        })
    }

    setEventListeners() {
        document.addEventListener(AchievementsPanel.UNLOCK_ACHIEVEMENT_EVENT, (e) => {
            this.achievementsList.clearCache()
            this.treeManager.clearCache()
            this.onUpdateAchievements(e)
        })
        document.addEventListener(CategoriesList.CATEGORY_CHNAGE_EVENT, (e) => this.changeCategory(parseInt(e.detail.id)))
        document.addEventListener(CustomSearchForm.SEARCH_EVENT, (e) => {
            const {
                value,
                panel
            } = e.detail

            if (panel === this.panelName) {
                this.searchAchievements(value)
            }
        })

        this.sortSelect.onChangeSelect((e) => this.sortAchievements(e))

        this.container.addEventListener('click', (e) => {
            const target = e.target

            if (target.hasAttribute('data-change-display-mode')) {
                this.changeDataDisplayMode(e)
            }
        })
    }

    async initializeAchievementsTree(initCategoryId = null) {

        if (super.getCurrentHash() === MainNavigation.PAGE_ACHIEVEMENTS) {
            return await this.treeManager.initializeTree(this.categories, initCategoryId);
        }

        return Promise.resolve();
    }

    getAchievementsByCat = (categoryId) => this.achievements.filter(x => x.categoryId === categoryId)

    changeDataDisplayMode(e) {
        const target = e.target
        const prevActiveBtn = target.parentElement.querySelector('[data-change-display-mode].active')

        if (prevActiveBtn === target) return

        const mode = target.getAttribute('data-change-display-mode')
        const isCurrentTreeDisplayMode = this.currentDisplayMode === this.MODE.TREE
        const toggleContainers = (containerToShow, containerToHide) => {
            Utils.fadeAnimation(() => {
                containerToHide.style.display = "none"
                containerToShow.style.removeProperty('display')

            }, [containerToHide, containerToShow], this.CHANGE_MODE_ANIMATION_DURATION)
        }

        target.classList.add('active')
        prevActiveBtn.classList.remove('active')

        this.currentDisplayMode = mode

        if (mode === this.MODE.TREE) {
            toggleContainers(this.treeContainer, this.achievementsListContainer)

            if (!this.treeManager.getActiveTree()) {
                this.initializeAchievementsTree(this.currentCategoryId)
            } else {
                this.changeCategory(this.currentCategoryId, true)
            }

        } else {
            if (isCurrentTreeDisplayMode) {
                toggleContainers(this.achievementsListContainer, this.treeContainer)
                this.changeCategory(this.currentCategoryId, true)
            }

            Utils.fadeAnimation(() => {
                this.achievementsListEl.classList.remove(`achievements-${this.MODE.LIST}`, `achievements-${this.MODE.TILES}`)
                this.achievementsListEl.classList.add(`achievements-${mode}`)
            }, this.achievementsListEl, this.CHANGE_MODE_ANIMATION_DURATION)
        }
    }

    /** 
     * @param {number} categoryId 
     * @param {boolean} forceChange
     */
    async changeCategory(categoryId, forceChange = false) {
        const isTreeDisplayMode = this.currentDisplayMode === this.MODE.TREE
        const achievementsContainer = isTreeDisplayMode ? this.achievementsContainer : this.achievementsListEl

        if (this.currentCategoryId === categoryId && !forceChange) {
            return
        }

        Utils.showLoading(achievementsContainer)

        this.currentCategoryId = categoryId

        try {
            isTreeDisplayMode
                ?
                await this.treeManager.switchCategory(this.currentCategoryId) :
                await this.achievementsList.changeCategory(this.currentCategoryId)
        } catch (e) {
            this.showError(e, this.achievementsContainer)
        } finally {
            Utils.hideLoading(achievementsContainer)
        }
    }

    getCurrentAchievementsData() {
        const currentOffset = this.achievementsList.offset
        const currentData = this.stateManager.getAchievementsForList(this.currentCategoryId, currentOffset, AchievementsList.ITEMS_PER_PAGE)
        const listElement = this.achievementsListEl

        return {
            currentData,
            listElement
        }
    }

    /** @param {CustomEvent} e */
    sortAchievements(e) {
        const sortBy = e.detail.value
        const {
            currentData,
            listElement
        } = this.getCurrentAchievementsData()
        const sortedAchievements = Utils.getSortedDataBy(sortBy, currentData)

        Utils.fadeAnimation(() => {
            sortedAchievements.forEach((achievement, index) => {
                const card = listElement.querySelector(`[data-achievement-card][data-id="${achievement.id}"]`)

                if (card) {
                    card.style.order = index
                }
            })
        }, listElement, 300)
    }

    /** @param {string} searchTerm */
    searchAchievements(searchTerm) {
        const {
            currentData,
            listElement
        } = this.getCurrentAchievementsData()
        const allCards = listElement.querySelectorAll(`[data-achievement-card]`)
        const searchedAchievements = Utils.searchByName(searchTerm, currentData)

        allCards.forEach(card => Utils.hideElement(card)) 

        searchedAchievements.forEach((achievement) => {
            const card = listElement.querySelector(`[data-achievement-card][data-id="${achievement.id}"]`)
            Utils.showElement(card)
        })
    }

    /** 
     * @param {string} filterValue 
     * @param {string | null} prevFilterValue
     */
    filterAchievements(filterValue, prevFilterValue = null) {
        const {
            currentData,
            listElement
        } = this.getCurrentAchievementsData()
        const allCards = listElement.querySelectorAll(`[data-achievement-card]`)
        const prevFilteredData = prevFilterValue ? Utils.getFilteredDataBy(prevFilterValue, currentData) : currentData
        const filteredData = Utils.getFilteredDataBy(filterValue, prevFilteredData)

        Utils.fadeAnimation(() => {
            allCards.forEach(card => {
                card.classList.add('hidden-animation')
                card.setAttribute('aria-hidden', 'true')
            })

            filteredData.forEach((data) => {
                if (!data) return

                const card = listElement.querySelector(`[data-achievement-card][data-id="${data.id}"]`)

                if (!card) return

                card.classList.remove('hidden-animation')
                card.removeAttribute('aria-hidden')
            })
        }, listElement, 300)
    }
}

class AwardsPanel extends Panel {
    static TYPE_ITEMS = "items"
    static TYPE_BADGES = "badges"
    static TAB_BADGES = "odznaki-panel"
    static TAB_ITEMS = "przedmioty-panel"
    static DISPLAY_MODE_TILES = "tiles"
    static DISPLAY_MODE_LIST = "list"
    static LOAD_DATA_LIMIT = 21

    constructor(containerSelector) {
        super(containerSelector)
        this.panelName = Panel.AWARDS
        this.itemsPanel = this.getByAttribute(`data-tab-panel="${AwardsPanel.TYPE_ITEMS}"`)
        this.itemListElement = this.getByAttribute('data-items-list')
        this.badgesPanel = this.getByAttribute(`data-tab-panel="${AwardsPanel.TYPE_BADGES}"`)
        this.badgesListElement = this.getByAttribute('data-badges-list')
        this.sortSelect = new CustomSelect(this.getByAttribute('data-custom-select'))
        this.maxBadgesNumberEl = this.getByAttribute('data-max-badges-number')
        this.currentBadgesNumberEl = this.getByAttribute('data-current-badges-number')
        this.maxItemsNumberEl = this.getByAttribute('data-max-items-number')
        this.currentItemsNumberEl = this.getByAttribute('data-current-items-number')
        this.filterAwardsWrapper = this.getByAttribute('data-filter-awards')

        this.badgesAwardsList = new BadgesAwardsList(this.badgesPanel, this.badgesListElement)
        this.itemsAwardsList = new ItemsAwardsList(this.itemsPanel, this.itemListElement)

        this.itemModalId = Utils.ITEM_DETAILS_MODAL_ID

        this.currentTab = AwardsPanel.TAB_BADGES
        this.userRewardsStats = null

        this.isBadgesInitialized = false
        this.isItemsInitialized = false

        this.init()
    }

    init() {
        if (super.getCurrentHash() === MainNavigation.PAGE_AWARDS) {
            this.displayAwards()
        }

        this.setEventsListeners()

        this.setFilterCheckboxEventListeners([
                ["only-unlocked", "only-no-unlocked"],
                ["only-high-value", "only-low-value"],
                ["only-highlighted", "only-no-highlighted"],
            ],
            this.filterAwardsWrapper, (...args) => this.filterAwards(...args))
    }

    /** @param {CustomEvent} e */
    addNewRewards(e) {
        const {
            itemIds,
            badgeId
        } = e.detail 
        const itemsCards = []

        if (itemIds && itemIds.length > 0) {
            this.itemsAwardsList.clearCache()
        }

        itemIds.forEach(id => {
            const card = this.itemListElement.querySelector(`[data-item][data-id="${id}"]`)

            if (card) itemsCards.push(card)
        })

        itemsCards.forEach(card => {
            card.setAttribute('data-unlocked', 'true')
            card.classList.remove('locked')
            card.classList.add('unlocked')

            Utils.addNewBadgeDecoration(card)
        })

        if (badgeId) {
            const badgeCard = this.badgesListElement.querySelector(`[data-badge][data-id="${badgeId}"]`)
            this.badgesAwardsList.clearCache()

            if (badgeCard) {
                badgeCard.setAttribute('data-unlocked', 'true')
                badgeCard.classList.remove('locked')
                badgeCard.classList.add('unlocked')
                Utils.addNewBadgeDecoration(badgeCard)
            } 
        }
    }

    setEventsListeners() {
        document.addEventListener(MainNavigation.CHANGE_PAGE_EVENT, (e) => this.displayAwards())

        document.addEventListener(CustomTabs.TAB_CHANGE_EVENT, (e) => {
            this.currentTab = e.detail.tab
            this.displayAwards()
        })

        document.addEventListener(AchievementsPanel.UNLOCK_ACHIEVEMENT_EVENT, (e) => this.addNewRewards(e))

        document.addEventListener(CustomSearchForm.SEARCH_EVENT, (e) => {
            const {
                value,
                panel
            } = e.detail

            if (panel === this.panelName) {
                this.searchAwards(value)
            }
        })

        this.sortSelect.onChangeSelect((e) => this.sortAwards(e))

        this.container.addEventListener('click', (e) => {
            const target = e.target

            if (target.hasAttribute('data-change-display-mode')) {
                this.changeDataDisplayMode(e)
            }
        })
    }

    /** @param {Event} e  */
    changeDataDisplayMode(e) {
        const target = e.target
        const prevActiveBtn = target.parentElement.querySelector('[data-change-display-mode].active')

        if (prevActiveBtn === target) return

        const mode = target.getAttribute('data-change-display-mode')
        const isBadgesTab = this.currentTab === AwardsPanel.TAB_BADGES
        const badgePrefix = AwardsPanel.TYPE_BADGES
        const itemPrefix = AwardsPanel.TYPE_ITEMS
        const currentListElement = isBadgesTab ? this.badgesListElement : this.itemListElement

        target.classList.add('active')
        prevActiveBtn.classList.remove('active')

        Utils.fadeAnimation(() => {

            this.badgesListElement.classList.remove(`${badgePrefix}-${AwardsPanel.DISPLAY_MODE_LIST}`, `${badgePrefix}-${AwardsPanel.DISPLAY_MODE_TILES}`)
            this.badgesListElement.classList.add(`${badgePrefix}-${mode}`)
            this.itemListElement.classList.remove(`${itemPrefix}-${AwardsPanel.DISPLAY_MODE_LIST}`, `${itemPrefix}-${AwardsPanel.DISPLAY_MODE_TILES}`)
            this.itemListElement.classList.add(`${itemPrefix}-${mode}`)

        }, currentListElement, 300)


    }

    displayAwards() {
        if (!this.isBadgesInitialized && this.currentTab === AwardsPanel.TAB_BADGES) {
            this.isBadgesInitialized = true
            this.showBadgesAwards()
        }

        if (!this.isItemsInitialized && this.currentTab === AwardsPanel.TAB_ITEMS) {
            this.isItemsInitialized = true
            this.itemsAwardsList.showCards()
        }
    }

    async showBadgesAwards() {
        try {
            this.userRewardsStats = await this.apiService.getUserRewardsStats()

            this.currentBadgesNumberEl.textContent = this.userRewardsStats.badgesUnlockedNumber
            this.maxBadgesNumberEl.textContent = this.userRewardsStats.allBadgesNumber
            this.maxItemsNumberEl.textContent = this.userRewardsStats.allItemsNumber
            this.currentItemsNumberEl.textContent = this.userRewardsStats.itemsUnlockedNumber

            this.badgesAwardsList.showCards()

        } catch (e) {
            this.showError(e)
        }
    }

    /** @return {AchievementRewardBadge[]} */
    getAllBadgesFromState() {
        return this.stateManager.getData(this.stateManager.KEYS.BADGES)
    }

    /** @return {AchievementRewardItem[]} */
    getAllItemsFromState() {
        return this.stateManager.getData(this.stateManager.KEYS.ITEMS)
    }

    getAwardsDataByTab() {
        const isItemsAwards = this.currentTab === AwardsPanel.TAB_ITEMS
        const awards = isItemsAwards ? this.getAllItemsFromState() : this.getAllBadgesFromState()
        const awardsList = isItemsAwards ? this.itemListElement : this.badgesListElement

        return {
            awards,
            awardsList
        }
    }

    /** @param {CustomEvent} e */
    sortAwards(e) {
        const sortBy = e.detail.value
        const {
            awards,
            awardsList
        } = this.getAwardsDataByTab()
        const sortedAwards = Utils.getSortedDataBy(sortBy, awards)

        Utils.fadeAnimation(() => {
            sortedAwards.forEach((award, index) => {
                const awardCard = awardsList.querySelector(`[data-award-card][data-id="${award.id}"]`)

                if (awardCard) {
                    awardCard.style.order = index
                }
            })
        }, awardsList, 300)
    }

    /** @param {string} searchTerm */
    searchAwards(searchTerm) {
        const {
            awards,
            awardsList
        } = this.getAwardsDataByTab()
        const allAwardsCards = awardsList.querySelectorAll(`[data-award-card]`)
        const searchedAwards = Utils.searchByName(searchTerm, awards)

        allAwardsCards.forEach(card => Utils.hideElement(card))
        searchedAwards.forEach((award) => Utils.showElement(awardsList.querySelector(`[data-award-card][data-id="${award.id}"]`)))
    }

    /** 
     * @param {string} filterValue 
     * @param {string | null} prevFilterValue
     */
    filterAwards(filterValue, prevFilterValue = null) {
        const {
            awards,
            awardsList
        } = this.getAwardsDataByTab()
        const allAwardsCards = awardsList.querySelectorAll(`[data-award-card]`)
        const prevFilteredData = prevFilterValue ? Utils.getFilteredDataBy(prevFilterValue, awards) : awards
        const filteredData = Utils.getFilteredDataBy(filterValue, prevFilteredData)

        allAwardsCards.forEach(card => {
            card.classList.add('hidden-animation')
            card.setAttribute('aria-hidden', 'true')
        })

        filteredData.forEach((data) => {
            if (!data) return

            const card = awardsList.querySelector(`[data-award-card][data-id="${data.id}"]`)

            if (!card) return

            card.classList.remove('hidden-animation')
            card.removeAttribute('aria-hidden')
        })
    }
}