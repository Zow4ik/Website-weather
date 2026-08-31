import styles from './CardOverview.module.scss'

const CardOverview = (props) => {
  const {
    title,
    srcImage,
    isSun = false,
  } = props

  if (isSun) {
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
            >10:00</span>
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
            >10:00</span>
          </div>
        </div>
      </li>
    )
  }

  return (
    <li className={`${styles.card} card`}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.num}>50</span>
      <div className={styles.state}>
        <span>normal</span>
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