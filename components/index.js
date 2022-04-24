import TiandiMap from './map/Map.vue'
import TMarker from './overlays/Marker.vue'

export default {
  install(app, options) {
    const { ak } = options
    app.config.globalProperties._TMap = () => ({ ak })
    app.component('tiandi-map', TiandiMap)
    app.component('t-marker', TMarker)
  }
}

export {
  TiandiMap,
  TMarker
}