export default class WeatherHeaderUpdater {
  elements = {}

  constructor(store, weather) {
    this.store = store
    this.weather = weather
    this.getElements()
    this.bindEvents()
  }

  updateDate() {
    const { current, daily } = this.store.state.meteo

    const isDay = this.weather.isDayTime(daily.sunrise[0], daily.sunset[0])
    const imageUrl = this.weather.getWeatherUrlImage(daily.weather_code[0], isDay)

    this.elements.imageWeather.src = `/Website-weather/images/${imageUrl}`
    this.elements.temperature.textContent = `${Math.floor(current.temperature_2m)}°C`
    this.elements.city.textContent = new URLSearchParams(window.location.search).get('city')
    this.elements.today.textContent = new Date(daily.time[0]).toLocaleDateString('en-US', { weekday: 'short' })
    this.elements.minTemperature.textContent = `Min Temperature - ${Math.floor(daily.temperature_2m_min[0])}°C`
    this.elements.maxTemperature.textContent = `Max Temperature - ${Math.floor(daily.temperature_2m_max[0])}°C`
    this.elements.humidity.textContent = `${current.relative_humidity_2m}%`
    this.elements.wind.textContent = `${current.wind_speed_10m}km/h`
  }

  bindEvents() {
    document.addEventListener('updateDateState', () => this.updateDate())
  }

  getElements() {
    this.elements = {
      imageWeather: document.querySelector('[data-js-header-image-weather]'),
      temperature: document.querySelector('[data-js-header-temperature]'),
      city: document.querySelector('[data-js-header-city]'),
      today: document.querySelector('[data-js-header-today]'),
      minTemperature: document.querySelector('[data-js-header-min]'),
      maxTemperature: document.querySelector('[data-js-header-max]'),
      humidity: document.querySelector('[data-js-header-humidity]'),
      wind: document.querySelector('[data-js-header-wind]'),
    }
  }
}