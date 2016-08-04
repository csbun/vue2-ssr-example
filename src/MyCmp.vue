<template>
  <div>
    <p>Hello {{ name }}</p>
    <p>Welcome to China!</p>
  </div>
</template>

<script>
export default {
  props: [ 'name' ],
  replace: false,
};
</script>
