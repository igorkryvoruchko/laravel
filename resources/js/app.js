require('./bootstrap');
window.Vue = require('vue');

Vue.component('example-component', require('./views/first.vue').default);
Vue.component('prop-component', require('./views/prop.vue').default);

const first = new Vue({
    el: '#first'
});

const prop = new Vue({
    el: '#prop'
});

