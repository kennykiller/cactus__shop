import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseSetting from './components/UI/BaseSetting.vue';
import BaseSupport from './components/UI/BaseSupport.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseRating from './components/UI/BaseRating.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-setting', BaseSetting);
app.component('base-support', BaseSupport);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-rating', BaseRating);

app.mount('#app')
