<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import { createLngLat, createPoint } from '../base/factory.js'
import { inject } from 'vue'
export default {
  name: 't-label',
  props: {
    position: {
      type: Object
    },
    text: {
      type: String
    },
    title: {
      type: String
    },
    offset: {
      type: Object,
      default: () => ({x:0, y:0})
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const T = inject('T')
    const map = inject('map')
    return {
      T,
      map
    }
  },
  watch: {
    'position.lng' (val, oldVal) {
      const {T, originInstance, position} = this
      if (val !== oldVal && val >= -180 && val <= 180 && T) {
        originInstance.setLngLat(createLngLat(T, {lng: val, lat: position.lat}))
      }
    },
    'position.lat' (val, oldVal) {
      const {T, originInstance, position} = this
      if (val !== oldVal && val >= -74 && val <= 74  && T) {
        originInstance.setLngLat(createLngLat(T, {lng: position.lng, lat: val}))
      }
    },
    offset(val) {
      const {T, originInstance} = this
      if (val && T) {
        originInstance.setOffset(createPoint(T, val))
      }
    },
    zIndex (val) {
      this.originInstance.setZindex(val)
    },
    title(val) {
      const {T, originInstance} = this
      T && originInstance.setTitle(val)
    },
    map(val) {
      val && this.reload()
    }
  },
  unmounted(){
    this.unload()
  },
  methods: {
    reload() {
      this && this.map && this.$nextTick(() => {
        this.unload()
        this.$nextTick(this.load)
      })
    },
    load () {
      const {T, map, position, offset, text, title } = this
      const overlay = new T.Label({
        text,
        position: new T.LngLat(position.lng, position.lat),
        offset: createPoint(T,offset)
      })
      // title
      title && overlay.setTitle(title)
      // originInstance
      this.originInstance = overlay
      // 
      map.addOverLay(overlay)
    },
    unload() {
      const { map, originInstance } = this
      try {
        map.removeOverLay(originInstance)
      } catch (e) { }
    }
  }
}
</script>