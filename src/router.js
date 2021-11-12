import { createRouter, createWebHistory } from "vue-router";
import Catalogue from './pages/Catalogue.vue';
import Auth from './pages/Auth.vue';
import UserRegistration from './pages/UserRegistration.vue';
import ItemInfo from './pages/ItemInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/catalogue' },
        { path: '/catalogue', component: Catalogue },
        { path: '/register', component: UserRegistration },
        { path: '/auth', component: Auth },
        { path: '/iteminfo', component: ItemInfo },
        { path: '/iteminfo/:id', component: ItemInfo},
        // { path: '(.*)', redirect: '/catalogue'}
    ]
})

export default router;