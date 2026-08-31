import styles from './currentDay.module.scss'
import TemperatureToday from '@/components/TemperatureToday/TemperatureToday.jsx'
import StatsToday from '@/components/StatsToday/StatsToday.jsx'
import InfoToday from '@/components/InfoToday/InfoToday.jsx'

const CurrentDay = () => {
  return (
    <div className={styles.currentDay}>
      <InfoToday />
      <TemperatureToday />
      <StatsToday />
    </div>
  )
}

export default CurrentDay