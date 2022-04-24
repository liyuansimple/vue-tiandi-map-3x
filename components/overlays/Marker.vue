
<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import {createIcon, createLngLat} from '../base/factory.js'
import { inject } from 'vue'
export default {
  name: 't-marker',
  props: {
    position: {},
    icon: {},
    opacity: {
      type: Number,
      default: 1
    },
    dragging: {
      type: Boolean,
      default: false
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
      const {T, originInstance, position, renderByParent, $parent} = this
      if (val !== oldVal && val >= -180 && val <= 180 && T) {
        originInstance.setLngLat(createLngLat(T, {lng: val, lat: position.lat}))
      }
      renderByParent && $parent.reload()
    },
    'position.lat' (val, oldVal) {
      const {T, originInstance, position} = this
      if (val !== oldVal && val >= -74 && val <= 74  && T) {
        originInstance.setLngLat(createLngLat(T, {lng: position.lng, lat: val}))
      }
    },
    icon: {
      deep: true,
      handler (val) {
        const {T, originInstance} = this
        originInstance && originInstance.setIcon(createIcon(T, val))
      }
    },
    dragging (val) {
      val ? this.originInstance.enableDragging() : this.originInstance.disableDragging()
    },
    zIndex (val) {
      this.originInstance.setZIndexOffset(val)
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
      this && this.T && this.$nextTick(() => {
        this.unload()
        this.$nextTick(this.load)
      })
    },
    load () {
      const {T, map, position, icon, dragging, zIndexOffset, opacity, title, $parent} = this
      const overlay = new T.Marker(new T.LngLat(position.lng, position.lat), {
        icon: icon && Object.keys(icon).length && createIcon(T, icon),
        draggable: dragging,
        zIndexOffset,
        opacity,
        title
      })
      this.originInstance = overlay
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