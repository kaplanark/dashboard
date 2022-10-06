import Icon from './assets/icons/Icon.vue';
export default {
    install(app) {
        app.component('icon', Icon);
        app.component('x-icon', Icon);
    }
}