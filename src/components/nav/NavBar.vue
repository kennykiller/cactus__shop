<template>
  <div class="container--mobile" @click="tryClose">
    <nav>
      <ul>
        <li>
          <router-link to="/auth">Войти в личный кабинет</router-link>
        </li>
        <li>
          <router-link to="/cart">Корзина</router-link>
        </li>
        <li>
          <router-link to="/catalogue">Каталог</router-link>
        </li>
        <li>
          <router-link to="/cactus">Доставка</router-link>
        </li>
        <li>
          <router-link to="/cactus">Программа скидок</router-link>
        </li>
        <li>
          <router-link to="/cactus">О нас</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="container--desktop">
    <nav>
      <ul>
        <li>
          <router-link to="/catalogue">Каталог</router-link>
        </li>
        <li>
          <router-link to="/cactus">Доставка</router-link>
        </li>
        <li>
          <router-link to="/cactus">Программа скидок</router-link>
        </li>
        <li>
          <router-link to="/cactus">О нас</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  methods: {
    tryClose() {
      this.$emit('close');
    }
  }

};
</script>

<style lang="scss" scoped>
.container--mobile {
  position: absolute;
  width: 60%;
  top: 5rem;
  left: 0;
  z-index: 10;
  background-color: rgb(17, 189, 189);
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 0;
    padding: 0.5rem;
  }
  li {
    padding: 1rem;
  }
  li:hover {
    border: 1px solid teal;
  }
  li a {
    color: white;
    font-size: 1.2rem;
  }
}

.container--desktop {
  display: none;
}

@media (min-width: 768px) {
  .container--mobile {
    display: none;
  }
  .container--desktop {
    display: block;
    background-color: rgb(17, 189, 189);
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
    }
    li a {
      text-decoration: none;
      color: white;
      font-size: 1.2rem;
    }
  }
}
</style>
