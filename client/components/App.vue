<template>
  <div>
    <h1 id="app-headline">Very Limited Book Store (VLBS)</h1>
    <div>
      <filter-results></filter-results/>
    </div>
    <div id="books">
      <books></books>
    </div>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  import BooksComponent from './Books.vue';
  import FilterComponent from './Filter.vue';

  export default {
    name: 'App',
    components: {
      'filter-results': FilterComponent,
      books: BooksComponent
    },
    data: function () {
      return {}
    }
  }
</script>

<style type="text/css" media="screen">
</style>
