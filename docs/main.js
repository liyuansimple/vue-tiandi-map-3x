import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'

import TiandiMap from '../components/index.js'

const app = createApp(App)
app.use(TiandiMap,{
  ak: ''
})
app.mount('#app')

