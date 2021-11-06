<template>
  <base-dialog
    v-if="successfulOrder || isShortage"
    titleSuccess="Спасибо за покупку"
    titleFail="Приносим свои извинения"
    :show="successfulOrder || isShortage"
    @close="closeDialog"
  ></base-dialog>
  <div class="wrapper">
    <div class="cart" :class="{ opened: cartIsOpened }">
      <div
        class="cart-indicator"
        @click="toggleCart"
        :class="{ opened: cartIsOpened }"
      >
        <span class="cart-size">{{ ordersQuantity }}</span>
        <span class="fa fa-shopping-cart"></span>
      </div>
      <div class="cart-items" v-if="cartIsOpened">
        <div class="cart-container">
          <cart-it
            v-for="order in $store.getters.orders"
            :key="order.id"
            :id="order.id"
            :name="order.name"
            :amount="order.quantityOrdered"
            :price="order.price"
            :img="order.img"
            :counter="order.quantityOrdered"
          ></cart-it>
        </div>
        <h4 class="cartSubTotal">Итого: {{ totalSum }} рублей</h4>
        <div class="button-container">
          <base-button class="clearCart" @click="clearCart">
            Убрать все из корзины
          </base-button>
          <base-button
            @click="submitOrder"
            v-if="isAuthenticated"
            class="checkoutCart"
            >Оформить заказ</base-button
          >
          <base-button v-else :link="true" to="/auth" class="checkoutCart"
            >Войти и купить</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import CartIt from "./CartIt.vue";
export default {
  components: {
    CartIt,
    BaseButton,
  },
  computed: {
    ordersQuantity() {
      return this.$store.getters.orders.length;
    },
    totalSum() {
      return this.$store.getters.totalSum;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isShortage() {
      return this.$store.getters.shortage !== null ? true : false;
    },
  },
  data() {
    return {
      cartIsOpened: false,
      successfulOrder: false,
    };
  },
  methods: {
    toggleCart() {
      this.cartIsOpened = !this.cartIsOpened;
    },
    clearCart() {
      for (let order of this.$store.getters.orders) {
        console.log(this.$store.getters.orders);
        console.log(this.$store.getters.catalogue);
        console.log(order);
        this.$store.commit("resetCounter", order);
      }
      this.$store.commit("clearCart");
      console.log(this.$store.getters.catalogue);
    },
    submitOrder() {
      this.toggleCart();
      this.$store.dispatch("checkStock");
      this.successfulOrder = true;
    },
    closeDialog() {
      this.successfulOrder = false;
      this.$store.commit("clearCart");
      this.$store.commit("clearShortage");
      this.$router.push("catalogue");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

.wrapper {
  position: relative;
  transform: translate(0px);
}

.cart {
  position: fixed;
  right: 0;
  top: 0;
  text-align: right;
  color: black;
  z-index: 1000;
  @media (max-width: $tablets) {
    transform: translate(-4rem, -5px);
  }
  @media (min-width: $tablets) {
    background: rgba(255, 226, 226, 0.85);
  }
  &.opened {
    background-color: transparent;
    pointer-events: none;
  }
  .cart-indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .cart-indicator.opened {
    justify-content: flex-end;
    background-color: white;
    pointer-events: auto;
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
    pointer-events: auto;
    @media (max-width: $tablets) {
      width: 100vw;
      padding: 0;
      background: rgba(255, 226, 226, 0.85);
      transform: translate(4.31rem, -3px);
    }
    @media (min-width: $tablets) and (max-width: $default) {
      width: 50vw;
      transform: translate(4.31rem, 2px);
    }

    .cart-container {
      width: 25rem;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 2px;
        background-color: #f5f5f5;
      }
      @media (max-width: $tablets) {
        width: auto;
      }
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
    .clearCart {
      margin: 2rem 2rem 1rem 0;
    }
    .checkoutCart {
      margin: 2rem 0 1rem 2rem;
      color: black;
    }
    @media (max-width: $tablets) {
      .clearCart {
        margin: 0;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
      }
      .checkoutCart {
        margin: 0;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
