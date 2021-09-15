<template>
  <div class="cart">
    <div
      class="cart-indicator"
      @click="toggleCart"
      :class="{ opened: cartIsOpened }"
    >
      <span class="cart-size" v-if="!cartIsOpened">{{ ordersQuantity }}</span>
      <span class="fa fa-shopping-cart"></span>
    </div>
    <div class="cart-items" v-if="cartIsOpened">
      <div class="cart-container">
        <cart-it
          v-for="order in $store.getters.orders"
          :key="order.id"
          :id="order.id"
          :name="order.name"
          :stock="order.stock"
          :amount="order.quantityOrdered"
          :price="order.price"
          :img="order.img"
          :counter="order.quantityOrdered"
        ></cart-it>
      </div>
      <h4 class="cartSubTotal">Итого: {{ totalSum }} рублей</h4>
      <div class="button-container">
        <button class="clearCart" @click="clearCart">
          Убрать все из корзины
        </button>
        <button class="checkoutCart">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartIt from "./../Cart/CartIt.vue";
export default {
  components: {
    CartIt,
  },
  props: ["id", "name", "amount", "price"],
  computed: {
    ordersQuantity() {
      return this.$store.getters.orders.length;
    },
    totalSum() {
      return this.$store.getters.totalSum;
    },
  },
  data() {
    return {
      cartIsOpened: false,
    };
  },
  methods: {
    toggleCart() {
      this.cartIsOpened = !this.cartIsOpened;
    },
    clearCart() {
      for (let order of this.$store.getters.orders) {
        this.$store.commit("resetCounter", order);
      }
      this.$store.commit("clearCart");
      console.log(this.$store.getters.catalogue);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  right: 0;
  top: 5rem;
  text-align: right;
  background: rgba(146, 125, 150, 0.863);
  color: black;
  z-index: 1;

  .cart-indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-indicator.opened {
    justify-content: flex-end;
  }

  .fa-shopping-cart,
  .cart-size {
    cursor: pointer;
    font-size: 1.25rem;
    user-select: none;
  }

  .fa-shopping-cart {
    padding: 0.8rem 0.8rem 0.8rem 0;
  }
  .fa-shopping-cart::before {
    content: url("../../assets/cart.png");
  }

  .cart-size {
    padding: 1rem 0 1rem 1rem;
  }

  .cart-items {
    padding: 0 1rem 0.5rem 1rem;

    .cart-container {
      width: 25rem;
    }
  }

  .cartSubTotal {
    border-top: 1px solid white;
    font-size: 1.25rem;
    padding-top: 1rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    button {
      border: 1px solid lightgray;
      box-shadow: 2px 2px 3px rgb(31, 30, 30);
      border-radius: 2rem;
      padding: 0.6rem;
      font-family: "Raleway", sans-serif;
      cursor: pointer;
      &:hover {
        background-color: rgba(27, 26, 26, 0.836);
        color: white;
        border: none;
      }
    }
    .clearCart {
      margin: 2rem 2rem 1rem 0;
    }
    .checkoutCart {
      margin: 2rem 0 1rem 2rem;
    }
  }
}
</style>
