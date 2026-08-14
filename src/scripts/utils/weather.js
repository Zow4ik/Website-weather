export const weather = {
  isDayTime(sunrise, sunset) {
    const now = new Date()
    const sunriseTime = new Date(sunrise)
    const sunsetTime = new Date(sunset)

    if (now >= sunriseTime && now <= sunsetTime) {
      return 'day'
    }
      return 'night'
  },

  getWeatherUrlImage(weatherCode, isDay) {

    if (weatherCode >= 95 && weatherCode <= 99) {
      return 'thunderstorm.webp';
    }

    if (weatherCode === 65 || weatherCode === 82) {
      return 'heavy-rain.webp';
    }

    if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55 ||
      weatherCode === 61 || weatherCode === 63 ||
      weatherCode === 66 || weatherCode === 67 ||
      weatherCode === 80 || weatherCode === 81) {
      return isDay ? 'rain-day.webp' : 'rain-night.webp';
    }

    if (weatherCode === 0) {
      return isDay ? 'clear-day.webp' : 'clear-night.webp';
    }

    return 'cloudy.webp';
  },
}