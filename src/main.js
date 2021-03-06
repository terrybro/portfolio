import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import Routes from './routes'
import Header from './components/HeaderBar'
import Magazines from './components/Magazines'
import Magazine from './components/Magazine'
import Profile from './components/Profile'
import Contact from './components/Contact'

const Routes = [
  { path: '/', name: 'home', component: Magazines },
  { path: '/magazine/:mag', name: 'magazine', component: Magazine },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/contact', name: 'contact', component: Contact }
]


Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router,
  render: h => h(App)
})
