<template>
  <section class="wrapper">
    <form @submit.prevent="getAccess">
      <div v-if="passwordForgot">
        <label
          for="emailPassForgot"
          class="label-email__passForgot"
          v-if="passwordForgot"
          >Укажите Email, использованный при регистрации</label
        >
        <input
          type="email"
          id="emailPassForgot"
          v-model.trim="emailPassForgot"
        />
      </div>
      <div v-if="!passwordForgot">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="userData.email" />
      </div>
      <div v-if="!passwordForgot">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model.trim="userData.password" />
      </div>
      <div class="buttons">
        <base-button v-if="!passwordForgot">Войти</base-button>
        <base-button :link="true" to="/register" v-if="!passwordForgot"
          >Зарегистрироваться</base-button
        >
        <div @click="resetPassword" v-if="!passwordForgot"
          >Забыли пароль?</div
        >
        <base-button @click="verifyEmail" v-if="passwordForgot"
          >Отправить код проверки</base-button
        >
      </div>
    </form>
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
      passwordForgot: false,
      emailPassForgot: "",
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async getAccess() {
      await this.$store.dispatch("login", {
        email: this.userData.email,
        password: this.userData.password,
      });
      if (this.$store.getters.isAuthenticated) {
        this.$router.go(-1);
      }
    },
    resetPassword() {
      this.passwordForgot = true;
    },
    verifyEmail() {
      window.Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: "them@website.com",
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body",
      }).then((message) => alert(message));
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url("../assets/2.jpg") no-repeat;
  background-size: cover;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin: 1rem;
    padding: 0.5rem;
    background-color: turquoise;
    border: 1px solid teal;
    border-radius: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 20rem;
    max-width: 80%;
    box-shadow: 4px 4px 4px darkcyan;
    label {
      padding: 0.5rem;
      font-size: 1.5rem;
      color: #081b06;
    }
    input {
      padding: 0.3rem;
    }
  }

  .label-email__passForgot {
    font-size: 0.8rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  button {
    padding: 0.5rem;
    background-color: turquoise;
    border: 1px solid teal;
    border-radius: 1.5rem;
    box-shadow: 2px 2px 2px darkcyan;
    min-width: 10rem;
    font-size: 1.5rem;
    color: #081b06;
    margin: 0.5rem;
  }
}
</style>
