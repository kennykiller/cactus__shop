<template>
  <div class="base-form">
    <header class="base-header">
      <p>Мы доставляем бесплатно в следующие районы Санкт-Петербурга</p>
      <p>Среднее время доставки после заказа: 3,5 - 4 часа</p>
      <span class="fas fa-window-close" @click="toggleInfo"></span>
    </header>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1giV8xq86cb1W25CwvZKsQPXULV91h7LL"
      width="640"
      height="480"
      style="border-radius: 0.5rem"
    ></iframe>
    <p>Время работы: 06.50 - 22.50</p>
  </div>
</template>
<script>
export default {
  emits: ["toggle-info"],
  methods: {
    toggleInfo() {
      this.$emit("toggle-info");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
@import './sidebar-form.scss';
.base-form {
  width: 42rem;
  box-shadow: 1rem 1rem 2.5rem $secondary-color;
  text-shadow: 1px 1px 2px $secondary-color;
  .base-header {
    flex-direction: column;
  }
  .fa-window-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.4s linear;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
