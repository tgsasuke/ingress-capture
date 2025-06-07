import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入 FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 添加所有图标到库中
library.add(fas)

const app = createApp(App)

app.use(createPinia())

// 全局注册 FontAwesome 组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
