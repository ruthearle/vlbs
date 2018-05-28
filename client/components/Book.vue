<template>
  <div>
    <h4>Title: {{title}}</h4>
    <h4>Author/s: {{author}}</h4>
    <img v-bind:src="imageUrl"></image>
    <p>ID: {{id}}</p>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  import axios from 'axios';

  export default {
    name: 'Book',
    props: ['title', 'author', 'id', 'imageUrl']
  }
</script>

<style type="text/css" media="screen">
</style>
