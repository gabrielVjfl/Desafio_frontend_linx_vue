import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'



import IndexPage from './pages/indexPage.vue'
import EmailPage from './pages/email.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
    path: '/',
    component: IndexPage
    }, {
      path: '/email',
      component: EmailPage
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
