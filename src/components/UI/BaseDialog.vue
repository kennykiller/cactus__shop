<template>
  <teleport to="body">
    <div class="backdrop" @click="tryClose"></div>
    <dialog open v-if="show">
      <header>
        <slot name="header">
          {{ title }}
        </slot>
      </header>
      <section>
        <slot>
          {{ text }}
        </slot>
      </section>
      <menu>
        <slot name="actions">
          <base-button @click="tryClose">Закрыть</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    titleFail: {
      type: String,
      required: false,
    },
    titleSuccess: {
      type: String,
      required: false,
    },
  },
  computed: {
    title() {
      return !this.$store.getters.shortage ? this.titleSuccess : this.titleFail;
    },
    text() {
      return !this.$store.getters.shortage
        ? "Заказ уже спешит к Вам, скоро Вы окунетесь в невероятный цветочный аромат!"
        : `К сожалению, в наличии у нас только ${this.$store.getters.shortage.initialStock} ${this.$store.getters.shortage.name}, пожалуйста, выберите другие цветы либо укажите меньшее число. Спасибо за понимание!`;
    },
  },
  created() {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  },
  unmounted() {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
  z-index: 5001;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #fff;
  animation: dialog 0.4s ease;
  @media (max-width: $tablets) {
    width: 80%;
  }
}
@keyframes dialog {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
header {
  background-color: teal;
  color: #fff;
  width: 100%;
  padding: 1rem;
}

section {
  padding: 0.3rem;
  font-size: 1.1rem;
  text-align: center;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
