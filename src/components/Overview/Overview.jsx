import styles from './Overview.module.scss'

const Overview = () => {
  return (
    <div>
      <h2 className={styles.title}>Today’s Overview</h2>
      <ul className={styles.cards}>
        <li className="weather-details__overview-card card">
          <h3 className="weather-details__overview-title">Air Quality Index</h3>
          <span
            className="weather-details__overview-num"
            data-js-air-index
          ></span>
          <div className="weather-details__overview-state">
            <span data-js-air-state></span>
            <img
              src="/public/images/air.webp"
              alt=""
              width="70"
              height="70"
              loading="lazy"
            />
          </div>
        </li>
        <li className="weather-details__overview-card card">
          <h3 className="weather-details__overview-title">UV Index</h3>
          <span
            className="weather-details__overview-num"
            data-js-uv-index
          ></span>
          <div className="weather-details__overview-state">
            <span data-js-uv-state></span>
            <img
              src="/public/images/uv.webp"
              alt=""
              width="70"
              height="70"
              loading="lazy"
            />
          </div>
        </li>
        <li className="weather-details__overview-card card">
          <h3 className="weather-details__overview-title">Pressure (hpa)</h3>
          <span
            className="weather-details__overview-num"
            data-js-hpa-index
          ></span>
          <div className="weather-details__overview-state">
            <span data-js-hpa-state></span>
            <img
              src="/public/images/hpa.webp"
              alt=""
              width="70"
              height="70"
              loading="lazy"
            />
          </div>
        </li>
        <li className="weather-details__overview-card card card--big">
          <h3 className="weather-details__overview-title">Precipitation</h3>
          <canvas data-js-precipitation></canvas>
        </li>
        <li className="weather-details__overview-card card">
          <h3 className="weather-details__overview-title">Sunrise & Sunset</h3>
          <div className="weather-details__overview-sunrise">
            <img
              src="/public/images/sunrise.svg"
              alt=""
              width="48"
              height="48"
              loading="lazy"
            />
            <div className="weather-details__overview-content">
              <span className="weather-details__overview-sun">Sunrise</span>
              <span
                className="weather-details__overview-time"
                data-js-sunrise
              ></span>
            </div>
          </div>
          <div className="weather-details__overview-sunset">
            <img
              src="/public/images/sunset.svg"
              alt=""
              width="48"
              height="48"
              loading="lazy"
            />
            <div className="weather-details__overview-content">
              <span className="weather-details__overview-sun">Sunset</span>
              <span
                className="weather-details__overview-time"
                data-js-sunset
              ></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Overview