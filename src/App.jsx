import Wrapper from '@/components/Wrapper/Wrapper.jsx'
import { WeatherProvider } from '@/context/WeatherContext.jsx'

function App() {
  return (
    <WeatherProvider>
      <Wrapper />
    </WeatherProvider>
  )
}

export default App
