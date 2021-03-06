import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    state() {
        return {
            catalogue: [],
            extraItems: [],
            filtered: [],
            shortage: null,
            unsuccessfulFilter: null,
            id: null,
            objFiltered: {},
            noMatch: null
        }
    },
    mutations,
    actions, 
    getters
}