import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from "vuetify";
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi'
    }
})
const app = createApp(App);

app.use(router);
app.use(vuetify)
app.mount('#app');

console.log("vue is running");
