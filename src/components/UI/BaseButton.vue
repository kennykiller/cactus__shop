<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

button,
a {
  display: block;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 3px rgb(31, 30, 30);
  background-color: $base-color;
  border-radius: 2rem;
  padding: 0.6rem;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: $secondary-color;
    color: black;
    font-weight: 700;
    border: none;
  }
}

// a:hover,
// a:active,
// button:hover,
// button:active {
//   background-color: rgb(245, 196, 196);
//   border-color: #011805;
//   /* color: rgb(245, 196, 196) */
// }
</style>
