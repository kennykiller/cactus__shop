<template>
  <div class="delivery-area">
    <header class="delivery-header">
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
.delivery-area {
  position: absolute;
  width: 42rem;
  top: 50%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 1rem 1rem 2.5rem $secondary-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-shadow: 1px 1px 2px $secondary-color;
  .delivery-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    position: relative;
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
