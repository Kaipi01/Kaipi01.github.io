// --------------------------------- MODUŁY POMOCNICZE ---------------------------------


class HighlightButton extends HTMLElement {
  static CHANGE_HIGHLIGHT_EVENT = "custom-highlight-btn-change"

  static get observedAttributes() {
    return ["data-is-highlighted", "data-type", "data-type-id"];
  }

  constructor() {
    super();
    this.initialized = false
  }

  render() {
    this.innerHTML = `
      <button data-set-highlighted-btn role="button" class="highlight-btn link small">
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <span class="sr-only"></span>
      </button>
    `;
  }

  connectedCallback() {
    this.render()

    if (!this.hasAttribute("data-is-highlighted")) {
      this.setAttribute("data-is-highlighted", "false");
    }

    this._button = this.querySelector("button[data-set-highlighted-btn]");
    this._solidIcon = this.querySelector("i.fa-solid");
    this._regularIcon = this.querySelector("i.fa-regular");
    this._label = this.querySelector("span.sr-only");
    this._onClick = this._onClick.bind(this);
    this._button.addEventListener("click", this._onClick);

    this._updateRendering();

    this.initialized = true
  }

  disconnectedCallback() {
    this._button.removeEventListener("click", this._onClick);
  }

  attributeChangedCallback(name, oldValue, newValue) {

    if (oldValue !== newValue && this.initialized) {
      this._updateRendering();
    }
  }

  _onClick() {
    const current = this.getAttribute("data-is-highlighted");
    const newVal = (current === "true") ? "false" : "true";
    this.setAttribute("data-is-highlighted", newVal);

    Utils.dispatchCustomEvent(HighlightButton.CHANGE_HIGHLIGHT_EVENT, {
      isHighlighted: this.getAttribute("data-is-highlighted") === "true",
      type: this.getAttribute("data-type"),
      typeId: parseInt(this.getAttribute("data-type-id")),
    })
  }

  _updateRendering() {
    const isHighlighted = this.getAttribute("data-is-highlighted") === "true";

    if (isHighlighted) {
      this._regularIcon.setAttribute("hidden", '');
      this._solidIcon.removeAttribute("hidden");
      this._label.textContent = "Usuń wyróżnienie z profilu";
    } else {
      this._solidIcon.setAttribute("hidden", '');
      this._regularIcon.removeAttribute("hidden");
      this._label.textContent = "Wyróżnij w profilu";
    }
  }
}

customElements.define("highlight-button", HighlightButton);


class ThemeSwitcher extends HTMLElement {
  static NAME = "theme-switcher"
  static THEME_ITEM_NAME = "theme-mode"
  static THEME_DARK = "theme-dark"
  static THEME_LIGHT = "theme-light"

  constructor() {
    super()
    this.labelEl = document.createElement('label')
    this.checkboxEl = document.createElement('input')
    this.dataId = null
  }

  setThemeMode(themeMode) {
    const body = document.body;
    const isThemeDark = themeMode === ThemeSwitcher.THEME_DARK
    const themeToRemove = isThemeDark ? ThemeSwitcher.THEME_LIGHT : ThemeSwitcher.THEME_DARK
    body.classList.add(themeMode);
    body.classList.remove(themeToRemove);
    this.checkboxEl.setAttribute('data-theme-mode', themeMode)
    this.checkboxEl.checked = isThemeDark

    localStorage.setItem(ThemeSwitcher.THEME_ITEM_NAME, themeMode)
  }

  init() {
    const mediaQueryPrefersColorDark = window.matchMedia('(prefers-color-scheme: dark)')
    const themeMode = localStorage.getItem(ThemeSwitcher.THEME_ITEM_NAME)
    const darkMode = mediaQueryPrefersColorDark.matches

    if (themeMode) {
      this.setThemeMode(themeMode)
    } else {
      this.setThemeMode(darkMode ? ThemeSwitcher.THEME_DARK : ThemeSwitcher.THEME_LIGHT)
    }

    this.checkboxEl.addEventListener("change", e => {
      this.setThemeMode(
        this.checkboxEl.getAttribute('data-theme-mode') === ThemeSwitcher.THEME_DARK ? ThemeSwitcher.THEME_LIGHT : ThemeSwitcher.THEME_DARK
      )
    });
  }

  connectedCallback() {
    this.dataId = this.getAttribute('data-id')
    this.render()
    this.init()
  }

  render() {
    const decorationContent = document.createElement('div')
    decorationContent.className = "slider"
    decorationContent.innerHTML = `
          <div class="sun"></div>
          <div class="moon"></div>
          <div class="cloud cloud1"></div>
          <div class="cloud cloud2"></div>
          <div class="star star1"></div>
          <div class="star star2"></div>
          <div class="star star3"></div>
          <div class="star star4"></div>
          <div class="star star5"></div>
    `
    this.labelEl.className = ThemeSwitcher.NAME
    this.checkboxEl.id = this.dataId
    this.checkboxEl.type = "checkbox"
    this.labelEl.append(this.checkboxEl)
    this.labelEl.append(decorationContent)
    this.append(this.labelEl)
  }
}

customElements.define(ThemeSwitcher.NAME, ThemeSwitcher)

class CustomSearchForm extends HTMLElement {
  static SEARCH_EVENT = "custom-search-form-search-event"

  constructor() {
    super();
    this.dataId = null
    this.forPanel = null
    this.form = document.createElement('form')
    this.button = document.createElement('button')
    this.input = document.createElement('input')
  }

  connectedCallback() {
    this.dataId = this.getAttribute("data-id") ?? Utils.generateId('input-search-');
    this.forPanel = this.getAttribute("data-for-panel")
    this.render();
    this.init()
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      Utils.dispatchCustomEvent(CustomSearchForm.SEARCH_EVENT, {
        value: this.input.value,
        panel: this.forPanel
      })
    })

    this.input.addEventListener('search', (e) => {
      Utils.dispatchCustomEvent(CustomSearchForm.SEARCH_EVENT, {
        value: this.input.value,
        panel: this.forPanel
      })
    })
  }

  render() {
    const inputBox = document.createElement('div')
    const inputLabel = document.createElement('label')

    inputLabel.className = "floating-label"
    inputLabel.setAttribute('for', this.dataId)
    inputLabel.textContent = "Szukaj"
    inputBox.className = "upt-search-box"

    this.form.className = "upt-search-form"

    this.button.className = "upt-search-btn link variant2"
    this.button.type = "submit"
    this.button.innerHTML = `
      <i class="upt-icon fa-solid fa-magnifying-glass"></i>
      <span class="sr-only">Szukaj</span>
    `
    this.input.id = this.dataId
    this.input.type = "search"
    this.input.name = "input-search"
    this.input.placeholder = "Szukaj"
    this.input.className = "floating-label-control upt-form-control"

    inputBox.append(this.input)
    inputBox.append(inputLabel)
    this.form.append(this.button)
    this.form.append(inputBox)
    this.append(this.form)
  }
}

customElements.define("custom-search-form", CustomSearchForm);

class Card3D {
  /** 
   * @param {string} selector 
   * @param {HTMLElement | null} context
   */
  constructor(selector, context = null) {
    /** @type {HTMLElement} */
    this.card = (context ?? document).querySelector(selector);

    if (!this.card) {
      console.error(`Element o selektorze: "${selector}" nie został znaleziony.`);
      return;
    }
    this.boundHandleMouseMove = null
    this.init()
  }

  init() {
    this.boundHandleMouseMove = this.handleMouseMove.bind(this);
    this.card.addEventListener('mousemove', this.boundHandleMouseMove);
  }

  destroy() {
    if (this.card && this.boundHandleMouseMove) {
      this.card.removeEventListener('mousemove', this.boundHandleMouseMove);
      this.boundHandleMouseMove = null
    }
  }

  handleMouseMove(event) {
    // Obrót karty
    let rotateY = -((window.innerWidth / 2 - event.pageX) / 30);
    let rotateX = (window.innerHeight / 2 - event.pageY) / 10;

    // Ustalanie ograniczeń
    if (rotateY > 30) rotateY = 30;
    if (rotateY < -30) rotateY = -30;
    if (rotateX > 20) rotateX = 20;
    if (rotateX < -20) rotateX = -20;

    const transformStyle = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    this.card.style.transform = transformStyle;

    // Efekt połysku
    const rect = this.card.getBoundingClientRect();
    const shine = this.card.querySelector('[data-shine]');
    if (!shine) return; // jeżeli brak elementu .shine, pomijamy

    // Scroll wartości dla poprawnego obliczenia pozycji kursora
    const bdScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const bdScrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

    // Pozycja kursora względem karty
    const relX = event.pageX - rect.left - bdScrollLeft;
    const relY = event.pageY - rect.top - bdScrollTop;

    // Normalizowane przesunięcia
    const offsetX = 0.52 - (relX / rect.width);
    const offsetY = 0.52 - (relY / rect.height);

    // Kąt między środkiem karty a pozycją kursora
    const dx = relX - rect.width / 2;
    const dy = relY - rect.height / 2;
    const rad = Math.atan2(dy, dx);
    let angle = rad * 180 / Math.PI - 90;
    if (angle < 0) angle += 360;

    // Ustalanie intensywności połysku w zależności od pozycji pionowej
    const opacityFactor = (relY / rect.height) * 0.5;
    // Ustawienie tła – gradient zmenia kąt oraz przezroczystość
    shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${opacityFactor}) 0%, rgba(255,255,255,0) 80%)`;

    // Przesunięcie połysku – tłumaczenie zależne od pozycji kursora
    const shineTranslateX = offsetX * 50;
    const shineTranslateY = offsetY * 50;
    shine.style.transform = `translate(${shineTranslateX}px, ${shineTranslateY}px)`;
  }
}

class CustomPieChart {
  static ID = "user-achievements-module-custom-pie-chart"

  /** @param {string}pieChartContainerSelector */
  constructor(pieChartContainerSelector) {
    this.pieChartContainerSelector = pieChartContainerSelector;
    this.container = document.querySelector(this.pieChartContainerSelector);

    if (!this.container) {
      console.warn(`${pieChartContainerSelector} element not found!`);
    } else {
      this.pieChart = this.container.querySelector("[data-pie-chart-appearance]");
      this.pieData = JSON.parse(this.pieChart.getAttribute("data-pie"));
      this.pieChartTitle = this.container.getAttribute("data-title")
      this.legendFigcaption = null
      this.init();
    }
  }

  getAppearance() {
    return this.pieChart
  }

  reRender(callback = () => {}) {
    callback()
    const stylesPieChart = document.head.querySelector(`style#${CustomPieChart.ID}`)
    stylesPieChart?.remove()
    this.legendFigcaption?.remove()
    this.pieData = JSON.parse(this.pieChart.getAttribute("data-pie"));
    this.renderStylesForPieChart()
    this.generateLegendForPieChart();
    this.pieChart.style.animation = 'none';
    this.pieChart.offsetHeight
    this.pieChart.style.removeProperty('animation')
  }

  init() {
    this.renderStylesForPieChart()
    this.generateLegendForPieChart();
  }

  renderStylesForPieChart() {

    const stylesPieChart = document.createElement("style");

    stylesPieChart.id = CustomPieChart.ID
    stylesPieChart.textContent = this.generateCSSForPieChart();

    document.head.append(stylesPieChart);
  }

  generateLegendForPieChart() {
    this.legendFigcaption = document.createElement("figcaption");
    this.legendFigcaption.className = "legends";

    this.pieData.data.forEach((data) => {
      const {
        percent,
        label
      } = data;
      const item = document.createElement("span");
      item.className = "legend-item";
      item.textContent = `${label} ${percent}%`;
      this.legendFigcaption.append(item);
    });

    if (this.pieChartTitle) {
      const titleSpan = document.createElement('span')
      titleSpan.textContent = this.pieChartTitle
      titleSpan.className = "legend-title"
      this.legendFigcaption.append(titleSpan)
    }

    this.container.append(this.legendFigcaption);
  }

  generateCSSForPieChart() {
    const pieChartData = this.pieData.data;
    const {
      animate,
      animationSpeed
    } = this.pieData;
    const showAnimation = animate && "registerProperty" in CSS;
    const sumOfPercents = this.pieData.data.reduce((value, obj) => obj.percent + value, 0)

    let pieCharLegendItems = "";
    let pieCharColors = "";
    let pieCharCSSOpacityProperties = "";
    let pieCharAnimationProperty = "";
    let pieCharAnimationKeyframes = "";
    let pieCharAnimationStartOpacity = "";
    let pieCharAnimationEndOpacity = "";
    let pieCharConicGradientValues = "";
    let lastProcentValue = 0;

    pieChartData.forEach((data, index) => {
      const nr = index + 1;
      const {
        color,
        percent
      } = data;
      const percentValue = percent + lastProcentValue;

      pieCharColors += `--color-${nr}: ${color};`;
      pieCharAnimationStartOpacity += `--opacity-${nr}: 0%;`;

      if (index === 0) {
        pieCharAnimationEndOpacity += `--opacity-${nr}: ${percentValue}%;`;
        pieCharConicGradientValues += showAnimation ? `var(--color-${nr}) var(--opacity-${nr}),` : `${color} ${percentValue}%,`;
      } else if (index === pieChartData.length - 1) {
        pieCharConicGradientValues += showAnimation ? `var(--color-${nr}) 0 var(--opacity-${nr})` : `${color} 0 ${percentValue}%`;
      } else {
        pieCharAnimationEndOpacity += `--opacity-${nr}: ${percentValue}%;`;
        pieCharConicGradientValues += showAnimation ? `var(--color-${nr}) 0 var(--opacity-${nr}),` : `${color} 0 ${percentValue}%,`;
      }

      pieCharLegendItems += `${this.pieChartContainerSelector} .legends .legend-item:nth-child(${nr})::before {background-color: var(--color-${nr});}`;

      if (showAnimation) {
        pieCharCSSOpacityProperties += `@property --opacity-${nr} {syntax: "<percentage>";initial-value: 100%;inherits: false;}`;
      }
      lastProcentValue = percentValue;
    });

    if (showAnimation) {
      pieCharAnimationProperty = `animation: piechart-conic-gradient-animation ${
        animationSpeed / 1000
      }s ease-in-out forwards;`;
      pieCharAnimationKeyframes = `
          @keyframes piechart-conic-gradient-animation {
            0% { ${pieCharAnimationStartOpacity} } 
            100% { ${pieCharAnimationEndOpacity} }
          }
        `;
    }

    let pieChartConicGradientBg = sumOfPercents === 0 ? '' : `background-image: conic-gradient(from 30deg, ${pieCharConicGradientValues});`

    return `
              ${pieCharCSSOpacityProperties}
  
              ${this.pieChartContainerSelector} {
                  ${pieCharColors} 
              } 
              ${this.pieChartContainerSelector} .pie-chart {
                  ${pieChartConicGradientBg}  
                  ${pieCharAnimationProperty} 
              } 
              ${pieCharAnimationKeyframes}
              ${pieCharLegendItems}
          `;
  }
}

class CustomPopover extends HTMLElement {

  dataClass
  dataButtonClass
  dataContentClass
  content
  button
  isOpen = false

  constructor() {
    super()
  }

  connectedCallback() {
    const buttonTextTemplate = this.querySelector(`[slot="button-text"]`)
    const contentTemplate = this.querySelector(`[slot="content"]`)

    this.dataClass = this.getAttribute("data-class") ?? "";
    this.contentVal = contentTemplate?.innerHTML || "";
    this.buttonTextVal = buttonTextTemplate?.innerHTML || "";
    this.dataButtonClass = buttonTextTemplate.getAttribute("data-class") ?? "";
    this.dataContentClass = contentTemplate.getAttribute("data-class") ?? "";
    this.render();
    this.init();
  }

  init() {
    this.content = this.querySelector('[data-popover-content]')
    this.button = this.querySelector('[data-popover-button]')

    this.content.style.display = "none"

    this.button.addEventListener('click', (e) => {
      if (!this.isOpen) {
        this.show()
      } else {
        this.hide()
      }
    })

    document.addEventListener('click', (e) => {
      const isNotThisContent = !e.target.closest('[data-popover-content]')

      if (this.isOpen && e.target !== this.button && isNotThisContent) {
        this.hide()
      }
    })
  }

  show() { 
    this.content.style.display = "block"
    this.button.classList.add('active')
    this.isOpen = true
  }
  hide() {
    this.content.style.display = "none"
    this.button.classList.remove('active')
    this.isOpen = false
  }

  render() {
    this.innerHTML = `
      <div data-custom-popover class="custom-popover ${this.dataClass}">
        <button role="button" data-popover-button class="custom-popover-button ${this.dataButtonClass}">
          ${this.buttonTextVal}
        </button>

        <div data-popover-content class="custom-popover-content ${this.dataContentClass}" role="dialog">
          ${this.contentVal}
        </div>
      </div>
    `
  }
}
customElements.define("custom-popover", CustomPopover);


class CustomSelect {
  static HIDE_VALUE = "hide"
  static NULL_VALUE = "null"
  static CHANGE_OPTION_EVENT = "upt-custom-select-change-option"

  selectElement
  wrapper = null
  isInitialized = true
  numberOfOptions
  className

  /** @param {HTMLSelectElement} selectElement */
  constructor(selectElement) {
    this.selectElement = selectElement;
    this.numberOfOptions = selectElement.children.length;
    this.className = selectElement.dataset.className ?
      selectElement.dataset.className :
      "custom-select";
    this.createCustomElements();
    this.attachEventListeners();
    this.isInitialized = false
  }

  /** @param {() => void} callback */
  reRender(callback) {
    this.destroy()
    callback()
    this.numberOfOptions = this.selectElement.children.length;
    this.createCustomElements();
    this.attachEventListeners();
  }

  createCustomElements() {
    this.selectElement.classList.add(`${this.className}-hidden`);
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add(this.className);
    this.selectElement.parentNode.insertBefore(this.wrapper, this.selectElement);
    this.wrapper.appendChild(this.selectElement);
    this.styledSelect = document.createElement("div");
    this.styledSelect.classList.add(`${this.className}-styled`);
    const firstOption = this.selectElement.options[0]
    const firstOptionIcon = firstOption.dataset.icon

    this.styledSelect.innerHTML = `
      ${firstOptionIcon ? `<i class="fa-solid ${firstOptionIcon}"></i>` : ''}
      ${firstOption.textContent}
    `;
    this.wrapper.appendChild(this.styledSelect);
    this.optionList = document.createElement("ul");
    this.optionList.classList.add(`${this.className}-options`);
    this.wrapper.appendChild(this.optionList);
    this.styledSelect.setAttribute("tabindex", "0");

    for (let i = 0; i < this.numberOfOptions; i++) {
      let listItem = document.createElement("li");
      let icon = this.selectElement.options[i].dataset.icon;
      let listItemIcon = icon ? document.createElement("i") : "";
      listItem.textContent = this.selectElement.options[i].textContent;
      listItem.setAttribute("rel", this.selectElement.options[i].value);
      listItem.setAttribute("tabindex", "0");

      if (listItemIcon != "") {
        listItemIcon.classList.add("fa-solid", icon);
      }

      listItem.prepend(listItemIcon);
      this.optionList.appendChild(listItem);

      if (this.selectElement.options[i].selected) {
        listItem.classList.add("is-selected");
      }
    }

    this.listItems = this.optionList.querySelectorAll("li");
  }

  getOptionsListElement() {
    return this.optionList
  }

  getCurrentValue() {
    const currentSelectedOption = this.optionList.querySelector("li.is-selected")

    return currentSelectedOption.getAttribute("rel")
  }

  /** @param {string | null} value */
  chooseOption(value) {
    const prevSelected = this.optionList.querySelector("li.is-selected")
    let listItem = this.optionList.querySelector(`[rel="${value}"]`)

    if (!listItem) {
      listItem = this.optionList.querySelector(`[rel="${CustomSelect.HIDE_VALUE}"]`)
    }

    this.styledSelect.innerHTML = listItem.innerHTML;
    this.styledSelect.classList.remove("active");
    this.selectElement.value = listItem.getAttribute("rel");

    prevSelected.classList.remove("is-selected");
    listItem.classList.add("is-selected");
    this.optionList.style.display = "none";

    if (!this.isInitialized) {

      this.wrapper.dispatchEvent(new CustomEvent(CustomSelect.CHANGE_OPTION_EVENT, {
        detail: {
          value: value,
          prevValue: prevSelected.getAttribute("rel")
        }
      }))
    }
  };

  /** @param {(e: CustomEvent)=> {}} callback */
  onChangeSelect(callback) {
    this.wrapper.addEventListener(CustomSelect.CHANGE_OPTION_EVENT, e => callback(e))
  }

  openSelect(e) {
    e.stopPropagation()

    document
      .querySelectorAll(`div.${this.className}-styled.active`)
      .forEach((activeStyledSelect) => {
        if (activeStyledSelect !== this.styledSelect) {
          activeStyledSelect.classList.remove("active");
          activeStyledSelect.nextElementSibling.style.display = "none";
        }
      });
    this.styledSelect.classList.toggle("active");
    this.optionList.style.display = this.styledSelect.classList.contains("active") ? "block" : "none";
  };

  attachEventListeners() {
    this.styledSelect.addEventListener("click", (e) => this.openSelect(e));
    this.styledSelect.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.openSelect(e);
      }
    }); 

    this.listItems.forEach((listItem) => {
      listItem.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.chooseOption(listItem.getAttribute('rel'));
        }
      });
      listItem.addEventListener("click", () => this.chooseOption(listItem.getAttribute('rel')));
    });

    document.addEventListener("click", () => {
      this.styledSelect.classList.remove("active");
      this.optionList.style.display = "none";
    });
  }

  destroy() {
    const wrapperParent = this.wrapper.parentElement

    this.selectElement.classList.remove(`${this.className}-hidden`);

    wrapperParent.append(this.selectElement)
    this.wrapper.remove()
  }

  /** @param {string} selector */
  static initAll(selector) {
    document
      .querySelectorAll(selector)
      .forEach((selectElement) => {
        new CustomSelect(selectElement);
      });
  }
}

class CustomToast {
  static CONTAINER_ID = "custom-module-toast-container"

  static SUCCESS = "success";
  static WARNING = "warning";
  static ERROR = "error";
  static INFO = "info";
  static SUCCESS_ICON = "fa-circle-check";
  static ERROR_ICON = "fa-circle-exclamation";
  static WARNING_ICON = "fa-triangle-exclamation";
  static INFO_ICON = "fa-circle-info";

  TIMER_DURATION = 6000
  TIMER_ANIMATION_DURATION = 300

  toastId = '';
  toast;
  countdown;

  /**
   * @param {string} type
   * @param {string} message
   */
  static show(type, message = "") {
    const toast = new CustomToast()
    toast.open(type, message);
  }

  constructor() {
    this.module = Utils.getModuleContainer()
    this.container = this.module.querySelector(`#${CustomToast.CONTAINER_ID}`);

    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = "toast-container"
      this.container.id = CustomToast.CONTAINER_ID
      this.module.append(this.container)
    }
    this.toastId = Utils.generateId("custom-toast-");
    this.init();
  }

  init() {
    this.toast = this.generateToast();
    this.toastTimer = this.toast.querySelector(".timer");
    this.closeToastBtn = this.toast.querySelector(".toast-close");
    this.toastIcon = this.toast.querySelector(".icon");
    this.toastTitle = this.toast.querySelector(".toast-message-title");
    this.toastMessage = this.toast.querySelector(".toast-message-text");

    if (this.closeToastBtn)
      this.closeToastBtn.addEventListener("click", () => this.close());
  }

  /** @returns {HTMLDivElement} */
  generateToast() {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.id = String(this.toastId);
    toast.style.display = "none";
    toast.innerHTML = ` 
        <i class="icon fa-solid"></i>
        <div class="toast-message">
          <p class="toast-message-title"></p>
          <p class="toast-message-text"></p>
        </div>
        <button role="button" class="toast-close"><span class="sr-only">Zamknij</span></button>
        <div class="timer"></div>
      `;

    this.container.append(toast);

    return toast;
  }

  close() {
    this.toast.style.animation = `close ${this.TIMER_ANIMATION_DURATION / 1000.0}s cubic-bezier(.87,-1,.57,.97) forwards`;
    this.toastTimer.classList.remove("timer-animation");

    clearTimeout(this.countdown);

    setTimeout(() => {
      this.toast.style.display = "none";
      this.toast.remove();

    }, this.TIMER_ANIMATION_DURATION);
  }

  /**
   * @param {string} type
   * @param {string} message
   */
  open(type, message = "") {
    if (this.toast.style.display != "none") return;

    let toastTitle;
    let toastIcon;
    this.toast.classList.remove(CustomToast.SUCCESS, CustomToast.WARNING, CustomToast.ERROR, CustomToast.INFO);
    this.toastIcon.classList.remove(CustomToast.SUCCESS_ICON, CustomToast.WARNING_ICON, CustomToast.ERROR_ICON, CustomToast.INFO_ICON);
    this.toast.style.removeProperty('display')

    switch (type) {
      case CustomToast.SUCCESS:
        toastTitle = "Sukces!";
        toastIcon = CustomToast.SUCCESS_ICON;
        break;
      case CustomToast.ERROR:
        toastTitle = "Niepowodzenie!";
        toastIcon = CustomToast.ERROR_ICON;
        break;
      case CustomToast.WARNING:
        toastTitle = "Ostrzeżenie";
        toastIcon = CustomToast.WARNING_ICON;
        break;
      default:
        toastTitle = "Informacja";
        toastIcon = CustomToast.INFO_ICON;
    }

    this.toastTitle.textContent = toastTitle;
    this.toastMessage.textContent = message;
    this.toastIcon.classList.add(toastIcon);
    this.toast.classList.add(type);
    this.toast.style.animation = `open ${this.TIMER_ANIMATION_DURATION / 1000.0}s cubic-bezier(.47,.02,.44,2) forwards`;
    this.toastTimer.classList.add("timer-animation");

    clearTimeout(this.countdown);

    this.countdown = setTimeout(() => this.close(), this.TIMER_DURATION);
  }
}

class AchievementUnlockedToast {

  TIMER_DURATION = 5800
  TIMER_ANIMATION_DURATION = 300

  /** @param {string} achievementName */
  static show(achievementName) {
    const toast = new AchievementUnlockedToast(achievementName)
    toast.open();
  }

  /** @param {string} achievementName */
  constructor(achievementName) {
    this.module = Utils.getModuleContainer()
    this.container = this.module.querySelector(`#${Utils.NOTIFICATIONS_ACHIEVEMENTS_MODAL_ID}`);
    this.toastAchievementName = achievementName
    this.countdown = null

    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = "achievement-notifications"
      this.container.id = Utils.NOTIFICATIONS_ACHIEVEMENTS_MODAL_ID
      this.module.append(this.container)
    }
    this.toast = this.generateToast();
  }

  /** @returns {HTMLDivElement} */
  generateToast() {
    const toast = document.createElement("div");

    toast.className = "notify animate";
    toast.innerHTML = ` 
        <div class="button">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <span class="title">Odblokowano nowe osiągnięcie!</span>
        <span data-achievement-name class="subtitle">"${this.toastAchievementName}"</span>
    `;

    this.container.append(toast);

    return toast;
  }

  close() {
    this.toast.classList.remove("show");
    clearTimeout(this.countdown);

    setTimeout(() => this.toast.remove(), this.TIMER_ANIMATION_DURATION);
  }

  open() {
    this.toast.classList.add("show");

    clearTimeout(this.countdown);

    this.countdown = setTimeout(() => this.close(), this.TIMER_DURATION);
  }
}

class AchievementRewardToast {
  TIMER_DURATION = 5000
  TIMER_ANIMATION_DURATION = 300

  /** 
   * @param {string} icon
   * @param {string} name 
   * @param {string} type
   */
  static show(icon, name, type) {
    const toast = new AchievementRewardToast(icon, name, type)
    toast.open();
  }

  constructor(icon, name, type) {
    this.module = Utils.getModuleContainer()
    this.container = this.module.querySelector(`#${Utils.NOTIFICATIONS_ACHIEVEMENTS_MODAL_ID}`);
    this.icon = icon
    this.name = name
    this.type = type
    this.countdown = null

    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = "achievement-notifications"
      this.container.id = Utils.NOTIFICATIONS_ACHIEVEMENTS_MODAL_ID
      this.module.append(this.container)
    }
    this.toast = this.generateToast();
    this.closeToastBtn = this.toast.querySelector("[data-close-btn]");

    if (this.closeToastBtn)
      this.closeToastBtn.addEventListener("click", () => this.close());
  }

  /** @returns {HTMLDivElement} */
  generateToast() {
    const toast = document.createElement("div");
    const message = this.type === AchievementReward.BADGE ? "Zdobyto nową odznakę!" : "Zdobyto nowy przedmiot!"
    const messageEl = this.type === AchievementReward.BADGE || this.type === AchievementReward.ITEM ? `<div data-info class="notification-subtitle">${message}</div>` : ''
    const iconImage = this.icon ? `
      <div class="notification-icon">
          <img src="${this.icon}" alt="${this.name}">
      </div>
    ` : ''

    toast.className = "reward-notify";
    toast.innerHTML = ` 
        ${iconImage}

        <div class="notification-content">
          <div class="notification-title">
            <i class="fas fa-trophy trophy-icon"></i>
            <span data-name>${this.name}</span>
          </div>
          ${messageEl}
        </div>

        <button data-close-btn class="notification-close">
          <i class="fas fa-times"></i>
        </button>
    `;

    this.container.append(toast);

    return toast;
  }

  close() {
    this.toast.classList.remove("show");
    clearTimeout(this.countdown);

    setTimeout(() => this.toast.remove(), this.TIMER_ANIMATION_DURATION);
  }

  open() {

    setTimeout(() => this.toast.classList.add("show"), this.TIMER_ANIMATION_DURATION);
    clearTimeout(this.countdown);

    this.countdown = setTimeout(() => this.close(), this.TIMER_DURATION);
  }
}

class CustomModal extends HTMLElement {
  static SHOW_EVENT_NAME = "custom-show-modal";
  static HIDE_EVENT_NAME = "custom-hide-modal";
  static START_LOADING_EVENT_NAME = "custom-start-loading-modal";
  static STOP_LOADING_EVENT_NAME = "custom-stop-loading-modal";

  SLOT_TITLE = "modal-title";
  SLOT_CONTENT = "modal-content";
  ATTR_ID = "data-modal-id";
  ATTR_FIRST_FOCUS = "data-modal-first-focus";
  ATTR_CONTENT_CLASS = "data-modal-content-class";
  ATTR_TITLE = "data-modal-title";
  ATTR_CLOSE_BTN = "data-close-btn";
  ATTR_CONTENT = "data-modal-content";

  constructor() {
    super();
    this.modalDialog = document.createElement('dialog')
  }

  connectedCallback() {
    this.modalId = this.getAttribute(this.ATTR_ID);
    this.modalTitle = this.querySelector(`[slot="${this.SLOT_TITLE}"]`);
    this.modalTitleVal = this.modalTitle?.innerHTML || "";
    this.modalContentVal = this.querySelector(`[slot="${this.SLOT_CONTENT}"]`)?.innerHTML || "";
    this.modalContentClass = this.getAttribute(this.ATTR_CONTENT_CLASS);
    this.modalContentClassVal = this.modalContentClass ?? "";

    this.render();
    this.setEvents();
  }

  setEvents() {
    const modalContent = this.querySelector(`[${this.ATTR_CONTENT}]`)
    const handleEvent = (e, callback) => {
      if (e.detail.modalId === this.modalId) {
        callback()
      }
    }

    window.addEventListener("keydown", (event) => {

      if (event.key && event.key.toLowerCase() == "escape") {
        event.preventDefault()
        this.closeModal();
      }
    });

    this.addEventListener('click', (e) => {
      if (e.target.hasAttribute(this.ATTR_CLOSE_BTN) || e.target === this.modalDialog) {
        this.closeModal()
      }
    })

    document.addEventListener(CustomModal.START_LOADING_EVENT_NAME, (e) => handleEvent(e, () => {
      modalContent.classList.add('loading')
    }))
    document.addEventListener(CustomModal.STOP_LOADING_EVENT_NAME, (e) => handleEvent(e, () => {
      modalContent.classList.remove('loading')
    }))
    document.addEventListener(CustomModal.HIDE_EVENT_NAME, (e) => handleEvent(e, () => this.closeModal()))
    document.addEventListener(CustomModal.SHOW_EVENT_NAME, (e) => handleEvent(e, () => {
      document.body.style.overflowY = "hidden"
      this.modalDialog.showModal()
    }))
  }

  closeModal() {
    this.modalDialog.setAttribute("closing", "");

    this.modalDialog.addEventListener("animationend", () => {
      this.modalDialog.removeAttribute("closing");
      this.modalDialog.close();

      document.body.style.overflowY = "auto"
    }, {
      once: true
    });
  }

  render() {
    this.modalDialog.id = this.modalId
    this.modalDialog.className = "modal"
    this.modalDialog.innerHTML = ` 
      <div ${this.ATTR_CONTENT} class="modal__content modern-card ${this.modalContentClassVal}">
        <div class="modal__header pb-2">
          <p ${this.ATTR_TITLE} id="${this.modalId}-title" class="sr-only">
            ${this.modalTitleVal}
          </p>
          <button role="button" ${this.ATTR_CLOSE_BTN} class="modal__close-btn modal__close-btn--inner">
            <span class="sr-only">Zamknij</span>
            <img class="modal__close-btn-icon" src="./images/close-icon.svg" alt="x" aria-hidden="true">
          </button>
        </div>
        ${this.modalContentVal}
      </div> 
    `;
    this.append(this.modalDialog)
  }
}

customElements.define("custom-modal", CustomModal);


class CustomAlert extends HTMLElement {

  static SUCCESS = "success";
  static WARNING = "warning";
  static ERROR = "error";
  static INFO = "info";
  static SUCCESS_ICON = "fa-circle-check";
  static ERROR_ICON = "fa-circle-exclamation";
  static WARNING_ICON = "fa-triangle-exclamation";
  static INFO_ICON = "fa-circle-info";

  ANIMATION_DURATION = 300

  constructor() {
    super();
  }

  connectedCallback() {
    this.dataType = this.getAttribute('data-type') ?? CustomAlert.INFO;
    this.dataMessage = this.getAttribute('data-message') ?? '';

    this.render();
    this.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close-alert-btn')) {
        Utils.fadeAnimation(() => this.remove(), this, this.ANIMATION_DURATION)
      }
    })
  }

  render() {
    let iconType

    switch (this.dataType) {
      case CustomAlert.SUCCESS:
        iconType = CustomToast.SUCCESS_ICON;
        break;
      case CustomAlert.ERROR:
        iconType = CustomAlert.ERROR_ICON;
        break;
      case CustomAlert.WARNING:
        iconType = CustomAlert.WARNING_ICON;
        break;
      default:
        iconType = CustomAlert.INFO_ICON;
    }

    this.innerHTML = `
      <div class="alert ${this.dataType}-alert">
        <i class="icon fa-solid ${iconType}"></i>
        <p class="message">${this.dataMessage}</p>
        <button role="button" data-close-alert-btn class="close"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `
  }

}

customElements.define("custom-alert", CustomAlert);

class CustomTabs {
  static TAB_CHANGE_EVENT = "custom-tab-change-event"

  /** @param {HTMLElement} container */
  constructor(container) {
    this.container = container
    this.tabButtons = container.querySelectorAll(`[data-tab-button]`);
    this.tabPanels = container.querySelectorAll(`[data-tab-panel]`);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.isInitialized = false
    this.init();
  }

  /** @param {HTMLElement} container */
  static initAll(container) {
    const tabsContents = container.querySelectorAll('[data-tab-content]')

    tabsContents.forEach(content => new CustomTabs(content))
  }

  init() {
    this.tabButtons.forEach(button => {
      button.addEventListener('click', this.handleTabClick);
      button.addEventListener('keydown', this.handleKeyboard);
    });
    this.setActiveTab(this.tabButtons[0]);
  }

  handleTabClick(event) {
    const clickedTab = event.currentTarget;
    this.setActiveTab(clickedTab);
  }

  handleKeyboard(event) {
    const targetTab = event.currentTarget;
    const tabArray = Array.from(this.tabButtons);
    const index = tabArray.indexOf(targetTab);
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.setActiveTab(tabArray[index - 1] || tabArray[tabArray.length - 1]);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.setActiveTab(tabArray[index + 1] || tabArray[0]);
        break;
      case 'Home':
        event.preventDefault();
        this.setActiveTab(tabArray[0]);
        break;
      case 'End':
        event.preventDefault();
        this.setActiveTab(tabArray[tabArray.length - 1]);
        break;
    }
  }

  async setActiveTab(newTab) {
    if (!newTab || newTab.classList.contains('active')) return;

    const newPanelId = newTab.getAttribute('aria-controls');
    const newPanel = this.container.querySelector('#' + newPanelId); 
    const currentPanel = this.container.querySelector(`[data-tab-panel].active`);

    if (currentPanel) {
      currentPanel.style.opacity = '0';
      await this.wait(300);
      currentPanel.classList.remove('active');
    }

    this.tabButtons.forEach(tab => {
      const isNewTab = tab === newTab;
      tab.classList.toggle('active', isNewTab);
      tab.setAttribute('aria-selected', isNewTab);
      tab.setAttribute('tabindex', isNewTab ? '0' : '-1');
    });

    if (newPanel) {
      newPanel.classList.add('active');
      newPanel.offsetHeight;
      newPanel.style.opacity = '1';
    }
    newTab.focus();

    if (this.isInitialized) {
      Utils.dispatchCustomEvent(CustomTabs.TAB_CHANGE_EVENT, {
        tab: newTab.getAttribute('aria-controls')
      })
    }

    this.isInitialized = true
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

class AnimatedProgressBars {
  constructor(container, selector, duration = 1000) {
    this.elements = container.querySelectorAll(selector);
    this.duration = duration;
    this.observer = null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.animationFrames = new Map(); 
    this.init()
    this.setupMotionPreference();
  }

  init() {
    if (this.prefersReducedMotion.matches) {
      this.setValuesWithoutAnimation();
    } else {
      this.initObserver();
    }
  }

  reset() {
    this.init()
  }

  cancelAllAnimations() {
    this.animationFrames.forEach(frameId => cancelAnimationFrame(frameId));
    this.animationFrames.clear();
  }

  disconnectObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  setupMotionPreference() {
    this.prefersReducedMotion.addEventListener('change', (e) => {
      this.cancelAllAnimations();

      if (e.matches) {
        this.setValuesWithoutAnimation();
        this.disconnectObserver();
      } else {
        this.initObserver();
      }
    });
  }

  setValuesWithoutAnimation() {
    requestAnimationFrame(() => {
      this.elements.forEach(element => {
        const per = element.getAttribute("per");
        element.style.setProperty('width', `${per}%`)
        element.style.setProperty('transition', 'none')
        element.style.setProperty('transform', 'translateZ(0)')
      });
    });
  }

  initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
            this.observer.unobserve(entry.target); 
          }
        });
      }, {
        threshold: 0.1
      }
    );

    this.elements.forEach(element => this.observer.observe(element));
  }

  /** 
   * @param {HTMLElement} element 
   * @param {boolean} showAnimation
   */
  animateElement(element, showAnimation = true) {
    if (this.prefersReducedMotion.matches || !showAnimation) {
      this.setValuesWithoutAnimation();
      return;
    }

    const targetValue = parseFloat(element.getAttribute("per"));
    let startTime = null;

    const animate = (timestamp) => {
      if (this.prefersReducedMotion.matches) {
        this.setValuesWithoutAnimation();
        return;
      }

      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / this.duration, 1);
      const currentValue = percentage * targetValue;

      element.style.setProperty('width', `${currentValue}%`)
      element.style.setProperty('transform', 'translateZ(0)')
      element.style.setProperty('will-change', 'width')

      if (progress < this.duration) {
        const frameId = requestAnimationFrame(animate);
        this.animationFrames.set(element, frameId);
      } else {
        element.style.setProperty('width', `${targetValue}%`)
        element.style.setProperty('transform', 'translateZ(0)')
        this.animationFrames.delete(element);
      }
    };

    requestAnimationFrame(animate);
  } 
}

// --------------------------------- GŁÓWNA NAWIGACJA ---------------------------------

class MainNavigation {
  static CHANGE_PAGE_EVENT = "custom-nav-change-page";
  static PAGE_PROFILE = "profil"
  static PAGE_AWARDS = "nagrody"
  static PAGE_ACHIEVEMENTS = "osiagniecia"

  ANIMATION_DURATION_TIME = 300;

  linkPage = "";
  prevLink = null;

  /** @param {HTMLElement} mainContainer */
  constructor(mainContainer) {
    this.mainContainer = mainContainer

    if (!this.mainContainer) {
      console.error(`this.mainContainer is null`);
      return;
    }
    this.navigation = this.mainContainer.querySelector("[data-main-navigation]");
    this.navigationList = this.mainContainer.querySelector("[data-main-navigation-list]");
    this.pages = this.mainContainer.querySelectorAll("[data-content-page]");
    /** @type {NodeListOf<HTMLAnchorElement>} */
    this.pageLinks = this.navigation.querySelectorAll("[data-main-navigation-link]");
    /** @type {HTMLAnchorElement[]} */
    this.pageLinksArray = Array.from(this.pageLinks);
    this.pagesMap = {};

    this.init();
  }

  showInitPage() {
    const linkWithTheSameHash = this.pageLinksArray.find((a) => a.hash === location.hash);

    if (linkWithTheSameHash) {
      this.showPage(linkWithTheSameHash);
    } else if (location.hash === "") {
      const firstLink = this.pageLinksArray.at(0)
      this.showPage(firstLink);
    }
  }

  init() {
    this.pages.forEach(page => {
      const key = page.dataset.contentPage;
      this.pagesMap[key] = page;
    });

    this.bindPageLinks();
    this.showInitPage(); 
  }

  bindPageLinks() {
    const showPageThrottle = Utils.throttle((link) => this.showPage(link), this.ANIMATION_DURATION_TIME);

    this.pageLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showPageThrottle(link);
      });
    });
  }

  /** @param {HTMLAnchorElement} link */
  showPage(link) {
    const activeMenuLink = this.navigation.querySelector("[data-main-navigation-link].active");
    const prevActivePage = this.mainContainer.querySelector("[data-content-page].active");

    if (this.prevLink != link) {
      const linkHref = link?.href.split("#")[1];
      this.prevLink = link;

      history.replaceState(null, null, "#" + linkHref);
      Utils.dispatchCustomEvent(MainNavigation.CHANGE_PAGE_EVENT, {
        page: linkHref
      })
    }

    activeMenuLink?.classList.remove("active");
    link.classList.add("active");
    this.linkPage = link.getAttribute("href");

    const nextPage = this.pagesMap[this.linkPage];

    if (nextPage) {
      this.animateNavigation(this.pageLinksArray.indexOf(link));
      this.animateChangePages(prevActivePage, nextPage);
    }
  }

  /**  @param {number} pageNumber */
  animateNavigation(pageNumber) {
    this.navigationList.style.setProperty('--nav-translate', `${pageNumber * 100}%`);
  }

  /** 
   * @param {HTMLElement} page 
   * @param {string} opacity 
   */
  setPageOpacity(page, opacity) {
    page.style.setProperty('--panel-opacity', opacity)
  }

  /**
   * @param {HTMLElement | null} prevPage
   * @param {HTMLElement} nextPage
   */
  animateChangePages(prevPage, nextPage) {
    if (prevPage === nextPage) return;

    if (prevPage) prevPage.classList.remove("page-static");

    this.pages.forEach((page) => (page.style.position = "absolute"));

    nextPage.classList.add("active"); 
    this.setPageOpacity(nextPage, "0")
 
    if (prevPage) this.setPageOpacity(prevPage, "0")

    setTimeout(() => {
      nextPage.style.position = "relative"; 
      this.setPageOpacity(nextPage, "1") 

      if (prevPage) {
        prevPage.classList.remove("active");
      }
    }, this.ANIMATION_DURATION_TIME);
  }
}

// --------------------------------- MODUŁY ZWIĄZANE Z NAGRODAMI ---------------------------------

class RewardChest {
  static ANIMATION = {
    SHAKE: 'shake-chest',
    OPEN: 'open-chest'
  };

  /** @param {HTMLElement} container */
  constructor(container) {
    this.container = container;
    this.chestElement = container.querySelector('[data-reward-chest]')
    this.isOpen = false;
    this.isAnimating = false;

    this.init();
  }

  init() {
    if (!this.container) {
      throw new Error('Missing container element');
    } 
  }

  /**
   * Pokazuje skrzynię
   * @returns {Promise} Rozwiązuje się po zakończeniu animacji
   */
  show() {
    return new Promise((resolve) => {
      if (this.isAnimating) return;
      this.isAnimating = true; 

      this.chestElement.addEventListener('animationend', () => {
        this.isAnimating = false;
        resolve();
      }, {
        once: true
      });
    });
  }

  /**
   * Ukrywa skrzynię
   * @returns {Promise} Rozwiązuje się po zakończeniu animacji
   */
  hide() {
    return new Promise((resolve) => {
      if (this.isAnimating) return;
      this.isAnimating = true; 
      this.chestElement.addEventListener('animationend', () => {
        this.isAnimating = false;
        this.reset();
        resolve();
      }, {
        once: true
      });
    });
  }

  /**
   * Otwiera skrzynię
   * @returns {Promise} Rozwiązuje się po zakończeniu animacji
   */
  open() {
    return new Promise((resolve) => {

      if (this.isAnimating || this.isOpen) return;
      this.isAnimating = true;

      this.chestElement.classList.remove(RewardChest.ANIMATION.SHAKE);
      this.chestElement.classList.add(RewardChest.ANIMATION.OPEN);
      this.isOpen = true;

      this.chestElement.addEventListener('animationend', () => {
        this.isAnimating = false;
        resolve();
      }, {
        once: true
      });
    });
  }

  /** Resetuje stan skrzyni */
  reset() {
    this.chestElement.classList.remove(RewardChest.ANIMATION.OPEN);
    this.chestElement.classList.add(RewardChest.ANIMATION.SHAKE);
    this.isOpen = false;
    this.isAnimating = false;
  }
}
