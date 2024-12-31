import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式文件
import router from './router/index.js'


// 引入 TDesign Vue 组件库和样式
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)

app.use(ElementPlus) // 使用element plus组件库
app.use(router)  // 挂路由
app.use(TDesign)

app.mount('#app')

