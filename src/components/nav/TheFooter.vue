<template>
  <footer class="footer">
    <h2>
      <router-link to="/cactus">Наши контакты</router-link>
    </h2>
    <base-button @click="toggleSupport">Обратиться в поддержку</base-button>
    <base-support v-if="supportDialog" @closeDialog="toggleSupport"></base-support>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      supportDialog: false
    }
  },
  methods: {
    toggleSupport() {
      this.supportDialog = !this.supportDialog;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: aquamarine;
  padding: 0.5rem;
  margin: 0;
  h2 a {
    color: #081b06;
  }
}
</style>
