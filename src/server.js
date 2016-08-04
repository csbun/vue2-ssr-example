// server-entry
import Vue from 'vue';
import App from './App.vue';
const app = new Vue(App);

// the default export should be a function
// which will receive the context of the render call
export default function(context) {
  return new Promise((resolve, reject) => {
    // app.fetchServerData(context);
    resolve(app);
  });
};
