<template>
  <div class="alert" v-if="!formIsValid">
    <div class="alert__title">
      Ошибка при регистрации
    </div>
    <div class="alert__description">
      Длина пароля должна составлять не менее шести символов.
    </div>
  </div>
  <section class="auth">
    <h1>Всего пара шагов</h1>
    <form class="form" @submit.prevent="submitForm">
      <div class="form-item">
        <input type="email" required v-model.trim="userData.email.value" />
        <label>Email</label>
      </div>
      <div class="form-item">
        <input
          @input="resetValidity('password')"
          type="password"
          required
          v-model.trim="userData.password.value"
          :class="{ errorInput: !userData.password.isValid }"
        />
        <label>Пароль</label>
      </div>
      <div class="form-submit">
        <button>
          Зарегистрироваться
        </button>
      </div>
    </form>
    <div class="auth-footer">
      <p>
        Уже зарегистрированы?
        <router-link to="/auth">Войти</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        password: {
          value: null,
          isValid: true,
        },
        email: {
          value: "",
          isValid: true,
        },
      },
      formIsValid: true,
    };
  },
  methods: {
    resetValidity(input) {
      this.userData[input].isValid = true;
      this.formIsValid = true;
    },
    validateForm() {
      if (
        this.userData.password.value == null ||
        this.userData.password.value.length < 6
      ) {
        this.userData.password.isValid = false;
        this.userData.password.value = null;
        this.formIsValid = false;
      } else {
        this.formIsValid = true;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const registeredData = {
        password: this.userData.password.value,
        email: this.userData.email.value,
      };

      this.$store.dispatch("signup", {
        email: registeredData.email,
        password: registeredData.password,
      });

      this.$router.push("auth");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./form-styles.scss";
</style>
