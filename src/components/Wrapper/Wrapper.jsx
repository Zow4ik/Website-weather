import Header from '@/components/Header/Header.jsx'
import Details from '@/components/Details/Details.jsx'
import { usePageLoad } from '@/hooks/usePageLoad.js'

const Wrapper = () => {
  usePageLoad()

  return (
    <main className="wrapper">
      <Header />
      <Details />
    </main>
  )
}

export default Wrapper