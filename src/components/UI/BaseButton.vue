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
  background-color: aquamarine;
  padding: 0.8rem;
  border-radius: 1.8rem;
  box-shadow: 0.25rem 0.25rem 0.25rem teal;
  cursor: pointer;
  display: inline-block;
  color: #081b06;
  text-decoration: none;
  font-family: inherit;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #0dc569cb;
  border-color: #011805;
  color: #011805;
}

.flat {
  background-color: transparent;
  color: #6af388;
  border: 1px solid teal;
}

.outline {
  background-color: rgb(221, 233, 223);
  border-color: #2f9271;
  color: #128622c0;
  box-shadow: none;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #25e0a27a;
}
</style>
