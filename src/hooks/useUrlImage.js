import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'
import { checkIsDay } from '@/utils/checkIsDay.js'

const useUrlImage = (day = 0) => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  if (!infoWeather.meteo?.daily) return ''

  const sunrise = infoWeather.meteo.daily.sunrise[day]
  const sunset = infoWeather.meteo.daily.sunset[day]
  const weatherCode = infoWeather.meteo.daily.weather_code[day]

  const isDay = checkIsDay(sunrise, sunset)

  if (weatherCode >= 95 && weatherCode <= 99) {
    return '/Website-weather/images/thunderstorm.webp';
  }

  if (weatherCode === 65 || weatherCode === 82) {
    return '/Website-weather/images/heavy-rain.webp';
  }

  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55 ||
    weatherCode === 61 || weatherCode === 63 ||
    weatherCode === 66 || weatherCode === 67 ||
    weatherCode === 80 || weatherCode === 81) {
    return isDay
      ? '/Website-weather/images/rain-day.webp'
      : '/Website-weather/images/rain-night.webp';
  }

  if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75 ||
    weatherCode === 77 || weatherCode === 85 || weatherCode === 86) {
    return '/Website-weather/images/snow.webp';
  }

  if (weatherCode === 0) {
    return isDay
      ? '/Website-weather/images/clear-day.webp'
      : '/Website-weather/images/clear-night.webp';
  }

  return '/Website-weather/images/cloudy.webp';
}

export { useUrlImage }