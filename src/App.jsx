import { useState } from 'react'
import Search from '@/components/Search/Search.jsx'
import CurrentDay from '@/components/CurrentDay/CurrentDay.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <CurrentDay />
    </>
  )
}

export default App
