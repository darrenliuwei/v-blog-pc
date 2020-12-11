import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import moment from 'moment'
import { TabPane, Tabs, Tag, Image, Message, MessageBox, Pagination, Button, Card, Footer, Main, Header } from 'element-ui'

Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Image)
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Card)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Header)

marked.setOptions({
  renderer: marked.Renderer(),
  gfm: true,
  pedantic: false,
  tables: true,
  breaks: true,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  }
})
moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.prototype.$marked = marked
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
