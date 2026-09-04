import { openMeteoApi } from '@/api/openMeteoApi.js'
import { airOpenMeteoApi } from '@/api/airOpenMeteoApi.js'
import { useContext, useEffect } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'

const usePageLoad = () => {
  const {
    setInfoWeather,
  } = useContext(WeatherContext)

  const defaultSubmit = async () => {
    const defaultParams = {
      name: 'Moscow',
      latitude: '55.75204',
      longitude: '37.61781',
    }

    const responseMeteo = await openMeteoApi.getFullData(defaultParams)
    const responseAirMeteo = await airOpenMeteoApi.getFullData(defaultParams)

    window.history.replaceState(null, '', '?' + new URLSearchParams(defaultParams).toString())

    setInfoWeather({
      meteo: responseMeteo,
      air: responseAirMeteo,
      city: defaultParams.name,
    })
  }

  const pageLoaded = async() => {
    const params = new URLSearchParams(window.location.search)
    const paramsStr = window.location.search.toString()
    const paramName = params.get('city')
    const paramLatitude = params.get('latitude')
    const paramLongitude = params.get('longitude')

    if (!paramName || !paramLatitude || !paramLongitude || !paramsStr) {
      defaultSubmit()
      return
    }

   const responseMeteo = await openMeteoApi.getFullData({
     name: paramName,
     latitude: paramLatitude,
     longitude: paramLongitude,
   })

   const responseAirMeteo = airOpenMeteoApi.getFullData({
     latitude: paramLatitude,
     longitude: paramLongitude,
   })

   if (responseMeteo.error || responseAirMeteo.error) {
     await defaultSubmit()
     return
   }

   setInfoWeather({
     meteo: responseMeteo,
     air: responseAirMeteo,
     city: paramName,
   })
  }

  useEffect(() => {
    pageLoaded()
  }, []);
}

export { usePageLoad }