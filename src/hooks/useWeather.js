import { useState } from 'react'
import { openMeteoApi } from '@/api/openMeteoApi.js'

export const useWeather = () => {
  const [value, setValue] = useState('')
  const [isShowIssuing, setIsShowIssuing] = useState(false)
  const [issuingInfo, setIssuingInfo] = useState([])
  const [infoWeather, setInfoWeather] = useState({})

  const searchCities = async (value) => {
    if (!value.trim().length > 0) return

    const response = await openMeteoApi.getTitlesCities(value)

    if (!response.results) return
    issuing(response)
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