<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view class="router" :key="$route.path"></router-view>
    <base-support></base-support>
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/catalogue");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Allison&display=swap");
@import "./variables.scss";

* {
  box-sizing: border-box;
}

html,
body {
  max-width: 78rem;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
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

.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
