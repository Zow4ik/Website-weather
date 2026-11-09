const STATES = {
  good: 'good',
  normal: 'normal',
  moderate: 'moderate',
}

const getAirQualityStatus = (index) => {
  switch (true) {
    case index <= 50:
      return STATES.good
    case index <= 100:
      return STATES.normal
    case index > 100:
      return STATES.moderate
  }
}

const getUvIndexStatus = (index) => {
  switch (true) {
    case index <= 3:
      return STATES.good
    case index <= 5:
      return STATES.normal
    case index > 5:
      return STATES.moderate
  }
}

const getHpaState = (index) => {
  switch (true) {
    case index >= 1010 && index <= 1020:
      return STATES.good
    case index >= 980 && index <= 1030:
      return STATES.normal
    case index < 980 || index > 1030:
      return STATES.moderate
  }
}

export { getAirQualityStatus, getUvIndexStatus, getHpaState }