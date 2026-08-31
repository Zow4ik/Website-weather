import CurrentDay from '@/components/CurrentDay/CurrentDay.jsx'
import styles from './Header.module.scss'
import Search from '@/components/Search/Search.jsx'

const Header = () => {
  return (
    <section className={styles.header}>
      <Search />
      <CurrentDay />
    </section>
  )
}

export default Header