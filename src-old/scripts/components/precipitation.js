export default class Precipitation {
  elements = {}

  chart = null

  constructor(store, Chart) {
    this.store = store
    this.Chart = Chart
    this.bindEvents()
    this.getElements()
    this.createChart()
  }

  updateDate() {
    const { hourly } = this.store.state.meteo

    const precipitationPerHour = hourly.precipitation_probability
    this.chart.data.datasets[0].data = [...precipitationPerHour]

    this.chart.data.labels = [...hourly.time].map((item) => {
      return new Date(item).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    })

    this.chart.update()
  }

  createChart() {
    const ctx = this.elements.chart.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0.0933, 'rgba(106, 105, 105, 0.4)');
    gradient.addColorStop(0.728, 'rgba(106, 105, 105, 0.03)');

    this.chart = new this.Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: gradient,
          borderColor: 'rgba(149,148,148,0.5)',
          pointRadius: 0,
          tension: 0.3,
          fill: true,
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
    });
  }

  bindEvents() {
    document.addEventListener('updateDateState', () => this.updateDate())
  }

  getElements() {
    this.elements.chart = document.querySelector('[data-js-precipitation]')
  }
}