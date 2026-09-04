import styles from './CardForecast.module.scss'
import { useUrlImage } from '@/hooks/useUrlImage.js'

const CardForecast = (props) => {
  const {
    day,
    temperature,
    dayNumber,
  } = props

  const urlImage = useUrlImage(dayNumber)

  return (
    <li className={`${styles.item} card`}>
      <span className={styles.text}>{day}</span>
      <img
        src={urlImage}
        alt=""
        width="70"
        height="70"
        loading="lazy"
      />
      <span>{temperature}°C</span>
    </li>
  )
}

export default CardForecast