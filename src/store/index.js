import { createStore } from 'vuex';

import catalogueModule from './modules/catalogue/index.js';
import cartModule from './modules/cart/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        catalogue: catalogueModule,
        cart: cartModule,
        auth: authModule
    },
    state() {
        return {
            counter: 1,
        }
    }
});

export default store;