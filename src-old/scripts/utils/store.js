export const store = {
  state: {},

  setState(date) {
    this.state = {...date}

    document.dispatchEvent( new CustomEvent('updateDateState', {
      detail: this.state
    }))
  }
}