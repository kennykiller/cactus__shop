<template>
  <li class="carousel__item" v-if="idChecker">
    <div class="carousel__image-container">
      <img :src="require(`@/assets/${front}`)" alt="" />
      <img :src="require(`@/assets/${back}`)" alt="" />
    </div>
    <div class="description-container">
      <p>{{ desc }}</p>
      <div class="price-container">
        <base-button v-if="counter < 2" @click="addToCart"
          >{{ price }} Руб</base-button
        >
        <div class="addToCart-container" v-else>
          <button @click="reduceFromCart">-</button>
          <div class="counter-container">{{ quantity }}</div>
          <button @click="addToCart">+</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "desc",
    "back",
    "stock",
    "front",
    "counter",
    "price",
    "popularity",
    "initialStock",
  ],
  data() {
    return {
      updatedCounter: this.counter,
    };
  },
  watch: {
    counter(value) {
      if (this.updatedCounter !== value) {
        this.updatedCounter = value;
      }
    },
  },
  computed: {
    quantity() {
      return this.$store.getters.orders.find((el) => this.id === el.id)
        .quantityOrdered;
    },
    idChecker() {
      if (this.$store.getters.filtered.length === 0) {
        let idCheck = this.id;
        let checkingFormula = +idCheck
          .match(/\/\d+/g)
          .join()
          .slice(1);
        return checkingFormula > 10 ? false : true;
      }
      return true;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        id: this.id,
        name: this.name,
        price: this.price,
        quantityOrdered: this.counter,
        img: this.front,
      });
      this.$store.commit("qtyDecrease", {
        value: 1,
        id: this.id,
        name: this.name,
      });
    },
    reduceFromCart() {
      this.$store.commit("reduceFromCart", {
        id: this.id,
      });
      this.$store.commit("qtyIncrease", {
        value: 1,
        id: this.id,
        name: this.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel__item {
  margin: 0 0.3rem;
  min-height: 15rem;
  min-width: 15rem;
  .carousel__image-container {
    img {
      display: block;
      margin: 0.5rem auto;
      height: 90%;
      width: 90%;
      box-shadow: 3px 2px 3px lightgray;
      cursor: pointer;
    }
    img:nth-child(2) {
      // overflow: hidden;
      // opacity: 0;
      // height: 0;
      // transition: height 0ms 400ms, opacity 600ms 0ms;
      // box-shadow: none;
      display: none;
    }
  }
}
.carousel__image-container:hover > img:nth-child(1) {
  display: none;
  box-shadow: none;
}
.carousel__image-container:hover > img:nth-child(2) {
  // opacity: 1;
  // height: auto;
  // transition: height 0ms 0ms, opacity 600ms 0ms;
  // box-shadow: 3px 2px 3px lightgray;
  display: block;
}
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  font-family: "Raleway", sans-serif;
  position: relative;
  p {
    font-family: inherit;
    font-size: 1.2rem;
    height: 1.8rem;
  }
}
.price-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.addToCart-container {
  display: flex;
  align-items: center;
  button {
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.counter-container {
  width: 3rem;
  height: 3rem;
  border: 1px solid lightgray;
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
