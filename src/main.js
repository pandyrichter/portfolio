import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import Home from './Home.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Projects from './Projects.vue'

Vue.use(VueRouter)
Vue.use(VueScrollTo)

export const eventBus = new Vue()

const routes = [
  { path: '/', component: Home, name: 'Home',
    children: [
      {
        path: 'projects',
        component: Projects,
        name: 'Projects'
      }
    ]
  },
  { path: '/resume', component: Resume, name: 'Resume' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '*', component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
