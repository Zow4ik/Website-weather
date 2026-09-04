import styles from './InfoToday.module.scss'
import {useContext} from 'react'
import {WeatherContext} from '@/context/WeatherContext.jsx'
import {useUrlImage} from '@/hooks/useUrlImage.js'

const InfoToday = () => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  let city
  let today
  let temperature

  const urlImage = useUrlImage()

  if (infoWeather.meteo?.daily && infoWeather.meteo?.current) {
    city = infoWeather.city
    today = new Date(infoWeather.meteo.daily.time[0]).toLocaleDateString('en-US', {weekday: 'short'})
    temperature = Math.floor(infoWeather.meteo.current.temperature_2m)
  }

  return (
    <>
      <img
        alt=""
        src={urlImage}
        width="316"
        height="316"
        loading="lazy"
        data-js-header-image-weather
      />
      <span
        className={styles.temperature}
        data-js-header-temperature
      >
        {temperature}°C
      </span>
      <div className={styles.location}>
        <span data-js-header-city>{city}</span>
        <span data-js-header-today>{today}</span>
      </div>
    </>
  )
}

export default InfoToday