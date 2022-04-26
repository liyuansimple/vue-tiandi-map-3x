<template>
  <tiandi-map :zoom="18" :center="loca" @ready="mapReady">
    <t-marker :position="loca" />
    <t-label text="test3" :offset="{x: 10, y: 30}" :position="loca" />
    <t-zoom />
  </tiandi-map>
</template>
<script>
export default {
  data() {
    return{
      loca: {lng: 113.72891, lat: 34.77358}
    }
  },
  methods: {
    mapReady({map, T}){
      // 
      // const locationPointer =  {lng: 113.72891, lat: 34.77358}
      // 设置中心点坐标
      // map.centerAndZoom(new T.LngLat(locationPointer.lng, locationPointer.lat), 18)
    }
  }
}
</script>
<style>
	div{color:red;}
</style>

