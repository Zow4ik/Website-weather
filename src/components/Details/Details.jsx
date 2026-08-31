import Forecast from '@/components/Forecast/Forecast.jsx'
import Overview from '@/components/Overview/Overview.jsx'

const Details = () => {
  return (
    <section className="weather-details">
      <Forecast />
      <Overview />
    </section>
  )
}

export default Details