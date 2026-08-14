export default class Search {
  lastSearchQuery = null

  elements = {}

  constructor(store, urlManage) {
    this.store = store
    this.urlManage = urlManage
    this.getElements()
    this.bindEvents()
  }

  showList() {
    this.elements.citiesInner.classList.add('active')
  }

  hideList(event, force) {
    if (force) {
      this.elements.citiesInner.classList.remove('active')
      return
    }

    if (!event || event.target.closest('.weather-header__search')) return
    this.elements.citiesInner.classList.remove('active')
  }

  createEmptyResult() {
    this.elements.citiesInner.innerHTML = `
    <span class="weather-header__search-city" data-js-empty>ничего не найдено</span>`
  }

  createResultElement(cities) {
    if (!cities) {
      this.createEmptyResult()
      return
    }

    this.elements.citiesInner.innerHTML = ''

    cities.forEach((item) => {
      this.elements.citiesInner.innerHTML += `
        <span 
          class="weather-header__search-city" 
          data-js-latitude="${item.latitude}" 
          data-js-longitude="${item.longitude}"
        >
         ${item.name} (${item.country})
        </span>`
    })
  }

  searchCities(event) {
    if (event.code !== 'Enter' && event.type !== 'click') return
    const enteredCity = this.elements.input.value.trim()

    if (!enteredCity) return

    if (enteredCity === this.lastSearchQuery) return
    this.lastSearchQuery = enteredCity

    fetch(`https://geocoding-api.open-meteo.com/v1/search?count=5&name=${enteredCity}`)
      .then((response) => response.json())
      .then((json) => {
        this.createResultElement(json.results)
        this.showList()
      })
      .catch((error) => alert(`ошибка - ${error}`));
  }

  async getFullInfo(cityElement) {
    const city = cityElement.textContent.trim().split(' ')[0]
    const latitude = cityElement.dataset.jsLatitude
    const longitude = cityElement.dataset.jsLongitude
    let result = {}

    const urlMeteo = this.urlManage.getUrlMeteo({
      city: city,
      latitude: latitude,
      longitude: longitude,
    })

    const urlQualityAir = this.urlManage.getUrlAirMeteo({
      latitude: latitude,
      longitude: longitude
    })

    const responseMeteo = await fetch(urlMeteo)
    const responseAir = await fetch(urlQualityAir)
    const responseMeteoJson = await responseMeteo.json()
    const responseAirJson = await responseAir.json()

    result = {
      meteo: responseMeteoJson,
      airMeteo: responseAirJson,
      longitude: longitude,
      latitude: latitude,
      city: city
    }

    return result
  }

  async setResult(event) {
    const elementResult = event.target.closest('.weather-header__search-city')
    if (!elementResult) return
    if (elementResult.hasAttribute('data-js-empty')) return

    this.hideList('', true)

    let fullInfo = await this.getFullInfo(elementResult)

    const params = new URLSearchParams({
      city: fullInfo.city,
      latitude: fullInfo.latitude,
      longitude: fullInfo.longitude,
    })

    this.urlManage.setUrlParams(params)

    this.store.setState(fullInfo)
  }

  bindEvents() {
    this.elements.input.addEventListener('keydown', (event) => this.searchCities(event))
    this.elements.button.addEventListener('click', (event) => this.searchCities(event))
    this.elements.citiesInner.addEventListener('click', (event) => this.setResult(event))
    document.addEventListener('click', (event) => this.hideList(event))
  }

  getElements() {
    this.elements = {
      input: document.querySelector('.weather-header__search-input'),
      button: document.querySelector('.weather-header__search-button'),
      citiesInner: document.querySelector('.weather-header__search-extradition'),
    }
  }
}