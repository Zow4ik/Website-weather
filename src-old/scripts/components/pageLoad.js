export default class PageLoad {
  constructor(store, urlManage) {
    this.store = store
    this.urlManage = urlManage
    this.bindEvents()
  }

  async defaultSubmit() {
    const responseMeteo = await fetch(
      this.urlManage.getUrlMeteo(this.urlManage.getDefaultParams())
    )
    const responseMeteoJson = await responseMeteo.json()

    const responseAirMeteo = await fetch(
      this.urlManage.getUrlAirMeteo(this.urlManage.getDefaultParams())
    )
    const responseAirMeteoJson = await responseAirMeteo.json()

    const params = new URLSearchParams(
      this.urlManage.getDefaultParams()
    ).toString()

    this.urlManage.setUrlParams(params)

    this.store.setState({
      ...this.urlManage.getDefaultParams(),
      meteo: responseMeteoJson,
      airMeteo: responseAirMeteoJson,
    })
  }

  async pageLoaded() {
    const params = new URLSearchParams(window.location.search)
    const paramsStr = window.location.search.toString()

    const paramsObj = {
      city: params.get('city'),
      latitude: params.get('latitude'),
      longitude: params.get('longitude'),
    }

    if (!paramsObj.city || !paramsObj.latitude || !paramsObj.longitude) {
      await this.defaultSubmit()
      return
    }

    const responseMeteo = await fetch(
      this.urlManage.getUrlMeteo(paramsObj)
    )
    const responseMeteoJson = await responseMeteo.json()

    const responseAirMeteo = await fetch(
      this.urlManage.getUrlAirMeteo(paramsObj)
    )
    const responseAirMeteoJson = await responseAirMeteo.json()

    if (!paramsStr || responseMeteoJson.error || responseAirMeteoJson.error) {
      await this.defaultSubmit()
      return
    }

    this.urlManage.setUrlParams( new URLSearchParams(paramsObj).toString() )

    this.store.setState({
      meteo: responseMeteoJson,
      airMeteo: responseAirMeteoJson,
      ...paramsObj,
    })
  }


  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => this.pageLoaded())
  }
}