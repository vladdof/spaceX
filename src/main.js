import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';
import { addPlugins } from './lib/add-plugins';

import './style.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
addPlugins({ app, plugins: [router, pinia] }).mount('#app');
