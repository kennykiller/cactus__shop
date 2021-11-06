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
      <div class="aboutUs">
        <h3>
          Наш адрес: г.Санкт-Петербург, Комендантский 17к1
        </h3>
        <h3>
          Время работы: 06.50 - 22.50
        </h3>
      </div>
      <catalogue-cart></catalogue-cart>
    </header>

    <nav-bar v-if="burgerIsOpened" @close="toggleBurger"></nav-bar>
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
  },
  methods: {
    toggleBurger() {
      this.burgerIsOpened = !this.burgerIsOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
.container {
  display: flex;
  flex-direction: column;
  z-index: 2001;
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
.aboutUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h3:first-child {
    margin-bottom: 0;
  }
  h3:last-child {
    margin-top: 0;
  }
  @media (max-width: $default) {
    display: none;
  } 
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
    height: 0.5rem;
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
  @media (min-width: $default) {
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

h1 {
  margin: 0;
  @media (min-width: $tablets) and (max-width: $default) {
    height: 4.2rem;
  }
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
}

.openedBar-enter-active {
  animation: modal 0.5s ease-out;
}
.openedBar-leave-active {
  animation: modal 0.5s ease-in reverse;
}
</style>
