import styles from './CardOverview.module.scss'
import {useContext} from 'react'
import {WeatherContext} from '@/context/WeatherContext.jsx'
import { getAirQualityStatus, getHpaState, getUvIndexStatus } from '@/utils/checkIndexWeather.js'

const CardOverview = (props) => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  const {
    title,
    srcImage,
    type,
  } = props

  if (type === 'sun') {
    let sunrise
    let sunset

    if (infoWeather.meteo?.daily) {
      sunrise = new Date(infoWeather.meteo.daily.sunrise[0])
        .toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })

      sunset = new Date(infoWeather.meteo.daily.sunset[0])
        .toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
    }

    return (
      <li className={`${styles.card} card`}>
        <h3 className={styles.title}>Sunrise & Sunset</h3>
        <div className={styles.sunrise}>
          <img
            src="/public/images/sunrise.svg"
            alt=""
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={styles.content}>
            <span className={styles.sun}>Sunrise</span>
            <span
              className={styles.time}
              data-js-sunrise
            >{sunrise}</span>
          </div>
        </div>
        <div className={styles.sunset}>
          <img
            src="/public/images/sunset.svg"
            alt=""
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={styles.content}>
            <span className={styles.sun}>Sunset</span>
            <span
              className={styles.time}
              data-js-sunset
            >{sunset}</span>
          </div>
        </div>
      </li>
    )
  }

  let stateCard
  let valueCard

  if (type === 'air' && infoWeather.air?.current) {
    valueCard = infoWeather.air.current.european_aqi
    stateCard = getAirQualityStatus(valueCard)
  }

  if (type === 'uv' && infoWeather.meteo?.current) {
    valueCard = infoWeather.meteo.current.uv_index
    stateCard = getUvIndexStatus(valueCard)
  }

  if (type === 'hpa' && infoWeather.meteo?.current) {
    valueCard = infoWeather.meteo.current.pressure_msl
    stateCard = getHpaState(valueCard)
  }

  return (
    <li className={`${styles.card} card`}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.num}>{valueCard}</span>
      <div className={styles.state}>
        <span className={`state--${stateCard}`}>{stateCard}</span>
        <img
          src={srcImage}
          alt=""
          width="70"
          height="70"
          loading="lazy"
        />
      </div>
    </li>
  )
}

export default CardOverview