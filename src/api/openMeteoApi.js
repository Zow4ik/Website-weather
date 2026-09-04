const URL = `https://api.open-meteo.com/v1/forecast?` +
  `current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,pressure_msl` +
  `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weather_code` +
  `&timezone=Europe/Moscow&forecast_days=7` +
  `&hourly=precipitation_probability` +
  `&forecast_hours=8`

const openMeteoApi = {
  getFullData({name, latitude, longitude}) {
    return fetch(`${URL}&latitude=${latitude}&longitude=${longitude}&name=${name}`)
      .then((response) => response.json())
      .then((json) => json)
  },

  getTitlesCities(city) {
    return fetch(`https://geocoding-api.open-meteo.com/v1/search?count=5&name=${city}`)
      .then((response) => response.json())
      .then((json) => json)
  }
}

export { openMeteoApi }