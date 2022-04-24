<template>
<div style="width: 100%; height: 100%">
  <div ref="view" style="width: 100%; height: 100%"></div>
  <slot></slot>
</div>
</template>

<script>
import { provide, ref } from "vue"
import {checkType} from '../base/util.js'

export default {
  name: 'tiandi-map',
  props: {
    // ak
    ak: {
      type: String
    },
    // 地图允许展示的最小级别
    minZoom: {
      type: Number
    },
    // 地图允许展示的最大级别
    maxZoom: {
      type: Number
    },
    // 地图被限制在给定的地理边界内
    maxBounds: {
      type: Object
    },
    // 地图的初始化中心点
    center: {
      type: Object,
      default: () => ({lng: 116.41239, lat: 39.97569 })
    },
    // 地图的初始化级别
    zoom: {
      type: Number,
      default: 18
    }
  },
  watch: {
    center (val, oldVal) {
      const {map, zoom} = this
      if (checkType(val) === 'String' && val !== oldVal) {
        map.centerAndZoom(new T.LngLat(val.lng, val.lat), zoom)
      }
    },
    'center.lng' (val, oldVal) {
      const {T, map, zoom, center} = this
      if (val !== oldVal && val >= -180 && val <= 180) {
        map.centerAndZoom(new T.LngLat(val, center.lat), zoom)
      }
    },
    'center.lat' (val, oldVal) {
      const {T, map, zoom, center} = this
      if (val !== oldVal && val >= -74 && val <= 74) {
        map.centerAndZoom(new T.LngLat(center.lng, val), zoom)
      }
    },
    zoom (val, oldVal) {
      const {map} = this
      if (val !== oldVal && val >= 3 && val <= 19) {
        map.setZoom(val)
      }
    },
    minZoom (val) {
      const {map} = this
      map.setMinZoom(val)
    },
    maxZoom (val) {
      const {map} = this
      map.setMaxZoom(val)
    }
  },
  setup() {
    let T = ref()
    let map = ref()
    provide("T",T)
    provide("map",map)
    return {
      T,
      map
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    /**
     * @Descripttion: 设置options
     * @param {*}
     * @return {*}
     */    
    setMapOptions () {
      const {map, minZoom, maxZoom} = this
      minZoom && map.setMinZoom(minZoom)
      maxZoom && map.setMaxZoom(maxZoom)
    },

    /**
     * @Descripttion: 初始化
     * @param {*} TMap
     * @return {*}
     */    
    init (T) {
      let $el = this.$refs.view
      // el
      const map = new T.Map($el)
      // map
      this.map = map
      // 
      const {setMapOptions, zoom, getCenterPoint} = this
      // 设置options
      setMapOptions()
      // 设置中心
      map.centerAndZoom(getCenterPoint(), zoom)
      // 设置ready
      this.$emit('ready', {map, T})
    },

    /**
     * @Descripttion: 获取地图中心点
     * @param {*}
     * @return {*}
     */    
    getCenterPoint () {
      const {center} = this
      switch (checkType(center)) {
        case 'String': return center
        case 'Object': return new T.LngLat(center.lng, center.lat)
        default: return new T.LngLat(116.40769, 39.89945)
      }
    },

    /**
     * @Descripttion: 加载script
     * @param {*}
     * @return {*}
     */    
    getMapScript () {
      if (!window.T) {
        const ak = this.ak || this._TMap().ak
        window.T = {}
        window.T._preloader = new Promise((resolve, reject) => {
          const $script = document.createElement('script')
          $script.type = 'text/javascript'
          $script.onload = () => {
            resolve(window.T)
          }
          window.document.body.appendChild($script)
          $script.src = `http://api.tianditu.gov.cn/api?v=4.0&tk=${ak}`
        })
        return window.T._preloader
      } else if (!window.T._preloader) {
        return Promise.resolve(window.T)
      } else {
        return window.T._preloader
      }
    },

    /**
     * @Descripttion: 初始地图
     * @param {*}
     * @return {*}
     */    
    initMap(t) {
      this.T = t
      this.init(t)
    },

    /**
     * @Descripttion: 重置
     * @param {*}
     * @return {*}
     */    
    reset () {
      const {getMapScript, initMap} = this
      getMapScript().then(initMap)
    }
  }
}
</script>

