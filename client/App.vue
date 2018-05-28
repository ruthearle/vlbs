<template>
  <div>
    <h1 id="app-headline">Hello all</h1>
    <books></books>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  import Books from './Books.vue';

  export default {
    name: 'App',
    components: {
      books: Books
    },
    data: function () {
      return {}
    }
  }
</script>

<style type="text/css" media="screen">
</style>
