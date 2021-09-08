<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view class="router"></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/nav/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      titanic: null,
    };
  },
  created() {
    this.titanic = new window.Titanic({
      hover: false, // auto animated on hover (default true)
      click: true, // auto animated on click/tap (default false)
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,700&display=swap");
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-style: italic;
}

#app {
  height: 100%;
}

h1,
h2 {
  font-weight: 700;
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.router {
  flex: 1 1 auto;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
