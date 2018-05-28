import Vue from 'vue';
import AppComponent from './components/App.vue';

export const eventBus = new Vue();

const vm = new Vue({
    el: '#app',
    components: {
        app: AppComponent
    },
    render: h => h('app')
});