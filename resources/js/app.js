require('./bootstrap');
import Vue from 'vue'

//Main pages
import App from './views/app.vue'


const app = new Vue({
    el: '#app',
    components: { App }
});

import First from './views/first.vue'

const first = new Vue({
    el: '#first',
    components: { First }
});
