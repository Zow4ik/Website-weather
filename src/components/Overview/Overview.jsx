import styles from './Overview.module.scss'
import CardOverview from '@/components/CardOverview/CardOverview.jsx'
import ChartPrecipitation from '@/components/ChartPrecipitation/ChartPrecipitation.jsx'

const Overview = () => {
  return (
    <div>
      <h2 className={styles.title}>Today’s Overview</h2>
      <ul className={styles.cards}>
        <CardOverview
          title='Air Quality Index'
          srcImage='/Website-weather/images/air.webp'
          type='air'
        />
        <CardOverview
          title='UV Index'
          srcImage='/Website-weather/images/uv.webp'
          type='uv'
        />
        <CardOverview
          title='Pressure (hpa)'
          srcImage='/Website-weather/images/hpa.webp'
          type='hpa'
        />
        <ChartPrecipitation />
        <CardOverview
          type='sun'
        />
      </ul>
    </div>
  )
}

export default Overview