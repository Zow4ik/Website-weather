import { useState } from 'react'
import Search from '@/components/Search/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>затычка</p>
      <Search />
    </>
  )
}

export default App
