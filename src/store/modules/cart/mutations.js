export default {
  addToCart(state, payload) {
    let filtered = state.orders.filter(el => el.id != payload.id);
    filtered.push(payload);
    console.log(payload);
    state.orders = filtered;
    console.log(state.orders);
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
    console.log(selected);
    if (selected.quantityOrdered === 1) {
      this.commit('removeFromCart', payload);
      console.log(selected);
      console.log(state.orders);
    } else {
      --selected.quantityOrdered;
      console.log(selected);
    }
  },
};
