function errorApi(error, apiName) {
  console.log('ошибка - ', error)
  console.log(`не отвечает апишка ${apiName}`)
  alert(`Включите впн (api не отвечает без него), api - ${apiName}`)
}

export { errorApi }