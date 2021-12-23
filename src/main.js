import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
// vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// main.js
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Chart
import VueApexCharts from 'vue-apexcharts'
// vue session
import VueSession from 'vue-session'


Vue.use(VueSession)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2);

require("./assets/css/main.css");

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
