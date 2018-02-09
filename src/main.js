import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Resume from './Resume.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App},
  { path: '/resume', component: Resume, name: 'Resume' }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
