#### 介绍
基于vue3.0的天地图组件

#### 软件架构
软件架构说明


#### 安装教程

```javascript
npm i --save vue-tiandi-map-3x
```

#### 初始化

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import TiandiMap from 'vue-tiandi-map-3x'

const app = createApp(App)
app.use(TiandiMap,{
  // ak 是在天地图开发者平台申请的密钥
  ak: 'YOUR_APP_KEY'
})
app.mount('#app')
```

### 使用说明

```vue
<template>
  <tiandi-map class="map">
  </tiandi-map>
</template>

<style>
/* The container of tiandiMap must be set width & height. */
.map {
  width: 100%;
  height: 500px;
}
</style>
```
## 文档

[Contributing Guide](https://gitee.com/liyuanboy/vue-tiandi-map/tree/master)