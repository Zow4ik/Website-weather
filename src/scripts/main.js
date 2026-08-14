// import styles
import '@/styles/styles.scss'

// import libraries
import Chart from 'chart.js/auto'

// import utils
import { store } from './utils/store.js'
import { urlManage } from "./utils/urlManage.js"
import { weather } from './utils/weather.js'

// import components
import Search from './components/search.js'
import WeatherHeaderUpdater from "./components/weatherHeaderUpdater.js"
import ForecastUpdater from './components/forecastUpdater.js'
import OverviewUpdater from "./components/overviewUpdater.js"
import Precipitation from "./components/precipitation.js"
import PageLoad from './components/pageLoad.js'

// init components
new PageLoad(store, urlManage)
new Search(store, urlManage)
new WeatherHeaderUpdater(store, weather)
new ForecastUpdater(store, weather)
new OverviewUpdater(store)
new Precipitation(store, Chart)