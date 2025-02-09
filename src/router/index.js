import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '@/views/HomePage/index.vue';
import Screen2 from '@/views/Screen2/index.vue';
import Screen3 from '@/views/Screen3/index.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/screen2', component: Screen2},
    {path: '/screen3', component: Screen3},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
