<template>
  <li class="catalogue-item__list" v-if="stock > 0">
    <div class="catalogue-image__container">
      <img :src="require(`@/assets/${img}`)" alt="" />
      <base-badge :name="!!name">{{ name }}</base-badge>
      <base-badge :price="!!price">{{ price }} Руб</base-badge>
      <base-rating
        :id="id"
        :popularity="String(popularity)"
        class="catalogue-rating"
      ></base-rating>
    </div>
    <div class="catalogue-item__info">
      <h3 v-if="stock < 10">
        Осталось всего: <span>{{ stock }}</span
        >!!!
      </h3>
      <div class="catalogue-item__ordered">
        <div>
          <img
            class="toCart"
            src="../../assets/toCart.png"
            alt=""
            @click="addToCart"
          />
        </div>
        <div class="counter">{{ counter - 1 }}</div>
        <div>
          <img
            class="outCart"
            src="../../assets/outCart.png"
            alt=""
            @click="deleteFromCart"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "price", "stock", "popularity", "counter", "img"],
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
        id: this.id,
      });
      this.$store.commit("resetCounter", {
        id: this.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.catalogue-item__list {
  font-size: 1rem;
  margin: 1.5rem;
  padding: 5px;
  text-align: center;
  display: flex;
}

.catalogue-image__container {
  position: relative;
  margin-right: 0.5rem;
}

.catalogue-image__container:hover {
  background: url("../../assets/roses/1.jpg") no-repeat 50% 50%;
  background-size: contain;
  border-radius: 10%;
}

.catalogue-image__container:hover img{
  opacity: 0;
}

.catalogue-image__container > img {
  display: block;
  width: 225px;
  height: 225px;
  border-radius: 10%;
  border: 1px solid gray;
  transition: all 0.3s ease;
}

.simple-rating.catalogue-rating {
  position: absolute;
  bottom: 0rem;
  left: 0.5rem;
}

.catalogue-item__info {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  color: rgb(25, 175, 25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: rgb(255, 95, 95);
  }
}

.catalogue-item__ordered {
  position: relative;
  display: flex;
  padding: 0.2rem;
}

.counter {
  width: 2rem;
  height: 2rem;
  border: 1px solid teal;
  box-shadow: 4px 4px 4px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: "Montserrat", sans-serif;
}
</style>
