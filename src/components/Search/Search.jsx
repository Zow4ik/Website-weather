import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <button
        className={styles.button}
        type="button"
      ></button>
      <input
        className={styles.input}
        type="search"
        placeholder="Search city..."
      />
      <div className={styles.extradition}>
      </div>
    </div>
  )
}

export default Search