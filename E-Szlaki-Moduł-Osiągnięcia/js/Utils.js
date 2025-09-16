// --------------------------------- ABSTRAKCJA (przedstawia żądany schemat danych) ---------------------------------

class UserProfileStatistics {
    /** @type {number} */
    rankingNumber
    /** @type {number} */
    allAchievementsNumber
    /** @type {number} */
    allItemsNumber
    /** @type {number} */
    allBadgesNumber
    /** @type {number} */
    maxAchievementPoints
    /** @type {number} */
    achievementPoints
    /** @type {number} */
    achievementsUnlockedNumber
    /** @type {number} */
    achievementsBlockedNumber
    /** @type {number} */
    achievementsAchivedNumber
    /** @type {number} */
    badgesUnlockedNumber
    /** @type {number} */
    itemsUnlockedNumber
}

class UserProfileData {
    /** @type {AchievementRewardBadge} aktywna odznaka */
    activeBadge
    /** @type {UserProfileStatistics} */
    statistics
    /** @type {AchievementDetails[]} */
    highlightedAchievements
    /** @type {AchievementRewardBadge[]} */
    cabinetBadgesAwards
    /** @type {AchievementRewardItem[]} */
    cabinetItemsAwards
}

class AchievementRequirementCondition {
    static TYPE_LOCATION = "location_visit" // wymaga odwiedzenia miejsca (pójście w góry, nad jezioro, zobaczenie morza itd)
    static TYPE_ACTIVITY = "activity" // wymaga jakiejs aktywności (zrób szlak 30 km w górach)
    static TYPE_SPECIFIC_LOCATION = "specific_location" // wymaga odwiedzenia szczegółowego miejsca (np. Zamek w Malborku)

    /** @type {string} typ warunku np: "location_visit" */
    type;
    /** @type {number | string} Cel (np. liczba miejsc do odwiedzenia: 1) lub nazwa miejsca */
    target;
    /** @type {number | boolean} Aktualny stan (np. 0, false, true) */
    current;
    /** @type {string} opis (np. "Odwiedź co najmniej jedno miejsce w Polsce.") */
    desc;
    /** @type {boolean} Czy warunek jest obowiązkowy do spełnienia */
    isMandatory;

    constructor(conditionProps) {
        this.conditionProps = conditionProps
    }
}

class AchievementRequirement {
    static LOGIC_AND = "AND"
    static LOGIC_OR = "OR"

    /** @type {AchievementRequirementCondition[]} warunki */
    conditions;
    /** @type {number} Liczba wymaganych warunków do spełnienia */
    requiredConditionsNumber
    /** @type {string} Logika warunków: 'AND' (wszystkie) lub 'OR' (jeden wystarczy) */
    overallLogic;

    constructor(requirementProps) {
        this.requirementProps = requirementProps
    }
}

class AchievementReward {
    static BADGE = "badge"
    static ITEM = "item"

    /** @type {number} id */
    id
    /** @type {string} nazwa */
    name
    /** @type {string} ścieżka url ikony */
    icon
    /** @type {string} opis */
    desc;
    /** @type {number} wartość */
    value
    /** @type {boolean} czy jest wyróżnione */
    isHighlighted
    /** @type {boolean} czy odblokowano */
    isUnlocked
    /** @type {string | null} kiedy odblokowano */
    unlockedDate

    constructor(id, props) {
        this.id = id
        this.props = props
    }
}

class AchievementRewardBadge extends AchievementReward {

    /** @type {string} kolor nazwy odznaki */
    nameColor

    constructor(id, props) {
        super(id, props)
    }
}

class AchievementRewardBadgeDetails extends AchievementRewardBadge {
    /** @type {Achievement[]} powiązane osiągnięcia */
    relatedAchievements

    constructor(id, props) {
        super(id, props)
    }
}

class AchievementRewardItemStatistic {

    /** @type {string} */
    name
    /** @type {string} */
    icon
    /** @type {string} */
    color
    /** @type {number} */
    value
    /** @type {number} */
    maxValue
}

class AchievementRewardItem extends AchievementReward {

    /** @type {AchievementRewardItemStatistic[]} */
    statistics

    constructor(id, props) {
        super(id, props)
    }
}

class AchievementRewardsList {
    /** @type {number} Liczba punktów */
    points;
    /** @type {number} doświadczenie */
    exp;
    /** @type {number[]} lista przedmiotów (wirtualne trofea) w formie id */
    items;
    /** @type {number | null} id odznaki */
    badgeId;

    constructor(rewardProps) {
        this.rewardProps = rewardProps
    }
}

class AchievementStatus {
    static NOT_ACHIEVED = "not-achieved" // dostępny ale jeszcze nie osiągnięty
    static ACHIVED = "achieved" // zdobyty | osiągnięty
    static ACHIVED_NOT_REWARDED = "achieved-no-rewarded" // zdobyty ale nie zebrany
    static NOT_AVAILABLE = "not-available" // zablokowany
}

class Achievement {
    /** @type {number} id - osiągnięcia */
    id
    /** @type {string} nazwa - osiągnięcia  */
    name;
    /** @type {string} type - typ osiągnięcia */
    type;
    /** @type {number} type - id kategorii osiągnięcia */
    categoryId;
    /** @type {number} id osiągnięcia (rodzica) */
    parentId;
    /** @type {AchievementRequirement[]} wymagania do spełnienia */
    requirements;
    /** @type {AchievementRewardsList} nagrody za osiągnicie */
    rewards;
    /** @type {string} status - status osiągnięcia (AchievementStatus) */
    status;
    /** @type {string} desc - Opis */
    desc;
    /** @type {number} stopień trudności 0 - 10 */
    difficulty;
    /** @type {boolean} Czy osiągnięcie posiada w nagrodzie ukryte przedmioty */
    isRewardItemsSecret;
    /** @type {boolean} Czy osiągnięcie jest wyróżnione */
    isHighlighted
    /** @type {boolean} Czy gracz odblokował osiągnięcie */
    isUnlocked;
    /** @type {string | null} ikona (ścieżka url)  */
    icon
    /** @type {string | null} Data odblokowania (jeśli odblokowane) (ISO string)  */
    unlockDate;
    /** @type {string} createdAt - Data utworzenia (ISO string)  */
    createdAt
    /** @type {string} updatedAt - Data modyfikacji (ISO string). */
    updatedAt;

    constructor(achievementProps) {
        this.achievementProps = achievementProps
        this.id = achievementProps.id;
        this.createdAt = (new Date()).toISOString();
    }
}

class AchievementCategory {
    /** @type {number} id - kategorii */
    id
    /** @type {string} nazwa - kategorii  */
    name;
    /** @type {string} desc - Opis */
    desc;
    /** @type {string | null} ikona (ścieżka url)  */
    icon
    /** @type {string} kolor ikony rgb lub hex */
    color
    /** @type {string} createdAt - Data utworzenia (ISO string)  */
    createdAt
    /** @type {string} updatedAt - Data modyfikacji (ISO string). */
    updatedAt;

    constructor(categoryProps) {
        this.categoryProps = categoryProps
        this.id = categoryProps.id;
        this.createdAt = (new Date()).toISOString();
    }
}

class AchievementDetails extends Achievement {

    /** @type {AchievementCategory} kategoria */
    category;
    /** @type {Achievement} osiągnięcie (rodzica) */
    parent;
    /** @type {AchievementRewardItem[]} lista przedmiotów (wirtualne trofea) w formie id */
    items;
    /** @type {AchievementRewardBadge | null} id odznaki */
    badge;
    /** @type {number[]} tablica z id dzieci */
    childrenIds

    constructor(achievementProps) {
        super(achievementProps)
    }
}

// --------------------------------- KLASA POMOCNICZA ---------------------------------

class Utils {
    static ACHIEVEMENTS_MODULE_ID = "user-achievements-module"
    static ACHIEVEMENTS_DETAILS_MODAL_ID = "user-achievements-module-achievement-details-modal"
    static BADGE_DETAILS_MODAL_ID = "user-achievements-module-badge-details-modal"
    static ITEM_DETAILS_MODAL_ID = "user-achievements-module-item-details-modal"
    static REWARD_DETAILS_MODAL_ID = "user-achievements-module-reward-modal"
    static NOTIFICATIONS_ACHIEVEMENTS_MODAL_ID = "user-achievements-module-achievement-notifications"
    static moduleContainer

    static cache = {
        modals: new Map(),
        rootFontSize: null
    }

    /** @param {string} word */
    static capitalize(word) {
        if (!word) return word;
        const trimmed = word.trim();
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }

    /** @param {number} rem */
    static remToPx(rem) {
        let {
            rootFontSize
        } = Utils.cache

        if (!rootFontSize) {
            const {
                fontSize
            } = window.getComputedStyle(document.documentElement)
            rootFontSize = parseFloat(fontSize);
            Utils.cache.rootFontSize = rootFontSize
        }

        return Math.round(rem * rootFontSize);
    }

    /**
     * Sprawdza, czy szerokość okna jest większa niż podana wartość w REM
     * @param {number} rem - Wartość w jednostkach REM
     * @param {Function} callback - Funkcja wywoływana, gdy szerokość okna jest mniejsza niż podana wartość 
     * @returns {any | null} Zwraca callback jeśli został wywołany, null w przeciwnym razie
     */
    static checkWindowWiderThanRem(rem, callback) {
        const pixels = Utils.remToPx(rem);

        if (window.innerWidth >= pixels) {
            return callback();
        }
        return null;
    }

    /** @param {string | null} dateStr */
    static getFullDate(dateStr) {
        if (!dateStr || dateStr === '') return ''

        const getPad = (number) => number.toString().padStart(2, "0")

        const date = new Date(dateStr)
        const day = getPad(date.getDate())
        const month = getPad(date.getMonth() + 1)
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    /** @param {string | null} dateStr */
    static getFullDateAndHoursAndMinutes(dateStr) {
        if (!dateStr || dateStr === '') return ''

        const getPad = (number) => number.toString().padStart(2, "0")

        const date = new Date(dateStr)
        const hours = getPad(date.getHours())
        const minutes = getPad(date.getMinutes())
        return `${Utils.getFullDate(dateStr)} | ${hours}:${minutes}`
    }

    /** 
     * @param {Achievement[]} data  
     * @param {string} status
     */
    static getAchievementsByStatus(data, status) {
        return data.filter((achievement) => achievement.status === status)
    }

    /** @param {Achievement[]} data  */
    static getAchievementPoints(data) {
        return data.reduce((value, achievement) => value + (achievement.rewards.points ?? 0), 0)
    }

    /** @param {string} statusName */
    static getFriendyStatusName(statusName) {
        let friendlyStatusName

        switch (statusName) {
            case AchievementStatus.ACHIVED:
                friendlyStatusName = "Osiągnięte";
                break;
            case AchievementStatus.ACHIVED_NOT_REWARDED:
                friendlyStatusName = "Do Zebrania";
                break;
            case AchievementStatus.NOT_ACHIEVED:
                friendlyStatusName = "Nie Osiągnięte";
                break;
            default:
                friendlyStatusName = "Zablokowane";
                break;
        }

        return friendlyStatusName
    }

    /**
     * Zamienia string o formacie snake_case na format "Title Case".
     * Na przykład: "zamek_malbork" → "Zamek Malbork" 
     * @param {string} input - String w formacie snake_case.
     * @returns {string} - Sformatowany string w Title Case.
     */
    static snakeCaseToTitleCase(input) {
        return input
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    /** @param {string} type */
    static getConditionTypeName(typeName) {
        let conditionTypeName

        switch (typeName) {
            case "specific_location": conditionTypeName = "Określona lokalizacja"; break; 
            case "location_visit": conditionTypeName = "Odkrywanie miejsc"; break; 
            case "activity": conditionTypeName = "Aktywność"; break; 
            default: conditionTypeName = "Inny"; break;
        }

        return conditionTypeName
    }

    /** @param {Achievement[]} data  */
    static sortAchievementsByStatus(data, by = "asc") {
        const sortOrder = {
            [AchievementStatus.ACHIVED]: 0,
            [AchievementStatus.NOT_ACHIEVED]: 1,
            [AchievementStatus.ACHIVED_NOT_REWARDED]: 2,
            [AchievementStatus.NOT_AVAILABLE]: 3,
        };

        return data.sort((a, b) => {
            if (by === "asc") {
                return sortOrder[a.status] - sortOrder[b.status];
            } else {
                return sortOrder[b.status] - sortOrder[a.status];
            }
        });
    }

    /** @param {AchievementRewardBadge[] | AchievementRewardItem[]} data  */
    static sortByIsUnlocked(data, by = "asc") {
        return data.sort((a, b) => {
            if (a.isUnlocked === b.isUnlocked) return 0;

            if (by === "asc") {
                return a.isUnlocked ? -1 : 1;
            } else {
                return a.isUnlocked ? 1 : -1;
            }
        });
    }

    /** 
     * @param {any[]} data 
     * @param {string} prop
     */
    static getDataNumberByProp(data, prop) {
        return data.reduce((value, x) => (x[prop] ? value + 1 : value), 0)
    }

    /**  @returns {HTMLElement} */
    static getModuleContainer() {
        if (!Utils.moduleContainer) {
            Utils.moduleContainer = document.querySelector(`#${Utils.ACHIEVEMENTS_MODULE_ID}`)
        }
        return Utils.moduleContainer
    }

    /** 
     * @param {string} prefix
     * @returns {string} Unikalny identyfikator. 
     */
    static generateId(prefix = "") {
        return prefix + Math.random().toString(36);
    }

    /** @param {HTMLElement | string} element */
    static showLoading(element) {
        Utils.manipulateDOMElement(element, element => element.classList.add("loading"));
    }

    /** @param {HTMLElement | string} element */
    static hideLoading(element) {
        Utils.manipulateDOMElement(element, (element) => element.classList.remove("loading"));
    }

    /**  @param {string} modalId */
    static showModalLoading(modalId) {
        Utils.dispatchCustomEvent(CustomModal.START_LOADING_EVENT_NAME, {
            modalId: modalId,
        });
    }

    /**  @param {string} modalId */
    static hideModalLoading(modalId) {
        Utils.dispatchCustomEvent(CustomModal.STOP_LOADING_EVENT_NAME, {
            modalId: modalId
        });
    }

    /**  @param {string} modalId */
    static getModal(modalId) {
        const modalsCache = Utils.cache.modals
        let modal

        if (modalsCache.has(modalId)) {
            modal = modalsCache.get(modalId)
        } else {
            modal = document.querySelector(`#${modalId}`);
            if (modal) modalsCache.set(modalId, modal)
        }

        return modal
    }

    /**  @param {string} modalId */
    static hideModal(modalId) {
        Utils.dispatchCustomEvent(CustomModal.HIDE_EVENT_NAME, {
            modalId: modalId,
        });
    }

    /** 
     * @param {string} type 
     * @param {string} message 
     * @param {HTMLElement} container 
     */
    static showAlert(type, message, container) {
        const alert = document.createElement('custom-alert')

        alert.setAttribute('data-type', type)
        alert.setAttribute('data-message', message)

        container.prepend(alert)
    }

    /**
     * @param {string} modalId
     * @param {string | null} title
     */
    static showModal(modalId, title = null) {
        const modal = Utils.getModal(modalId);
        const modalTitleAttr = modal?.querySelector(`[${CustomModal.ATTR_TITLE}]`);

        if (modalTitleAttr && title) {
            modalTitleAttr.textContent = title;
        }

        Utils.dispatchCustomEvent(CustomModal.SHOW_EVENT_NAME, {
            modalId
        });
    }

    /**
     * @param {string} eventName
     * @param {object} eventData
     */
    static dispatchCustomEvent(eventName, eventData = {}) {
        document.dispatchEvent(
            new CustomEvent(eventName, {
                detail: eventData,
            })
        );
    }

    static getPercentOfData = (a, b) => Math.round((a * 100) / b);

    /** @param {HTMLElement} container */
    static waitForImages(container) {
        const images = container.querySelectorAll('img');

        if (images.length === 0) {
            return Promise.resolve()
        }

        const promises = Array.from(images).map(img => {
            if (img.complete) {
                return new Promise(resolve => requestAnimationFrame(resolve));
            }
            return new Promise(resolve => {
                img.addEventListener('load', () => requestAnimationFrame(resolve));
                img.addEventListener('error', () => requestAnimationFrame(resolve));
            });
        });
        return Promise.all(promises);
    }

    /**
     * @param {HTMLElement | string} element
     * @param {(element: HTMLElement) => void} callback
     */
    static manipulateDOMElement(element, callback) {
        if (typeof element === "string") {
            let selector = element;
            element = document.querySelector(selector);
        }

        if (element && element instanceof HTMLElement) {
            callback(element);
        } else {
            console.error("element don't exist !")
        }
    }
    /** 
     * @param {number} ms 
     * @param {() => {}} callback
     */
    static async wait(ms, callback = () => {}) {
        return new Promise(resolve => setTimeout(() => {
            callback()
            resolve()
        }, ms));
    }

    /** @param {number} value  */
    static getRewardValueInfo(value) {
        let title, color, desc

        switch (value) {
            case 1:
            case 2:
            case 3:
            case 4:
                title = "Pospolity"
                color = "rgb(128, 128, 128)"
                desc = "Jakościowy przedmiot, powszechny ale nie tak łatwy do zdobycia"
                break;
            case 5:
            case 6:
                title = "Rzadki"
                color = "rgb(0, 128, 128)"
                desc = "Trudniejszy do zdobycia, posiada delikatny blask tajemnicy"
                break;
            case 7:
                title = "Niezwykły"
                color = "rgb(30, 144, 255)"
                desc = "Dotąd nieznany, wyróżniający się spośród innych dzięki unikalnym właściwościom"
                break;
            case 8:
                title = "Epicki"
                color = "rgb(138, 43, 226)"
                desc = "Naprawdę niezwykły przedmiot obdarowany magią, niosący w sobie cząstkę starożytnych legend"
                break;
            case 9:
                title = "Mityczny"
                color = "rgb(220, 20, 60)"
                desc = "Emanujący niezywkłą mistyczną mocą, jakby żywcem wyjęty z baśni o zapomnianych stworach i herosach"
                break;
            case 10:
                title = "Legendarny"
                color = "rgb(255, 140, 0)"  
                desc = "Prawie nierealny w swej sile, o tym przedmiocie mówi się w opowieściach – symbol doskonałości i potęgi"
                break;
        }

        return {
            title,
            color,
            desc
        }
    }


    /**
     * @param {() => void} callback
     * @param {HTMLElement | NodeListOf<HTMLElement>} elementsToAnimate
     * @param {number} durationInMiliseconds
     */
    static async fadeAnimation(callback, elementsToAnimate, durationInMiliseconds) {
        const isHTMLElement = elementsToAnimate instanceof HTMLElement
        const elements = isHTMLElement ? [elementsToAnimate] : [...elementsToAnimate].filter(el => el != null);

        elements.forEach(el => {
            el.style.transition = `all ${durationInMiliseconds / 1000.0}s ease`
            el.style.opacity = "0"
        })

        return Utils.wait(durationInMiliseconds, () => {
            callback()
            elements.forEach(el => el.style.opacity = "1")
        })
    }

    /** 
     * @param {HTMLElement | NodeListOf<HTMLElement>} elementsToAnimate
     * @param {number} durationInMiliseconds
     */
    static shakeAnimation(elementsToAnimate, durationInMiliseconds) {
        const elements = elementsToAnimate instanceof HTMLElement ? [elementsToAnimate] : [...elementsToAnimate].filter(el => el != null);

        elements.forEach(el => el.classList.add('shake-animation'))

        Utils.wait(durationInMiliseconds, () => {
            elements.forEach(el => el.classList.remove('shake-animation'))
        })
    }

    /** @param {HTMLElement | null} element */
    static hideElement(element) {
        if (!element) return

        element.style.visibility = "hidden"
        element.classList.add('sr-only')
        element.setAttribute('aria-hidden', 'true')
    }

    /** @param {HTMLElement | null} element */
    static showElement(element) {
        if (!element) return

        element.style.removeProperty('visibility')
        element.classList.remove('sr-only')
        element.removeAttribute('aria-hidden')
    }

    /**
     * Mechanizm throttle do zabezpieczenia animacji
     * @returns {(...args: any[]) => void}
     * @param {Function} callback
     * @param {number} delay
     */
    static throttle(callback, delay) {
        let shouldWait = false;

        return (...args) => {
            if (shouldWait) return;

            callback(...args);
            shouldWait = true;

            setTimeout(() => {
                shouldWait = false;
            }, delay);
        };
    }; 

    /**
     * Mechanizm debounce do zabezpieczenia animacji
     * @returns {(...args: any[]) => void}
     * @param {Function} func
     * @param {number} wait
     */
    static debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    /** 
     * @param {string} searchTerm 
     * @param {object[]} data
     * @returns {object[]} 
     */
    static searchByName(searchTerm, data) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return data.filter(obj =>
            obj.name.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }

    /** 
     * @param {string} value 
     * @param {Array<object>} data
     */
    static getFilteredDataBy(value, data) {
        let filteredData  

        switch (value) {
            case "only-hard":
                filteredData = data.filter(a => a.difficulty >= 5);
                break;
            case "only-easy":
                filteredData = data.filter(a => a.difficulty < 5);
                break;
            case "only-unlocked":
                filteredData = data.filter(a => a.isUnlocked);
                break;
            case "only-no-unlocked":
                filteredData = data.filter(a => !a.isUnlocked);
                break;
            case "only-high-value":
                filteredData = data.filter(a => a.value >= 6);
                break;
            case "only-low-value":
                filteredData = data.filter(a => a.value < 6);
                break;
            case "only-highlighted":
                filteredData = data.filter(a => a.isHighlighted);
                break;
            case "only-no-highlighted":
                filteredData = data.filter(a => !a.isHighlighted);
                break;
            default:
                filteredData = data
        }

        return filteredData
    }

    /** 
     * @param {string} value 
     * @param {Array<AchievementRewardItem>} data
     */
    static getSortedDataBy(value, data) {
        let sortedData  

        switch (value) {
            case "achieved-true":
                sortedData = Utils.sortAchievementsByStatus(data, 'asc');
                break;
            case "achieved-false":
                sortedData = Utils.sortAchievementsByStatus(data, 'desc');
                break;
            case "difficulty-asc":
                sortedData = data.sort((a, b) => a.difficulty - b.difficulty);
                break;
            case "difficulty-desc":
                sortedData = data.sort((a, b) => b.difficulty - a.difficulty);
                break;
            case "value-asc":
                sortedData = data.sort((a, b) => a.value - b.value);
                break;
            case "value-desc":
                sortedData = data.sort((a, b) => b.value - a.value);
                break;
            case "name-asc":
                sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "unlocked-date-asc":
                sortedData = data.sort((a, b) => Utils.compareUnlockedDates(a, b, 'asc'));
                break;
            case "unlocked-date-desc":
                sortedData = data.sort((a, b) => Utils.compareUnlockedDates(a, b, 'desc'));
                break;
            case "unlocked-false":
                sortedData = Utils.sortByIsUnlocked(data, "desc");
                break;
            default:
                sortedData = Utils.sortByIsUnlocked(data, "asc")
        }

        return sortedData
    }

    /**
     * Porównuje daty odblokowania achievementów, obsługując przypadki null
     * @param {AchievementRewardItem} a 
     * @param {AchievementRewardItem} b 
     * @param {'asc' | 'desc'} direction 
     * @returns {number}
     */
    static compareUnlockedDates(a, b, direction) {
        const NULL_POSITION = 1;
 
        if (!a.unlockedDate && !b.unlockedDate) return 0; 
        if (!a.unlockedDate) return NULL_POSITION;
        if (!b.unlockedDate) return -NULL_POSITION;
 
        const comparison = new Date(a.unlockedDate) - new Date(b.unlockedDate);
        return direction === 'asc' ? comparison : -comparison;
    }

    /**
     * Konwertuje kolor do tablicy RGB [r, g, b]
     * @param {string} color 
     * @returns {number[] | null}
     */
    static getRGBValues(color) {
        if (color.startsWith('#')) {
            if (color.length === 4) {
                color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
            }
            return [
                parseInt(color.substr(1, 2), 16),
                parseInt(color.substr(3, 2), 16),
                parseInt(color.substr(5, 2), 16)
            ];
        } else if (color.startsWith('rgb')) {
            const rgb = color.match(/\d+/g);
            if (!rgb) return null;
            return rgb.map(val => parseInt(val, 10));
        }
        return null;
    }

    /**
     * Konwertuje wartości RGB do formatu hex
     * @param {number[]} rgb 
     * @returns {string}
     */
    static rgbToHex = (rgb) => '#' + rgb.map(x => x.toString(16).padStart(2, '0')).join('');

    /**
     * Konwertuje wartości RGB do formatu rgb/rgba
     * @param {number[]} rgb 
     * @param {number} [opacity] 
     * @returns {string}
     */
    static rgbToString(rgb, opacity = null) {
        return opacity !== null ?
            `rgba(${rgb.join(', ')}, ${opacity})` :
            `rgb(${rgb.join(', ')})`;
    }

    /**
     * Sprawdza, czy różnica między datą z formatu ISO a bieżącą datą jest mniejsza niż jeden dzień. 
     * Funkcja konwertuje podany string w formacie ISO na obiekt Date, oblicza różnicę
     * między tą datą a bieżącą datą oraz zwraca true, jeśli różnica jest mniejsza niż jeden dzień. 
     * @param {string} isoString - Data w formacie ISO.
     * @returns {boolean} True, jeśli różnica między datą a bieżącą datą jest mniejsza niż jeden dzień, w przeciwnym razie false.
     */
    static isDateWithinOneDay(isoString) {
        if (!isoString || isoString.trim() === '') return false

        const givenDate = new Date(isoString);
        const now = new Date();
        const millisecondsInOneDay = 24 * 60 * 60 * 1000;
        
        const differenceMs = Math.abs(now - givenDate);
        return differenceMs < millisecondsInOneDay;
    }
    

    /**
     * Dodaje do elementu oznaczenie "NOWE"
     * @param {HTMLElement} element 
     */
    static addNewBadgeDecoration(element) {
        const newBadge = document.createElement('span')

        newBadge.className = "new-badge"
        newBadge.textContent = "Nowe"

        element.append(newBadge)
    }


    /** @param {string} color */
    static invertColor(color) {
        const rgb = Utils.getRGBValues(color);
        if (!rgb) return color;

        const inverted = rgb.map(val => 255 - val); 

        return color.startsWith('#') ?
            Utils.rgbToHex(inverted) :
            Utils.rgbToString(inverted);
    }

    /** 
     * @param {string} color 
     * @param {number} opacity - wartość od 0 do 1
     * @returns {string}
     */
    static setColorOpacity(color, opacity) {
        opacity = Math.max(0, Math.min(1, opacity));

        if (color.startsWith('rgba')) {
            return color.replace(/[\d.]+\)$/g, `${opacity})`);
        }

        const rgb = Utils.getRGBValues(color);
        if (!rgb) return color;

        return Utils.rgbToString(rgb, opacity);
    }
} 