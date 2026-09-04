import { useState } from 'react'

export const useWeather = () => {
  const [value, setValue] = useState('')
  const [isShowIssuing, setIsShowIssuing] = useState(false)
  const [issuingInfo, setIssuingInfo] = useState([])
  const [infoWeather, setInfoWeather] = useState({})

  const searchCities = async (value) => {
    if (!value.trim().length > 0) return

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?count=5&name=${value}`)
    const responseJson = await response.json()

    if (!responseJson.results) return
    issuing(responseJson)
  }

  const issuing = (cities) => {
    setIssuingInfo(cities.results)
    setIsShowIssuing(true)
  }

  return {
    value,
    setValue,
    isShowIssuing,
    issuingInfo,
    searchCities,
    setInfoWeather,
    infoWeather,
    setIsShowIssuing,
  }
}