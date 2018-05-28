<template>
    <form v-on:submit.prevent @submit="handleSubmit">
      <p>
        <label for="searchfilter">Filter Results</label>
        <input type="text" placeholder="Filter by title or id" name="filter" id="filter" v-model="term">
      </p>
      <p>
        <input type="submit" value="submit">
      </p>
    </form>
</template>

<script type="text/javascript" charset="utf-8">
  import axios from 'axios';
  import { eventBus } from '../main';

  export default {
    name: 'FilterResults',
    data() {
      return {
        term: undefined,
        data: []
      }
    },
    methods: {
      handleSubmit() {
        const idRegex = /([o][l]\d*[m])/gi
        const ref = this.term.match(idRegex) ? { id: this.term } : { title: this.term }

        axios.post('/filter', ref)
          .then(res => {
            this.data = res.data;
            eventBus.$emit('dataUpdated', this.data);
          });
      }
    }
  }
</script>

<style type="text/css" media="screen">
</style>
