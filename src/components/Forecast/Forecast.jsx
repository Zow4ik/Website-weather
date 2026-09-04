import styles from './Forecast.module.scss'
import CardForecast from '@/components/CardForecast/CardForecast.jsx'
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'

const Forecast = () => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  const dataForecast = []

  if (infoWeather.meteo?.daily) {

    for (let i = 0; i < 7; i++) {
      dataForecast.push({
        day: new Date(infoWeather.meteo.daily.time[i]).toLocaleDateString('en-US', { weekday: 'short' }),
        temperature: Math.floor(infoWeather.meteo.daily.temperature_2m_max[i]),
      })
    }
  }

  return (
    <div>
      <h2 className={styles.title}>Week</h2>
      <ul data-js-block-forecast className={styles.cards}>
        {dataForecast.map((item) => (
          <CardForecast
            day={item.day}
            temperature={item.temperature}
            key={item.day}
          />
        ))}
      </ul>
    </div>
  )
}

export default Forecast