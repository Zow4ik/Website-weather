import Header from '@/components/Header/Header.jsx'
import Details from '@/components/Details/Details.jsx'
import { usePageLoad } from '@/hooks/usePageLoad.js'
import { Preloader } from '@/components/Preloader/Preloader.jsx'
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext.jsx'

const Wrapper = () => {
  const {
    loadedPage,
  } = useContext(WeatherContext)

  usePageLoad()

  if (loadedPage) {
    return (
      <main className="wrapper">
        <Header />
        <Details />
      </main>
    )
  }

  return (
    <Preloader />
  )
}

export default Wrapper