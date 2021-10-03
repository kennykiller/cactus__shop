<template>
  <div :class="{ name: name, price: price }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: false,
      type: Boolean,
    },
    price: {
      required: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  background-color: rgb(200, 236, 40);
  opacity: 0.8;
  z-index: 1;
  font-weight: 700;
  color: rgb(0, 0, 0);
  padding: 0.5rem;
  border-radius: 2rem;
}

.name {
  top: -0.4rem;
  left: 0.3rem;
  background-color: rgb(30, 214, 46);
}
.price {
  top: 0.5rem;
  left: -1.5rem;
  width: 5rem;
  height: 1.4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  transform: rotate(-45deg);
}
</style>
