export default class Forecast {
  elements = {}

  constructor() {
    this.getElements()
    this.bindEvents()
  }

  setView(item) {
    if (item === 'Today') {
      this.elements.buttonToday.classList.add('active')
      this.elements.blockToday.classList.add('active')
      this.elements.buttonWeek.classList.remove('active')
      this.elements.blockWeek.classList.remove('active')
    } else {
      this.elements.buttonToday.classList.remove('active')
      this.elements.blockToday.classList.remove('active')
      this.elements.buttonWeek.classList.add('active')
      this.elements.blockWeek.classList.add('active')
    }
  }

  checkWeek() {
    if (this.elements.buttonWeek.classList.contains('active')) return
    this.setView('Week')
  }

  checkDay() {
    if (this.elements.buttonToday.classList.contains('active')) return
    this.setView('Today')
  }

  bindEvents() {
    this.elements.buttonToday.addEventListener(('click'), () => this.checkDay())
    this.elements.buttonWeek.addEventListener(('click'), () => this.checkWeek())
  }

  getElements() {
    this.elements = {
      buttonToday: document.querySelector('[data-js-button-today]'),
      buttonWeek: document.querySelector('[data-js-button-week]'),
      blockToday: document.querySelector('[data-js-block-current-day]'),
      blockWeek: document.querySelector('[data-js-block-week]'),
    }
  }
}