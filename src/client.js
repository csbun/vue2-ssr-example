// client-entry
import Vue from 'vue';
import App from './App.vue';

const VueApp = Vue.extend(App);
const app = new VueApp({
  el: '.my-app',
});
