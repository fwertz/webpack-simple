require( 'app/assets/styles/index.scss' );

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueLocalStorage from 'vue-localstorage';
import VeeValidate from 'vee-validate';

import Vue from 'vue'
import App from './App.vue'


import defaultStore from './store';
import {routes} from './routes';
import veeConfig from 'app/helpers/veeConfig';

Vue.use( VueRouter );
Vue.use( Vuex );
Vue.use( VeeValidate, veeConfig );
Vue.use( VueLocalStorage, {
  name: 'ls'
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

const store = new Vuex.Store( defaultStore );

new Vue({
  el: '#app',
  render: h => h( App ),
  router,
  store
})
