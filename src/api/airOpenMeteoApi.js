const URL = `https://air-quality-api.open-meteo.com/v1/air-quality?` +
  `current=european_aqi`

const airOpenMeteoApi = {
  getFullData({latitude, longitude}) {
    return fetch(`${URL}&latitude=${latitude}&longitude=${longitude}`)
      .then((response) => response.json())
      .then((json) => json)
  }
}

export { airOpenMeteoApi }