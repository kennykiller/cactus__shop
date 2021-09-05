export default {
  addToCart(state, payload) {
    let filtered = state.orders.filter(el => el.id != payload.id);
    filtered.push(payload);
    state.orders = filtered;
    console.log(state.orders);
  },
  removeFromCart(state, payload) {
    let filtered = state.orders.filter((a) => payload.id != a.id);
    state.orders = filtered;
  },
  clearCart(state) {
    state.orders.length = 0;
  }
};
