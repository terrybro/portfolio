import Vue from 'vue'
import Router from 'vue-router'
import Profile from './components/Profile'
import Carousel from './components/Carousel'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
  routes: [{ path: '/', name: 'home', component: Carousel },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/contact', name: 'contact', component: Contact }]
})
