export default class ForecastUpdater {
  elements = {}

  constructor(store, weather) {
    this.store = store
    this.weather = weather
    this.getElement()
    this.bindEvents()
  }

  updateDate() {
    this.elements.forecastContainer.innerHTML = ''

    const { daily } = this.store.state.meteo

    for (let i = 0; i < 7; i++) {
      const day = new Date(daily.time[i]).toLocaleDateString('en-US', { weekday: 'short' })
      const temperature = Math.floor(daily.temperature_2m_max[i])
      const isDay = this.weather.isDayTime(daily.sunrise[i], daily.sunset[i])
      const imageUrl = this.weather.getWeatherUrlImage(daily.weather_code[i], isDay)

      this.elements.forecastContainer.innerHTML += `
        <li class="weather-details__card card">
          <span class="weather-details__card-day">${day}</span>
          <img
            class="weather-details__card-image"
            src="/Website-weather/images/${imageUrl}"
            alt=""
            width="70"
            height="70"
            loading="lazy"
          />
          <span class="weather-details__card-temperature">${temperature}°C</span>
        </li>
      `
    }
  }

  bindEvents() {
    document.addEventListener('updateDateState', () => this.updateDate())
  }

  getElement() {
    this.elements = {
      forecastContainer: document.querySelector('[data-js-block-forecast]')
    }
  }
}