import TiandiMap from './map/Map.vue'
import TMarker from './overlays/Marker.vue'
import TLabel from './overlays/Label.vue'
import TZoom from './controls/zoom.vue'
export default {
  install(app, options) {
    const { ak } = options
    app.config.globalProperties._TMap = () => ({ ak })
    app.component('tiandi-map', TiandiMap)
    // overlays
    app.component('t-marker', TMarker)
    app.component('t-label', TLabel)
    // controls
    app.component('t-zoom', TZoom)
  }
}

export {
  TiandiMap,
  TMarker,TLabel,
  TZoom
}