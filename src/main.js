import Vue from 'vue'
import App from './App.vue'


import Vant from 'vant';
import 'vant/lib/index.css';

import store from  './store'
Vue.use(Vant);

import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
