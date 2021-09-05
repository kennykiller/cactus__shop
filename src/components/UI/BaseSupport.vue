<template>
  <form @submit.prevent="checkBot">
    <h2>Задайте ваш вопрос</h2>
    <label for="contactEmail">Контактный email</label>
    <input type="email" id="contactEmail" v-model="userEmail" />
    <textarea
      name=""
      id=""
      rows="11"
      cols="25"
      placeholder="Введите Ваше сообщение и совсем скоро Вам ответят"
      v-model="userMessage"
    ></textarea>
    <div>
      <button @click="closeDialog">Отмена</button>
      <button>Отправить сообщение</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["close-dialog"],
  data() {
    return {
      userMessage: "",
      userEmail: "",
    };
  },
  computed: {
    messageToSend() {
      return this.userMessage + " " + this.userEmail;
    },
  },
  methods: {
    async checkBot() {
      const response = await fetch(
        "https://api.telegram.org/bot1950106226:AAF114wR2vj4ZAWrV4VcHLX_nl34mVdmmOY/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: 671536288,
            text: this.messageToSend,
          }),
        }
      );

      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  position: fixed;
  top: 40vh;
  left: 15%;
  width: 70%;
  z-index: 100;
  border-radius: 15px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  h2 {
    background-color: teal;
    color: #fff;
    width: 100%;
    margin: 0.3rem 0.2rem 0.3rem 0;
    padding: 0.5rem;
  }
  label {
    font-size: 1.1rem;
    padding: 0.2rem;
  }
  input {
    margin: 0 0.2rem;
  }
  textarea {
    margin: 0.5rem 0.2rem;
    padding: 0.3rem;
  }
  button {
    padding: 0.2rem;
    margin: 0.2rem;
    font-family: inherit;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  }
}
</style>
