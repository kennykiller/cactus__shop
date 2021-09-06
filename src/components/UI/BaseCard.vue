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
  margin: 0.2rem;
  list-style: none;
  text-align: center;
  padding: 0.3rem;
  a {
    text-decoration: none;
    color: #05270a;
    font-size: 1.2rem;
    font-weight: bold;
    h3 {
      transition: transform 0.5s;
    }
    img {
      display: block;
      width: 225px;
      height: 225px;
      border-radius: 25%;
      border: 1px solid gray;
      transition: transform 0.5s;
    }
  }
}
li:hover img {
  box-shadow: 2px 2px 2px 2px rgba(76, 175, 80, 0.5);
  transform: translateX(-0.5rem) translateY(-0.5rem) scale3d(1.1, 1.1, 1.1);
}
li:hover h3 {
  transform: translateX(-0.5rem) translateY(-0.5rem) scale3d(1.1, 1.1, 1.1);
}
</style>
