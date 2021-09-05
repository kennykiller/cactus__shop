<template>
  <li class="container">
    <ul class="cart-list__item">
      <li>{{ name }}</li>
      <li>{{ amount }}</li>
      <li>{{ totalAmount }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "amount", "price"],
  computed: {
      totalAmount() {
          return this.price * this.amount;
      }
  }
};
</script>

<style lang="scss" scoped>
.cart-list__item {
  display: grid;
  grid-template-columns: 60% 20% 20%;
  border: 1px solid teal;
  padding: 0.5rem;
  margin: 0.5rem;
  background: turquoise;
  font-size: 1.2rem;
  box-shadow: 3px 3px 3px lightgray;
  border-radius: 0.5rem;
}
</style>
