<template>
  <div>
    <ul id="v-for-books">
      <li v-for="book in books" :key="book.id">
        Title: {{book.title}}
        Author/s: {{book.author}}
        <img v-bind:src="book.imageUrl"></image>
        OLID: {{book.id}}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  import axios from 'axios';
  import { eventBus } from '../main';

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
    },
    updated: function() {
      eventBus.$on('dataUpdated', (data) => {
        this.books = data;
      });
    }
  }
</script>

<style type="text/css" media="screen">
</style>
