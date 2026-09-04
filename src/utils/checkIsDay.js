const isDayTime = (sunrise, sunset) => {
  const now = new Date()
  const sunriseTime = new Date(sunrise)
  const sunsetTime = new Date(sunset)

  if (now >= sunriseTime && now <= sunsetTime) {
    return 'day'
  }
  return 'night'
}

export { isDayTime }