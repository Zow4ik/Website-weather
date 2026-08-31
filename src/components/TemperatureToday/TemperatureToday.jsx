import styles from './temperatureToday.module.scss'

const TemperatureToday = () => {
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
        ></span>
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
        ></span>
      </div>
    </div>
  )
}

export default TemperatureToday