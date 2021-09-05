<template>
  <section>
    <base-dialog
      v-if="successfulOrder || isShortage"
      titleSuccess="Спасибо за покупку"
      titleFail="Приносим свои извинения"
      :show="successfulOrder || isShortage"
      @close="closeDialog"
      ></base-dialog
    >
    <nav>
      <ul class="cart-list__titles">
        <li>Наименование</li>
        <li>Количество</li>
        <li>Сумма</li>
      </ul>
    </nav>
    <ul class="cart-list__items">
      <cart-item
        v-for="order in $store.getters.orders"
        :key="order.id"
        :id="order.id"
        :name="order.name"
        :stock="order.stock"
        :amount="order.quantityOrdered"
        :price="order.price"
      ></cart-item>
    </ul>
    <div class="total">Итого: {{ totalSum }} рублей</div>
    <div class="buttonWrapper">
      <base-button @click="submitOrder" v-if="isAuthenticated"
        >Оформить заказ</base-button
      >
      <base-button v-else :link="true" to="/auth">Войти и купить</base-button>
    </div>
  </section>
</template>

<script>
import CartItem from "../components/Cart/CartItem.vue";
import BaseButton from "../components/UI/BaseButton.vue";
export default {
  components: {
    CartItem,
    BaseButton,
  },
  data() {
    return {
      successfulOrder: false,
    };
  },
  computed: {
    totalSum() {
      return this.$store.getters.totalSum;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isShortage() {
      return this.$store.getters.shortage !== null ? true : false;
    }
  },
  methods: {
    submitOrder() {
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
.cart-list__titles {
  display: grid;
  grid-template-columns: 47% 33% 20%;
  border: 1px solid teal;
  padding: 0.5rem;
  justify-content: space-between;
  margin: 0.5rem;
  background: turquoise;
  font-size: 1.2rem;
  box-shadow: 3px 3px 3px lightgray;
  border-radius: 0.5rem;
}

.cart-list__items {
  padding: 0;
}

.total {
  border: 1px solid teal;
  padding: 0.5rem;
  margin: 0.5rem;
  background: turquoise;
  font-size: 1.2rem;
  box-shadow: 3px 3px 3px lightgray;
  border-radius: 0.5rem;
  text-align: center;
}

.buttonWrapper {
  text-align: center;
  margin-top: 3rem;
}
</style>
