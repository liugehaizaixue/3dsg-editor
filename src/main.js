import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";

// main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// import 'highlight.js/styles/atom-one-dark.css'
import "highlight.js/styles/atom-one-dark-reasonable.css";
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

   
const app = createApp(App)


app.use(hljsVuePlugin)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).mount('#app')