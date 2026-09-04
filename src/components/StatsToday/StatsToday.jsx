import styles from './StatsToday.module.scss'
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'

const StatsToday = () => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  let speedWind
  let humidity

  if (infoWeather.meteo?.current) {
    humidity = infoWeather.meteo?.current.relative_humidity_2m
    speedWind = infoWeather.meteo?.current.wind_speed_10m
  }

  return (
    <div className={`${styles.stats} card`}>
      <div className={styles.stat}>
        <img
          src="/Website-weather/images/water.svg"
          alt=""
          width="47"
          height="47"
          loading="lazy"
        />
        <div className={styles.info}>
            <span
              className={styles.indicator}
              data-js-header-humidity
            >{humidity}%</span>
          <span className={styles.text}>Humidity</span>
        </div>
      </div>
      <div className={styles.stat}>
        <img
          src="/Website-weather/images/wind.svg"
          alt=""
          width="47"
          height="47"
          loading="lazy"
        />
        <div className={styles.info}>
            <span
              className={styles.indicator}
              data-js-header-wind
            >{speedWind }km/h</span>
          <span className={styles.text}>Wind Speed</span>
        </div>
      </div>
    </div>
  )
}

export default StatsToday