<template>
  <footer class="footer">
    <span @click="toggleSupport" class="support">Обратиться в поддержку</span>
    <span class="contacts">
      <router-link to="#">Наши контакты</router-link>
    </span>
    <base-support
      v-if="supportDialog"
      @closeDialog="toggleSupport"
    ></base-support>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      supportDialog: false,
    };
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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0;

  .support {
    font-size: 1.2rem;
    margin-left: 5vw;
    font-weight: bold;
    color: #05270a;
    transition: transform 0.3s linear;
  }
  .contacts {
    transition: transform 0.3s linear;
    margin-right: 5vw;
    a {
      color: #0c661a;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  .support:hover,
  .contacts:hover {
    cursor: pointer;
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
</style>
