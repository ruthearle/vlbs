<template>
  <div id="books">
    <ul id="library" v-if="books">
      <li v-for="book in books" :key="book.id">
        <img v-bind:src="book.imageUrl"></image>
        OLID: {{book.id}}
        Title: {{book.title}}
        Author/s: {{book.authors}}
      </li>
    </ul>
    <p v-else>
      {{error}}
    </p>
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
        .then((res) => this.books = res.data,
          (err) => this.error = 'Error fetching books');
    }
  }
</script>

<style type="text/css" media="screen">
</style>
