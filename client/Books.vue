<template>
  <div id="books">
    {{books}}
    {{error}}
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  import axios from 'axios';

  export default {
    name: 'Books',
    data() {
      return {
        books: [],
        error: ''
      }
    },
    mounted() {
      return axios.get('/api/books')
        .then((res) => this.books = res,
          (err) => this.error = err);
    }
  }
</script>

<style type="text/css" media="screen">
</style>
