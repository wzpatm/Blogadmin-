import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CommonFunction from '@/utils/index.js'
import App from './App.vue'
import '@/assets/reset.css'//引入基础样式表
import '@/assets/iconfont/iconfont.css'
import router from './router/index'//
import VueParticles from 'vue-particles'
import axios from 'axios'
//引入markdown编辑 vue主题
import VueMarkdownEditor from "@/plugins/markdown.js"

//引入Markdown html 解析模块
import VMdPreviewHtml from "@/plugins/markdownHtml.js"

//预览模板
import VMdPreview from "@/plugins/markdownPreview.js"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(VMdPreviewHtml);
app.use(VMdPreview);
app.use(VueMarkdownEditor);
 app.use(router)
 app.use(VueParticles)
 app.use(CommonFunction)
//  app.config.warnHandler = (msg, instance, trace) => {}
 app.mount('#app')
 app.provide('$axios',axios)
