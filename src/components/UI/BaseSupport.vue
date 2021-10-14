<template>
  <div
    class="customer-support"
    id="SupportChat"
    :class="{ 'is-show': chatShow }"
  >
    <div class="button-container">
      <button @click="toggleSupport">
        <img
          src="https://res.cloudinary.com/dxxd2c3du/image/upload/ar_1:1,b_rgb:262c35,bo_0px_solid_rgb:f79b9b,c_fill,g_face:center,q_auto:best,r_max,w_100/v1632928025/florist_u7zyxa.jpg"
        />
        <span class="fa fa-comments"></span>
        <span class="fa fa-times"></span>
      </button>
      <div class="chat-info-balloon">
        <div class="submit-form">
          <img
            src="https://res.cloudinary.com/dxxd2c3du/image/upload/ar_1:1,b_rgb:262c35,bo_0px_solid_rgb:f79b9b,c_fill,g_face:center,q_auto:best,r_max,w_100/v1632928025/florist_u7zyxa.jpg"
          />
          <button class="message-submit" @click="checkBot">Отправить</button>
        </div>
        <div class="message-form">
          <p>Чат со службой поддержки</p>
          <input
            type="email"
            placeholder="Укажите Ваш email"
            v-model="userEmail"
            required
            v-if="!networkErr && !messageSent"
          />
          <input
            type="text"
            placeholder="Напишите Ваше сообщение"
            v-model="userMessage"
            v-if="!networkErr && !messageSent"
            required
          />
          <p v-if="networkErr">Возникли неполадки, попробуйте позднее...</p>
          <p v-if="messageSent">
            Сообщение успешно отправлено, вскоре Вам ответят!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-dialog"],
  data() {
    return {
      userMessage: "",
      userEmail: "",
      chatShow: false,
      networkErr: null,
      messageSent: null,
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
      if (!response.ok) {
        this.networkErr = true;
        setTimeout(() => (this.networkErr = null), 7000);
        return;
      } else {
        this.messageSent = true;
        setTimeout(() => {
          this.messageSent = null;
          this.closeDialog();
        }, 4000);
        const responseData = await response.json();
        console.log(responseData);
      }
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
    toggleSupport() {
      this.chatShow = !this.chatShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
.button-container {
  position: relative;
  display: block;
  width: 5rem;
  height: 5rem;
  @media (max-width: $tablets) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.chat-info-balloon {
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s linear;
  position: absolute;
  bottom: -5rem;
  right: -5rem;
  z-index: -1;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  min-width: 22rem;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  transform: translate(-70px, -70px);
  @media (max-width: $tablets) {
    bottom: -2.5rem;
    right: -2.5rem;
    min-width: 90vw;
    padding: 0.35rem 0.5rem;
  }
  img {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 100%;
    border: 2px solid #f76c6c;
    margin-bottom: 0.7rem;
    @media (max-width: $tablets) {
      width: 50px;
      height: 50px;
      margin-bottom: 0.35rem;
    }
  }
  p {
    font-family: Georgia;
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
    line-height: 1em;
    margin: 0.7rem 0;
    @media (max-width: $tablets) {
      margin: 0.35rem 0;
      font-size: 0.6rem;
    }
  }
  input {
    border-radius: 0.25rem;
    font-family: Georgia;
    font-size: 0.8rem;
    font-style: italic;
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    width: 100%;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    transition: all 0.3s linear;
    background-color: #fff;
    &:focus {
      border-color: $base-color;
      box-shadow: 0 0 0 0.25rem rgba($base-color, 0.25);
    }
    &:invalid {
      background-color: $secondary-color;
      border-color: red;
    }
    &:valid {
      background-color: #fff;
      border: 1px solid #dedede;
    }
  }
  .message-form {
    overflow: hidden;
    padding: 0 0 0 1rem;
  }
}

.customer-support {
  position: fixed;
  bottom: 3vw;
  right: 3vw;

  button {
    display: block;
    width: 5rem;
    height: 5rem;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 100%;
    border: 2px solid #f76c6c;
    overflow: hidden;
    background: #ffffff;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: all 0.4s ease;
    @media (max-width: $tablets) {
      width: 3.5rem;
      height: 3.5rem;
    }
    .fa-comments {
      font-size: 2.5rem;
      color: #f76c6c;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.4s ease;
      opacity: 0;
      @media (max-width: $tablets) {
        font-size: 1.25rem;
      }
    }
    .fa-times {
      font-size: 2.5rem;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.4s ease;
      opacity: 0;
      @media (max-width: $tablets) {
        font-size: 1.25rem;
      }
    }
    img {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: all 0.4s ease;
      opacity: 1;
    }
    &:hover {
      .fa-comments {
        opacity: 1;
      }
      img {
        opacity: 0.2;
      }
    }
  }
  &.is-show {
    button {
      background: #f76c6c;
      img {
        display: none;
      }
      .fa-comments {
        display: none;
      }
      .fa-times {
        opacity: 1;
      }
    }
    .chat-info-balloon {
      opacity: 1;
      pointer-events: all;
      transform: translate(-10.5rem, -5rem) !important;
      @media (max-width: $tablets) {
      transform: translate(-20%, -50%) !important;
      }
    }
  }
  .submit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .message-submit {
      display: block;
      font-size: 0.7rem;
      text-align: center;
      height: 2.5rem;
      appearance: none;
      -webkit-appearance: none;
      border-radius: 1rem;
      border: 2px solid #f76c6c;
      overflow: hidden;
      background: #ffffff;
      cursor: pointer;
      outline: none;
      position: relative;
      transition: all 0.4s ease;
      @media (max-width: $tablets) {
        width: auto;
      }
      &:hover {
        background: $secondary-color;
        color: $headers-color;
        border: none;
        box-shadow: 1px 1px 1px 1px $third-color;
      }
    }
  }
}
</style>
