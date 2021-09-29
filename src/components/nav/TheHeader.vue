<template>
  <div class="container">
    <header>
      <div>
        <div class="burger" @click="toggleBurger">
          <span :class="{ active: burgerIsOpened }"></span>
        </div>
        <h1>
          <router-link to="/">Kaktus</router-link>
        </h1>
      </div>
      <nav class="desktop-view">
        <ul>
          <!-- <li>
            <router-link to="/cart">Корзина</router-link>
          </li> -->
          <li></li>
          <li v-if="!isAuthenticated">
            <router-link to="/auth">Войти в личный кабинет</router-link>
          </li>
          <!-- <li><router-link to="/auth">Выйти</router-link></li> -->
        </ul>
      </nav>
      <catalogue-cart></catalogue-cart>
    </header>
    <transition name="openedBar">
      <nav-bar v-if="burgerIsOpened" @close="toggleBurger"></nav-bar>
    </transition>
    <base-dialog
      v-if="burgerIsOpened"
      @close="toggleBurger"
      :show="false"
    ></base-dialog>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import CatalogueCart from "../Cart/CatalogueCart.vue";

export default {
  components: {
    NavBar,
    CatalogueCart,
  },
  data() {
    return {
      burgerIsOpened: false,
    };
  },
  computed: {
    ordersQuantity() {
      return this.$store.getters.orders.length;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    toggleBurger() {
      this.burgerIsOpened = !this.burgerIsOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  z-index: 50;
}
header {
  width: 100%;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  a {
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
  }
}

div {
  display: flex;
  align-items: center;
}
.cart-container {
  position: relative;
  height: auto;
  width: auto;
}
// burger starts
.burger {
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  span,
  span:before,
  span:after {
    width: 100%;
    position: absolute;
    height: 0.625rem;
    background-color: black;
    display: block;
    transition: 0.4s;
    border-radius: 5px;
  }
  span:before {
    content: "";
    top: -1.25rem;
    transition: top 0.3s 0.3s, transform 0.3s linear;
  }
  span {
    top: 1.25rem;
  }

  span:after {
    content: "";
    bottom: -1.25rem;
    transition: bottom 0.3s 0.3s, transform 0.3s linear;
  }

  span.active:before {
    content: "";
    top: 0rem;
    transform: rotate(45deg);
    transition: top 0.3s, transform 0.3s 0.3s linear;
  }

  span.active:after {
    content: "";
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 0.3s, transform 0.3s 0.3s linear;
  }

  span.active {
    background: rgba(255, 255, 255, 0);
  }
  @media (min-width: 768px) {
    display: none;
  }
}
// burger ends
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #081b06;
  background: white;
}

.cartBtn-container {
  display: flex;
  padding: 0.5rem;
}

.cartBtn-name {
  font-size: 1.2rem;
  font-weight: 700;
}

.cartBtn-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  min-width: 1.25rem;
  max-width: 1.25rem;
  height: 1.25rem;
  max-height: 1.25rem;
  font-family: inherit;
  font-size: 0.625rem;
  margin-left: 0.6rem;
  border-radius: 50%;
  background-color: black;
  color: white;
}

h1 {
  margin: 0;
  a {
    color: rgb(58, 100, 58);
    font-family: "Allison", cursive;
    margin: 0;
    font-size: 2.5rem;
    padding: 0.3rem;
  }
  a:hover,
  a:active,
  a.router-link-active {
    border-color: transparent;
  }
}
@media (min-width: 500px) {
  h1 a {
    font-size: 3.5rem;
  }
  .cartBtn-name {
    font-size: 2rem;
  }
  .cartBtn-count {
    min-width: 2rem;
    max-width: 2rem;
    height: 2rem;
    max-height: 2rem;
    font-size: 1rem;
  }
}

header nav {
  display: none;
}

.openedBar-enter-active {
  animation: modal 0.5s ease-out;
}
.openedBar-leave-active {
  animation: modal 0.5s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateX(-3rem) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@media (min-width: 748px) {
  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 4rem;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      li {
        margin: 0 0.5rem;
        a {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
