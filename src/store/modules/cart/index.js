import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations";

export default {
  state() {
    return {
      orders: [],
    };
  },
  actions,
  mutations,
  getters,
};
