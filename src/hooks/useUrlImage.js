import {useContext} from 'react'
import {WeatherContext} from '@/context/WeatherContext.jsx'
import {checkIsDay} from '@/utils/checkIsDay.js'

const useUrlImage = (day = 0) => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  if (!infoWeather.meteo?.daily) return ''

  const sunrise = infoWeather.meteo.daily.sunrise[day]
  const sunset = infoWeather.meteo.daily.sunset[day]
  const weatherCode = infoWeather.meteo.daily.weather_code[day]

  const isDay = checkIsDay(sunrise, sunset)

  // гроза (коды 95-99)
  if (weatherCode >= 95 && weatherCode <= 99) {
    return '/images/thunderstorm.webp';
  }

  // Сильный дождь (коды 65, 82)
  if (weatherCode === 65 || weatherCode === 82) {
    return '/images/heavy-rain.webp';
  }

  // Обычный дождь (коды 51, 53, 55, 61, 63, 66, 67, 80, 81)
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55 ||
    weatherCode === 61 || weatherCode === 63 ||
    weatherCode === 66 || weatherCode === 67 ||
    weatherCode === 80 || weatherCode === 81) {
    return isDay ? '/images/rain-day.webp' : '/images/rain-night.webp';
  }

  // Снег (коды 71, 73, 75, 77, 85, 86)
  if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75 ||
    weatherCode === 77 || weatherCode === 85 || weatherCode === 86) {
    return '/images/snow.webp';
  }

  // Ясно (код 0)
  if (weatherCode === 0) {
    return isDay ? '/images/clear-day.webp' : '/images/clear-night.webp';
  }

  // Все остальное - облачно
  return '/images/cloudy.webp';
}

export { useUrlImage }