import styles from './statsToday.module.scss'

const StatsToday = () => {
  return (
    <div className={`${styles.stats} card`}>
      <div className={styles.stat}>
        <img
          src="@/assets/images/water.svg"
          alt=""
          width="47"
          height="47"
          loading="lazy"
        />
        <div className={styles.info}>
            <span
              className={styles.indicator}
              data-js-header-humidity
            ></span>
          <span className={styles.text}>Humidity</span>
        </div>
      </div>
      <div className={styles.stat}>
        <img
          src="@/assets/images/wind.svg"
          alt=""
          width="47"
          height="47"
          loading="lazy"
        />
        <div className={styles.info}>
            <span
              className={styles.indicator}
              data-js-header-wind
            ></span>
          <span className={styles.text}>Wind Speed</span>
        </div>
      </div>
    </div>
  )
}

export default StatsToday