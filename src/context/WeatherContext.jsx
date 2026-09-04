import { createContext } from 'react'
import {useWeather} from '@/hooks/useWeather.js'

export const WeatherContext = createContext([])

export const WeatherProvider = (props) => {
  const {
    children,
  } = props

  const {
    value,
    setValue,
    isShowIssuing,
    issuingInfo,
    searchCities,
    setInfoWeather,
    infoWeather,
    setIsShowIssuing,
  } = useWeather()

  return (
    <WeatherContext.Provider
      value={{
        isShowIssuing,
        issuingInfo,
        setValue,
        searchCities,
        value,
        setInfoWeather,
        infoWeather,
        setIsShowIssuing,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}