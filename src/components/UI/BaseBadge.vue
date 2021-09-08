<template>
  <div :class="{ name: name }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: false,
      type: String,
    },
    price: {
      required: false,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  background-color: rgb(23, 177, 36);
  opacity: 0.8;
  z-index: 1;
  font-weight: 700;

  color: rgb(2, 44, 2);
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px rgb(2, 44, 2);
}

.name {
  top: -0.4rem;
  left: 0.3rem;
}
.price {
  bottom: -0.4rem;
  right: 0.3rem;
}
</style>
