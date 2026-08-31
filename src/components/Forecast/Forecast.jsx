import styles from './Forecast.module.scss'
import CardForecast from '@/components/CardForecast/CardForecast.jsx'

const Forecast = () => {
  const dataForecast = [
    { day: 'Tue', temperature: '24°C' },
    { day: 'Web', temperature: '23°C' },
    { day: 'Thu', temperature: '22°C' },
    { day: 'Fri', temperature: '21°C' },
    { day: 'Sat', temperature: '20°C' },
    { day: 'Sun', temperature: '19°C' },
    { day: 'Mon', temperature: '18°C' },
  ]

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