import styles from './Search.module.scss'
import {useContext, useEffect} from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'

const Search = () => {
  const {
    isShowIssuing,
    issuingInfo,
    setValue,
    searchCities,
    value,
    setInfoWeather,
    setIsShowIssuing,
  } = useContext(WeatherContext)

  const onInput = (value) => {
    searchCities(value)
    setValue(value)
  }

  const handleClick = async (cityInfo) => {
    const urlOpenMeteo = `https://api.open-meteo.com/v1/forecast?` +
      `name=${cityInfo.name}` +
      `&latitude=${cityInfo.latitude}` +
      `&longitude=${cityInfo.longitude}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,pressure_msl` +
      `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weather_code` +
      `&timezone=Europe/Moscow&forecast_days=7` +
      `&hourly=precipitation_probability` +
      `&forecast_hours=8`

    const urlAirMeteo = `https://air-quality-api.open-meteo.com/v1/air-quality?` +
      `latitude=${cityInfo.latitude}` +
      `&longitude=${cityInfo.longitude}` +
      `&current=european_aqi`

    const responseMeteo = await fetch(urlOpenMeteo)
    const responseMeteoJson = await responseMeteo.json()

    const responseAir = await fetch(urlAirMeteo)
    const responseAirJson = await responseAir.json()

    setInfoWeather({
      meteo: responseMeteoJson,
      air: responseAirJson,
      city: cityInfo.name,
    })

    setIsShowIssuing(false)
    setValue('')
  }

  useEffect(() => {
    const handleClickOutSearch = (event) => {
      if (!event.target.closest(styles.searchContainer)) {
        setIsShowIssuing(false)
      }
    }

    document.addEventListener('click', (event) => handleClickOutSearch(event))

    return () => document.removeEventListener('click', handleClickOutSearch)
  }, []);

  return (
    <div className={styles.searchContainer}>
      <button
        className={styles.button}
        type="button"
      ></button>
      <input
        className={styles.input}
        type="search"
        placeholder="Search city..."
        value={value}
        onInput={(event) => onInput(event.target.value)}
      />
      {isShowIssuing && (
        <div className={styles.extradition}>
          {issuingInfo.map((city) => (
            <span
              onClick={() => handleClick(city)}
              key={`${city.latitude}_${city.longitude}`}
              className={styles.city}
              data-js-latitude={city.latitude}
              data-js-longitude={city.longitude}
            >
              {city.name} {city.country}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search