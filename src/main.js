import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import Switches from 'vue-switches'
import moment from 'moment'

Vue.use(moment)
Vue.use(require('vue-moment'))

Vue.use(VueSweetalert2)

Vue.use(Switches)

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
