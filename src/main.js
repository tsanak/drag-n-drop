import Vue from 'vue'
import App from './App'
import Vddl from 'vddl';

Vue.config.productionTip = false
Vue.use(Vddl);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
