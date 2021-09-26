<template>
  <div class="alert" v-if="wrongData">
    <div class="alert__title">
      Ошибка авторизации
    </div>
    <div class="alert__description">
      Проверьте введенные данные или зарегистрируйтесь.
    </div>
  </div>
  <section class="auth">
    <h1>Войдите в аккаунт</h1>
    <form class="form" @submit.prevent="getAccess">
      <div class="form-item">
        <input type="email" required v-model.trim="userData.email" />
        <label>Email</label>
      </div>
      <div class="form-item">
        <input type="password" required v-model.trim="userData.password" />
        <label>Пароль</label>
      </div>
      <div class="form-submit">
        <button>
          Войти
        </button>
      </div>
    </form>
    <div class="auth-footer">
      <p>
        Не можете войти?
        <router-link to="#">Сбросить пароль</router-link> <br />
        Еще не зарегистрированы?
        <router-link to="/register">Давайте сделаем это!</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      wrongData: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async getAccess() {
      try {
        await this.$store.dispatch("login", {
          email: this.userData.email,
          password: this.userData.password,
        });
        if (this.$store.getters.isAuthenticated) {
          this.$router.push("catalogue");
        }
      } catch (err) {
        console.log(err);
        this.userData.email = "";
        this.userData.password = "";
        this.wrongData = true;
        this.hideAlert();
      }
    },
    hideAlert() {
      setTimeout(() => this.wrongData = null, 7000)
    }
  },
};
</script>

<style lang="scss" scoped>
@import './form-styles.scss';
</style>
