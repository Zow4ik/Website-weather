import styles from './TemperatureToday.module.scss'
import {useContext} from 'react'
import {WeatherContext} from '@/context/WeatherContext.jsx'

const TemperatureToday = () => {
  const {
    infoWeather
  } = useContext(WeatherContext)

  let minTemperature
  let maxTemperature

  if (infoWeather.meteo?.daily) {
    minTemperature = Math.floor(infoWeather.meteo.daily.temperature_2m_min[0])
    maxTemperature = Math.floor(infoWeather.meteo.daily.temperature_2m_max[0])
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          src="@/assets/images/temperature-min.svg"
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <span
          className={styles.temperature}
          data-js-header-min
        >Min Temperature - {minTemperature}°C</span>
      </div>
      <div className={styles.item}>
        <img
          src="@/assets/images/temperature-max.svg"
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <span
          className={styles.temperature}
          data-js-header-max
        >Max Temperature - {maxTemperature}°C</span>
      </div>
    </div>
  )
}

export default TemperatureToday