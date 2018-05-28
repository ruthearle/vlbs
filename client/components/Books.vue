<template>
  <div>
    <book v-for="book in books"
          v-bind:key="book.id"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:id="book.id"
          v-bind:imageUrl="book.imageUrl">
    </book>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
import axios from "axios";
import BookComponent from "./Book.vue";
import { eventBus } from "../main";

export default {
  name: "Books",
  data() {
    return {
      books: [],
      error: ""
    };
  },
  mounted() {
    return axios
      .get("/api/books")
      .then(
        res => (this.books = res.data),
        err => (this.error = "Error fetching books")
      );
  },
  updated: function() {
    eventBus.$on("dataUpdated", data => {
      this.books = data;
    });
  },
  components: {
    book: BookComponent
  }
};
</script>

<style type="text/css" media="screen">
</style>
