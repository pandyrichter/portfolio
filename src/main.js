import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import Home from './Home.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Project from './Project.vue'

Vue.use(VueRouter)
Vue.use(VueScrollTo)

export const eventBus = new Vue()

const routes = [
  { path: '/', component: Home, name: 'Home'},
  { path: '/resume', component: Resume, name: 'Resume' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '*', component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
