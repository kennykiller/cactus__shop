<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
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

<style scoped>
button,
a {
  padding: 0.3rem;
  border-radius: 30%;
  cursor: pointer;
  display: inline-block;
  color: #081b06;
  text-decoration: none;
  font-family: inherit;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  border: none;
  background-color: white;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(245, 196, 196);
  border-color: #011805;
  /* color: rgb(245, 196, 196) */
}

</style>
