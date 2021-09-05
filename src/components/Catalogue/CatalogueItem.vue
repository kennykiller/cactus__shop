<template>
  <li class="catalogue-item__list" v-if="stock > 0">
    <img src="../../assets/bucket.jpg" alt="" />
    <div class="catalogue-item__info">
      <h3>{{ name }}</h3>
      <h3>{{ price }} Руб</h3>
      <h3 v-if="stock < 10">
        Осталось всего: <span>{{ stock }}</span
        >!!!
      </h3>
      <h3>Рейтинг: {{ popularity }}</h3>
      <img
        class="toCart"
        src="../../assets/toCart.png"
        alt=""
        @click="addToCart"
      />
      <div class="counter">{{ counter - 1 }}</div>
      <img
        class="outCart"
        src="../../assets/outCart.png"
        alt=""
        @click="deleteFromCart"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "price", "stock", "popularity", "counter"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        id: this.id,
        name: this.name,
        price: this.price,
        quantityOrdered: this.counter,
      });
      this.$store.commit("qtyDecrease", {
        value: 1,
        id: this.id,
      });
    },
    deleteFromCart() {
      this.$store.commit("removeFromCart", {
        id: this.id
      });
      this.$store.commit("resetCounter", {
        id: this.id
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.catalogue-item__list {
  font-size: 1rem;
  margin: 5px;
  padding: 5px;
  text-align: center;
}

.catalogue-item__list img {
  display: block;
}

.catalogue-item__info {
  position: relative;
  span {
    color: red;
  }
}

.toCart {
  position: absolute;
  top: 2rem;
  left: -3.7rem;
}

.outCart {
  position: absolute;
  top: 2rem;
  left: 0.8rem;
}

.counter {
  position: absolute;
  top: 2rem;
  left: -1.5rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid teal;
  box-shadow: 4px 4px 4px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
