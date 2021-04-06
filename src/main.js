import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'

Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




Vue.directive('phone', {
  bind(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      x[1] = '+7'
      this.value = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '')
      return this.value
    }
  },
})