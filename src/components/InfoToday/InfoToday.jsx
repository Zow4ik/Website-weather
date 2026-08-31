import styles from './InfoToday.module.scss'

const InfoToday = () => {
  return (
    <>
      <img
        alt=""
        // src=""
        width="316"
        height="316"
        loading="lazy"
        data-js-header-image-weather
      />
      <span
        className={styles.temperature}
        data-js-header-temperature>
      </span>
      <div className={styles.location}>
        <span data-js-header-city></span>
        <span data-js-header-today></span>
      </div>
    </>
  )
}

export default InfoToday