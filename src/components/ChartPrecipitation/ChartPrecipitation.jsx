import styles from './ChartPrecipitation.module.scss'
import {useContext, useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import {WeatherContext} from '@/context/WeatherContext.jsx'

const ChartPrecipitation = () => {
  const {
    infoWeather,
  } = useContext(WeatherContext)

  const configChart = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Precipitation',
        data: [30, 45, 1, 40, 70, 55],
        borderColor: 'rgba(149,148,148,0.5)',
        pointRadius: 0,
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(149,148,148,0.2)', // Добавил цвет для заливки
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false
          },
        },
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: v => v + '%',
          },
          grid: {
            color: 'rgba(106, 105, 105, 0.5)',
          },
          border: {
            display: false,
          },
        },
      },
    },
  }
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    chartRef.current = new Chart(canvasRef.current, configChart)

    return () => chartRef.current.destroy()
  }, []);

  useEffect(() => {
    if (!chartRef.current) return
    if (!infoWeather.meteo?.hourly.precipitation_probability) return

    const precipitationPerHour = infoWeather.meteo.hourly.precipitation_probability

    chartRef.current.data.datasets[0].data = [...precipitationPerHour]
    chartRef.current.data.labels = [...infoWeather.meteo.hourly.time].map((item) => {
      return new Date(item).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    })

    chartRef.current.update()
  }, [infoWeather.meteo?.hourly]);

  return (
    <li className={`${styles.card} card card--big`}>
      <h3 className={styles.title}>Precipitation</h3>
      <canvas ref={canvasRef} data-js-precipitation></canvas>
    </li>
  )
}

export default ChartPrecipitation