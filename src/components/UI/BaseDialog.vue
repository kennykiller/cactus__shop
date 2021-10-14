<template>
  <teleport to="body">
    <div class="backdrop" @click="tryClose"></div>
    <transition name="dialog">
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
    </transition>
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
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(22, 22, 22, 0.185);
  z-index: 5;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 15px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #fff;
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
