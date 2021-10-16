<template>
  <div class="backdrop" @click="close"></div>
  <menu class="container--mobile">
    <nav>
      <ul>
        <li v-if="!isAuthenticated" @click="close">
          <router-link to="/register">Зарегистрироваться</router-link>
        </li>
        <li v-if="!isAuthenticated" @click="close">
          <router-link to="/auth">Войти в личный кабинет</router-link>
        </li>
        <li v-else @click="logout">
          Выйти
        </li>
        <li @click="toggleInfo('delivery')">
          Доставка
        </li>
        <li @click="toggleInfo('sales')">Программа скидок</li>
        <li @click="toggleInfo('location')">Где нас найти</li>
      </ul>
    </nav>
  </menu>
  <delivery
    v-if="infoIsOpened.delivery"
    @toggleInfo="toggleInfo('delivery')"
  ></delivery>
  <sales v-if="infoIsOpened.sales" @toggleInfo="toggleInfo('sales')"></sales>
  <shop-location
    v-if="infoIsOpened.location"
    @toggleInfo="toggleInfo('location')"
  ></shop-location>
</template>

<script>
import ShopLocation from "../Sidebar/ShopLocation.vue";
import Delivery from "../Sidebar/Delivery.vue";
import Sales from "../Sidebar/Sales.vue";
export default {
  emits: ["close"],
  components: {
    ShopLocation,
    Delivery,
    Sales,
  },
  created() {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  },
  unmounted() {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  },
  data() {
    return {
      infoIsOpened: {
        delivery: false,
        location: false,
        sales: false,
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    toggleInfo(item) {
      this.infoIsOpened[item] = !this.infoIsOpened[item];
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

.container--mobile {
  position: absolute;
  padding-left: 0;
  top: 5rem;
  left: 0;
  z-index: 5001;
  background-color: $fourth-color;
  animation: openedBar 0.5s ease;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 0;
    padding: 0.3rem;
  }
  li {
    padding: 0.5rem;
    color: black;
    font-size: 1.2rem;
    border-bottom: 1px solid white;
  }
  li a {
    color: black;
    font-size: 1.2rem;
  }
}
@keyframes openedBar {
  from {
    opacity: 0;
    transform: translateX(-3rem) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
