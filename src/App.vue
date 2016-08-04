<template>
  <div class="my-app">
    <h1>{{name}}</h1>
    <h2>age: {{age}} <button @click="plus">+1</button></h2>
    <my-cmp :name="name"></my-cmp>
  </div>
</template>

<script>
import MyCmp from './MyCmp.vue';

export default {
  components: {
    MyCmp,
  },
  data() {
    return {
      name: 'Hans',
      age: 0,
    }
  },
  created() {
    console.log('created > ' + this.age);
    ++this.age;
  },
  methods: {
    plus() {
      this.age++;
    },
  },
};
</script>

<style>
.my-app {
  background: #eee;
  padding: 10px;
}
</style>
