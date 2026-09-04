const getAirQualityStatus = (index) => {
  switch (true) {
    case index <= 50:
      return 'good'
    case index <= 100:
      return 'normal'
    case index > 100:
      return 'moderate'
  }
}

const getUvIndexStatus = (index) => {
  switch (true) {
    case index <= 3:
      return 'good'
    case index <= 5:
      return 'normal'
    case index > 5:
      return 'moderate'
  }
}

const getHpaState = (index) => {
  switch (true) {
    case index >= 1010 && index <= 1020:
      return 'good'
    case index >= 980 && index <= 1030:
      return 'normal'
    case index < 980 || index > 1030:
      return 'moderate'
  }
}

export { getAirQualityStatus, getUvIndexStatus, getHpaState }