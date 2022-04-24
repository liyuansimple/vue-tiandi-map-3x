import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'

import TiandiMap from '../components/index.js'

const app = createApp(App)
app.use(TiandiMap,{
  ak: '12bc70e7e8d603fe4253fd0b69e21744'
})
app.mount('#app')

