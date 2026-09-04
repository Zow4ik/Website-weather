import styles from './CardForecast.module.scss'

const CardForecast = (props) => {
  const {
    day,
    temperature,
  } = props

  return (
    <li className={`${styles.item} card`}>
      <span className={styles.text}>{day}</span>
      <img
        // src=""
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