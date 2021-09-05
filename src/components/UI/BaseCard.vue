<template>
  <li>
    <router-link to="itemInfo">
      <h3>{{ itemName }}</h3>
      <img :src="require(`@/assets/${link}.jpg`)" alt="" />
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 0.5rem;
  list-style: none;
  text-align: center;
  padding: 0.3rem;
  a {
    text-decoration: none;
    color: #05270a;
    font-size: 1.2rem;
    font-weight: bold;
  }
  img {
    display: block;
    width: 225px;
    height: 225px;
    border-radius: 50%;
    border: 1px solid gray;
  }
}
li:hover {
  box-shadow: 2px 2px 2px 2px teal;
}
</style>
