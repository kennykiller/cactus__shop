import { createRouter, createWebHistory } from "vue-router";

import CactusMain from './pages/CactusMain.vue';
import Catalogue from './pages/Catalogue.vue';
import Auth from './pages/Auth.vue';
import UserRegistration from './pages/UserRegistration.vue';
import ItemInfo from './pages/ItemInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/cactus' },
        { path: '/cactus', component: CactusMain },
        { path: '/catalogue', component: Catalogue },
        { path: '/register', component: UserRegistration },
        { path: '/auth', component: Auth },
        { path: '/iteminfo', component: ItemInfo }
        // { path: '/:notFound(.*)', component: NotFound },
    ]
})

export default router;