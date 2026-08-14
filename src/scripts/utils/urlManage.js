export const urlManage = {
  setUrlParams(params) {
    window.history.replaceState(null, '', `/Website-weather/?${params}`)
  },

  getUrlMeteo({ latitude, longitude, city }) {
    return `https://api.open-meteo.com/v1/forecast?` +
    `name=${city}` +
    `&latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,pressure_msl` +
    `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weather_code` +
    `&timezone=Europe/Moscow&forecast_days=7` +
    `&hourly=precipitation_probability` +
    `&forecast_hours=8`
  },

  getUrlAirMeteo({ latitude, longitude }) {
    return `https://air-quality-api.open-meteo.com/v1/air-quality?` +
      `latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=european_aqi`
  },

  getDefaultParams() {
    return {
      city: 'Moscow',
      latitude: '55.75204',
      longitude: '37.61781',
    }
  }
}