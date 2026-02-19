//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'

//폰트 어썸
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas)

//부트스트랩
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

const pinia = createPinia();
pinia.use(piniapluginPersistedstate);
app.use(pinia)
app.use(router)
app.use(BootstrapVue3)
//app.use(BootstrapVue)
//app.use(IconsPlugin)

app.mount('#app')
