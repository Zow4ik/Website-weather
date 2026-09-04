import styles from './Search.module.scss'
import { useContext, useEffect } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'
import { openMeteoApi } from '@/api/openMeteoApi.js'
import { airOpenMeteoApi } from '@/api/airOpenMeteoApi.js'

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
    const {
      name,
      latitude,
      longitude,
    } = cityInfo

    const responseMeteo = await openMeteoApi.getFullData({name, latitude, longitude})
    const responseAirMeteo = await airOpenMeteoApi.getFullData({latitude, longitude})

    setInfoWeather({
      meteo: responseMeteo,
      air: responseAirMeteo,
      city: name,
    })

    const params = {
      city: name,
      latitude: latitude,
      longitude: longitude,
    }

    window.history.replaceState(null, '', '?' + new URLSearchParams(params))

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