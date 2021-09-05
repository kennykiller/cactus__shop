<template>
  <div class="wrapper">
    <div class="call"><span>Регистрируйся и скорее за цветами!!!</span></div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name" class="required">Имя</label>
        <input
          :class="{ errorInput: !userData.name.isValid }"
          type="text"
          id="name"
          v-model.trim="userData.name.value"
          @blur="resetValidity('name')"
        />
      </div>

      <div>
        <label for="lastName">Фамилия</label>
        <input
          type="text"
          id="lastName"
          v-model.trim="userData.lastName.value"
        />
      </div>

      <div>
        <label for="login" class="required">Логин</label>
        <input
          type="text"
          id="login"
          v-model.trim="userData.login.value"
          :class="{ errorInput: !userData.login.isValid }"
          @blur="resetValidity('login')"
        />
      </div>

      <div>
        <label for="password" class="required">Пароль</label>
        <input
          type="password"
          id="password"
          v-model.trim="userData.password.value"
          :class="{ errorInput: !userData.password.isValid }"
          @blur="resetValidity('password')"
        />
      </div>

      <div>
        <label for="email" class="required">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="userData.email.value"
          :class="{ errorInput: !userData.password.isValid }"
          @blur="resetValidity('email')"
        />
      </div>

      <div>
        <label for="phone">Телефон</label>
        <input type="tel" id="phone" v-model.trim="userData.phone.value" />
      </div>
      <base-button mode="outline">Зарегистрироваться</base-button>
    </form>
    <p v-if="!formIsValid" class="errorMessage">
      Заполните все необходимые поля, длина пароля должна быть не менее 6
      символов
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: {
          value: "",
          isValid: true,
        },
        lastName: {
          value: "",
          isValid: true,
        },
        login: {
          value: null,
          isValid: true,
        },
        password: {
          value: null,
          isValid: true,
        },
        email: {
          value: "",
          isValid: true,
        },
        phone: {
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
    },
    validateForm() {
      if (this.userData.name.value == "") {
        this.userData.name.isValid = false;
        this.userData.name.value = "";
        this.formIsValid = false;
      }
      if (this.userData.login.value == null) {
        this.userData.login.isValid = false;
        this.userData.login.value = "";
        this.formIsValid = false;
      }
      if (
        this.userData.password.value == null ||
        this.userData.password.value.length < 6
      ) {
        this.userData.password.isValid = false;
        this.userData.password.value = null;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        this.formIsValid = true;
        return;
      }

      const registeredData = {
        name: this.userData.name.value,
        lastName: this.userData.lastName.value,
        login: this.userData.login.value,
        password: this.userData.password.value,
        email: this.userData.email.value,
        phone: this.userData.phone.value,
      };

      this.$store.dispatch('signup', {
        email: registeredData.email,
        password: registeredData.password
      })
      
      this.$router.push('auth')
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: url("../assets/2.jpg") no-repeat;
  display: flex;
  justify-content: center;
  text-align: center;
}

.call {
  text-align: center;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    color: #081b06;
  }
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
    box-shadow: 4px 4px 4px darkcyan;
    label {
      padding: 0.5rem;
      font-size: 1.5rem;
      color: #081b06;
    }
    .required::after {
      margin: 0.2rem;
      content: "*";
      color: red;
    }
    input {
      padding: 0.3rem;
    }
  }
}

.errorMessage {
  background-color: rgba(165, 166, 179, 0.582);
  border: 1px solid gray;
  border-radius: 1.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1.2rem;
}

.errorInput {
  background-color: rgb(228, 155, 155);
  border: 1px solid red;
}
</style>
