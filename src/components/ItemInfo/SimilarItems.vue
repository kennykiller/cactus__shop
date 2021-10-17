<template>
  <li>
    <img :src="require(`@/assets/${front}`)" alt="" />
    <h3 class="name">{{ desc }}</h3>
    <h3 class="price">{{ price }}</h3>
  </li>
</template>

<script>
export default {
  props: [
    "desc",
    "price",
    "front",
  ],
};
</script>

<style lang="scss" scoped></style>
