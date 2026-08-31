import styles from './CurrentDay.scss'

const CurrentDay = () => {
  return (
    <div className={styles.currentDay}>
      <img
        className="weather-header__select-image"
        alt=""
        src=""
        width="316"
        height="316"
        loading="lazy"
        data-js-header-image-weather
      />
      <span
        className="weather-header__select-temperature"
        data-js-header-temperature
      ></span>
      <div className="weather-header__select-location">
            <span
              className="weather-header__select-city"
              data-js-header-city
            ></span>
        <span
          className="weather-header__select-day"
          data-js-header-today
        ></span>
      </div>
      <div className="weather-header__select-details">
        <div className="weather-header__select-detail">
          <img
            src="/public/images/temperature-min.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
          />
          <span
            className="weather-header__select-min"
            data-js-header-min
          ></span>
        </div>
        <div className="weather-header__select-detail">
          <img
            src="/public/images/temperature-max.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
          />
          <span
            className="weather-header__select-min"
            data-js-header-max
          ></span>
        </div>
      </div>
      <div className="weather-header__select-stats card">
        <div className="weather-header__select-stat">
          <img
            className="weather-header__select-stat-image"
            src="/public/images/water.svg"
            alt=""
            width="47"
            height="47"
            loading="lazy"
          />
          <div className="weather-header__select-stat-info">
            <span
              className="weather-header__select-stat-indicator"
              data-js-header-humidity
            ></span>
            <span className="weather-header__select-stat-text">Humidity</span>
          </div>
        </div>
        <div className="weather-header__select-stat">
          <img
            className="weather-header__select-stat-image"
            src="/public/images/wind.svg"
            alt=""
            width="47"
            height="47"
            loading="lazy"
          />
          <div className="weather-header__select-stat-info">
            <span
              className="weather-header__select-stat-indicator"
              data-js-header-wind
            ></span>
            <span className="weather-header__select-stat-text">Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentDay