import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    state() {
        return {
            catalogue: [],
            filtered: [],
            shortage: null,
            unsuccessfulFilter: null
        }
    },
    mutations,
    actions, 
    getters
}