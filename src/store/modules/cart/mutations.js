export default {
  addToCart(state, payload) {
    let filtered = state.orders.filter(el => el.id != payload.id);
    filtered.push(payload);
    state.orders = filtered;
  },
  removeFromCart(state, payload) {
    let filtered = state.orders.filter((a) => payload.id != a.id);
    state.orders = filtered;
  },
  clearCart(state) {
    state.orders.length = 0;
  },
  reduceFromCart(state, payload) {
    let selected = state.orders.find((el) => payload.id === el.id);
    if (selected.quantityOrdered === 1) {
      this.commit('removeFromCart', payload);
    } else {
      --selected.quantityOrdered;
    }
  },
};
