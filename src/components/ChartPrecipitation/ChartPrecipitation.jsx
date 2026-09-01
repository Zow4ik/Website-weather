import styles from './ChartPrecipitation.module.scss'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const ChartPrecipitation = () => {
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

  useEffect(() => {
    const chart = new Chart(canvasRef.current, configChart)

    return () => chart.destroy()
  }, []);

  return (
    <li className={`${styles.card} card card--big`}>
      <h3 className={styles.title}>Precipitation</h3>
      <canvas ref={canvasRef} data-js-precipitation></canvas>
    </li>
  )
}

export default ChartPrecipitation