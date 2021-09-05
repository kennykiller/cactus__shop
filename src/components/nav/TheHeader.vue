<template>
  <div class="container">
    <header>
      <div>
        <base-setting
          img="titanic titanic-menu-close"
          @click="openBurger"
          class="img-switch"
        ></base-setting>
        <h1>
          <router-link to="/">Кактус</router-link>
        </h1>
        <router-link to="cart" class="cartBtn-container"
          ><span class="cartBtn-name">Корзина</span>
          <div class="cartBtn-count">
            <span class="cart-count">{{ ordersQuantity }}</span>
          </div></router-link
        >
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/cart">Корзина</router-link>
          </li>
          <li>
            <router-link to="/auth">Войти в личный кабинет</router-link>
          </li>
          <!-- <li><router-link to="/auth">Выйти</router-link></li> -->
        </ul>
      </nav>
    </header>
    <nav-bar v-if="burgerIsOpened" @close="closeBurger"></nav-bar>
    <base-dialog
      v-if="burgerIsOpened"
      @close="closeBurger"
      :show="false"
    ></base-dialog>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    BaseButton;
    return {
      burgerIsOpened: false,
    };
  },
  computed: {
    ordersQuantity() {
      return this.$store.getters.orders.length;
    },
  },
  methods: {
    openBurger() {
      this.burgerIsOpened = !this.burgerIsOpened;
    },
    closeBurger() {
      this.burgerIsOpened = !this.burgerIsOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 5rem;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #081b06;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
  }
}

div {
  display: flex;
  align-items: center;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #081b06;
}

.cartBtn-container {
  display: flex;
  padding: 0.625rem;
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
    color: rgb(2, 44, 2);
    margin: 0;
  }
  a:hover,
  a:active,
  a.router-link-active {
    border-color: transparent;
  }
}

header nav {
  display: none;
}

@media (min-width: 768px) {
  .img-switch {
    display: none;
  }

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
