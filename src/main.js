import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  mode : 'history' //hash: default
});

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods : {
    sendToData(menuData){
      this.$emit("pageData", menuData);
    }
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
