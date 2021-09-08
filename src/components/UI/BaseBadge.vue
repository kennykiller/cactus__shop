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
  background-color: rgb(27, 172, 39);
  opacity: 0.8;
  z-index: 1;
  font-weight: 700;
  color: rgb(0, 0, 0);
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px rgb(2, 44, 2);
}

.name {
  top: -0.4rem;
  left: 0.3rem;
  background-color: rgb(30, 214, 46);
}
.price {
  bottom: -0.7rem;
  right: 0.3rem;
}
</style>
