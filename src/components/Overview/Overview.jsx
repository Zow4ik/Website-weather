import styles from './Overview.module.scss'
import CardOverview from '@/components/CardOverview/CardOverview.jsx'

const Overview = () => {
  return (
    <div>
      <h2 className={styles.title}>Today’s Overview</h2>
      <ul className={styles.cards}>
        <CardOverview
          title='Air Quality Index'
          srcImage='@/assets/images/air.webp'
        />
        <CardOverview
          title='UV Index'
          srcImage='@/assets/images/uv.webp'
        />
        <CardOverview
          title='Pressure (hpa)'
          srcImage='@/assets/images/hpa.webp'
        />
        <li className="weather-details__overview-card card card--big">
          <h3 className="weather-details__overview-title">Precipitation</h3>
          <canvas data-js-precipitation></canvas>
        </li>
        <CardOverview
          isSun={true}
        />
      </ul>
    </div>
  )
}

export default Overview