<template>
  <div class="product">
    <div class="cell cell-1">
      <div
        class="cartImage"
        :style="{ backgroundImage: `url(${require(`@/assets/${img}`)})` }"
      >
        <span></span>
      </div>
    </div>
    <div class="cell cell-2">
      <button @click="reduceFromCart"><span class="fa fa-minus"></span></button>
    </div>
    <div class="cell cell-3">{{ updatedCounter }}</div>
    <div class="cell cell-4">
      <button @click="addFromCart"><span class="fa fa-plus"></span></button>
    </div>
    <div class="cell cell-5">{{ name }}</div>
    <div class="cell cell-6">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "amount", "price", "img", "counter", "id"],
  data() {
    return {
      updatedCounter: this.counter
    }
  },
  watch: {
    counter(value) {
      if (value !== this.updatedCounter) {
        this.updatedCounter = value;
      }
    }
  },
  methods: {
    reduceFromCart() {
      this.$store.commit("reduceFromCart", {
        id: this.id,
      });
      this.$store.commit("qtyIncrease", {
        value: 1,
        id: this.id,
        name: this.name
      });
    },
    addFromCart() {
      ++this.updatedCounter;
      this.$store.commit("addToCart", {
        id: this.id,
        name: this.name,
        price: this.price,
        quantityOrdered: this.updatedCounter,
        img: this.img,
      });
      this.$store.commit("qtyDecrease", {
        value: 1,
        id: this.id,
        name: this.name
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 20% 10% 10% 10% 30% 20%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.cartImage {
  width: 4rem;
  height: 4rem;
  margin: 0.5rem auto;
  position: relative;
  cursor: pointer;
  background-size: cover;
  background-position: center center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    transition: all 0.1s;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    z-index: 1;
    transition: all 0.25s;
  }

  &:hover {
    span {
      text-shadow: 1px 2px 5px black;
    }

    &:after {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &:active {
    span {
      text-shadow: 0px 0px 1px black;
    }
  }
}
button {
  appearance: none;
  padding: 0.5em;
  margin: 0.5em 0;
  background: white;
  border: 1px solid black;
  transition: all 0.1s;
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  .fa-minus::before {
    content: url("../../assets/minus.png");
  }
  .fa-plus::before {
    content: url("../../assets/plus.png");
  }
  &:hover {
    color: white;
    background-color: lightgray;
  }
}
.cell {
  padding: 0 0.25rem;
}
.orderedAmount {
  font-size: 1.2rem;
}
</style>
