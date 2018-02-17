import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Project from './Project.vue'

Vue.use(VueRouter)

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
