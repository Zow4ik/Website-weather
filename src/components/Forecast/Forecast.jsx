import styles from './Forecast.module.scss'

const Forecast = () => {
  return (
    <div>
      <h2 className={styles.title}>Week</h2>
      <ul data-js-block-forecast className={styles.cards}>
        {/*<li className="weather-details__card card">*/}
        {/*  <span className="weather-details__card-day">день недели</span>*/}
        {/*  <img*/}
        {/*    src=""*/}
        {/*    alt=""*/}
        {/*    width="70"*/}
        {/*    height="70"*/}
        {/*    loading="lazy"*/}
        {/*  />*/}
        {/*  <span>Температура</span>*/}
        {/*</li>*/}
      </ul>
    </div>
  )
}

export default Forecast