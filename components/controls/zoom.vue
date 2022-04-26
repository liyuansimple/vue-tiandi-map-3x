<script>
import { inject } from 'vue'
export default {
  name: 't-zoom',
  props: {
    position: {
      type: String,
      default: 'T_ANCHOR_TOP_RIGHT'
    },
    zoomInText: {
      type: String,
      default: '+'
    },
    zoomOutText: {
      type: String,
      default: '-'
    },
    zoomInTitle: {
      type: String,
      default: '放大'
    },
    zoomOutTitle: {
      type: String,
      default: '缩小'
    },
  },
  watch: {
    map(val) {
      val && this.reload()
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
      const {T, map, position, zoomInText, zoomOutText, zoomInTitle, zoomOutTitle } = this
      this.originInstance = new T.Control.Zoom({
        position: window[position],
        zoomInText,
        zoomOutText,
        zoomInTitle,
        zoomOutTitle
      })
      // 
      map.addControl(this.originInstance)
    },
    unload() {
      const { map, originInstance } = this
      try {
        map.removeControl(originInstance)
      } catch (e) { }
    }
  }
}
</script>