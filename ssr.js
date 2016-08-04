const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

const Cmp = Vue.component('my-cmp', {
  template: `<p>this is a component</p>`,
});

const App = Vue.component('my-app', {
  components: {
    Cmp,
  },
  template: `
    <div class="server-uptime">
      <h1>{{name}}</h1>
      <h2>age {{age}}</h2>
      <my-cmp></my-cmp>
    </div>
  `
});

const vm = new App({
  data: {
    name: 'Hans',
    age: 18,
  }
})

renderer.renderToString(vm, (err, html) => {
  if (err){
    console.error(err.message);
    console.error(err.stack);
  }
  console.log(html);
});
