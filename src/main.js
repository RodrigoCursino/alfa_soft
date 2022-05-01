import Vue            from 'vue'
import App            from './App.vue'
import router         from './router'
import TheMask        from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuelidate      from 'vuelidate'

import 'sweetalert2/dist/sweetalert2.min.css'
import '@/assets/styles/scss/_main.scss'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(TheMask)
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
