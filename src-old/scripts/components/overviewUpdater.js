export default class OverviewUpdater {
  elements = {}

  states = {
    good: ['good', 'state--good'],
    normal: ['normal', 'state--normal'],
    moderate: ['moderate', 'state--moderate'],
  }

  constructor(store) {
    this.store = store
    this.getElements()
    this.bindEvents()
  }

  getAirQualityStatus() {
    const index = this.store.state.airMeteo.current.european_aqi

    switch (true) {
      case index <= 50:
        return this.states.good
      case index <= 100:
        return this.states.normal
      case index > 100:
        return this.states.moderate
    }
  }

  getUvIndexStatus() {
    const index = this.store.state.meteo.current.uv_index

    switch (true) {
      case index <= 3:
        return this.states.good
      case index <= 5:
        return this.states.normal
      case index >= 6:
        return this.states.moderate
    }
  }

  getHpaState() {
    const index = this.store.state.meteo.current.pressure_msl

    switch (true) {
      case index >= 1010 && index <= 1020:
        return this.states.good
      case index >= 980 && index <= 1030:
        return this.states.normal
      case index < 980 || index > 1030:
        return this.states.moderate
    }
  }

  updateDate() {
    const indexAir = this.getAirQualityStatus()
    const indexUv = this.getUvIndexStatus()
    const indexHpa = this.getHpaState()

    const { meteo } = this.store.state
    const { airMeteo } = this.store.state

    this.elements.airQuality.index.textContent = airMeteo.current.european_aqi
    this.elements.airQuality.state.textContent = indexAir[0]
    this.elements.airQuality.state.classList.add(indexAir[1])

    this.elements.uvIndex.index.textContent = meteo.current.uv_index
    this.elements.uvIndex.state.textContent = indexUv[0]
    this.elements.uvIndex.state.classList.add(indexUv[1])

    this.elements.hpa.index.textContent = meteo.current.pressure_msl
    this.elements.hpa.state.textContent = indexHpa[0]
    this.elements.hpa.state.classList.add(indexHpa[1])

    this.elements.sunrise.textContent = new Date(meteo.daily.sunrise[0])
      .toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    this.elements.sunset.textContent = new Date(meteo.daily.sunset[0])
      .toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  bindEvents() {
    document.addEventListener('updateDateState', () => this.updateDate())
  }

  getElements() {
    this.elements = {
      airQuality: {
        index: document.querySelector('[data-js-air-index]'),
        state: document.querySelector('[data-js-air-state]'),
      },
      uvIndex: {
        index: document.querySelector('[data-js-uv-index]'),
        state: document.querySelector('[data-js-uv-state]'),
      },
      hpa: {
        index: document.querySelector('[data-js-hpa-index]'),
        state: document.querySelector('[data-js-hpa-state]'),
      },
      // precipitation: {},
      sunrise: document.querySelector('[data-js-sunrise]'),
      sunset: document.querySelector('[data-js-sunset]'),
    }
  }
}