<template>
  <li class="carousel__item" v-if="idChecker" :class="{ filtered: filtered }">
    <div class="carousel__image-container">
      <img :src="require(`@/assets/${front}`)" alt="" @click="openDetails" />
      <img :src="require(`@/assets/${back}`)" alt="" @click="openDetails" />
    </div>
    <div class="description-container">
      <p>{{ desc }}</p>
      <footer class="footer-container">
        <div class="sizes-container">
          <i class="fa fa-arrows-h" aria-hidden="true"></i
          ><span class="sizes-value">35</span>
        </div>
        <div class="sizes-container">
          <i class="fa fa-arrows-v" aria-hidden="true"></i
          ><span class="sizes-value">40</span>
        </div>
        <div class="price-container">
          <base-button v-if="counter < 2" @click="addToCart"
            >{{ price }} Руб</base-button
          >
          <div class="addToCart-container" v-else>
            <i class="far fa-minus-square fa-2x" @click="reduceFromCart"></i>
            <i class="fas fa-shopping-cart fa-2x"
              ><span>{{ quantity }}</span></i
            >
            <i class="far fa-plus-square fa-2x" @click="addToCart"></i>
          </div>
        </div>
      </footer>
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
    "initialStock",
    "filtered",
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
        let checkingFormula = +idCheck.match(/\/\d+/g).join().slice(1);
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
        initialStock: this.initialStock,
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
    openDetails() {
      let regexp = this.front.match(/\w+\/\d/);
      let shortId = regexp[0].replace("/", "");
      console.log(shortId);

      this.$router.push(`/iteminfo/${shortId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
@import "../UI/prices.scss";
.carousel__item {
  margin: 0 0.3rem;
  min-height: 15rem;
  min-width: 15rem;
  box-shadow: 0.2rem 0.2rem 0.5rem $base-color-transparent;
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
      display: none;
    }
  }
}

.carousel__item.filtered {
  width: 25rem;
  .carousel__image-container {
    width: 100%;
    img {
      width: 70%;
    }
  }
}

.carousel__image-container:hover > img:nth-child(1) {
  display: none;
  box-shadow: none;
}
.carousel__image-container:hover > img:nth-child(2) {
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
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  .sizes-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    span:first-child {
      margin-right: 0.5rem;
    }
    .sizes-value {
      padding-left: 0.1rem;
      font-family: Helvetica, sans-serif;
    }
  }
}
</style>
