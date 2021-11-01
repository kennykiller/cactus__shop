<template>
  <li>
    <div class="similar-item--container">
      <img :src="require(`@/assets/${front}`)" alt="" />
      <div class="similar-item--info" v-if="price && desc">
        <span class="name">{{ desc }}</span>
        <span class="price">{{ price }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    desc: {
      required: false,
    },
    price: {
      required: false,
    },
    front: {
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
li {
  max-width: 10rem;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  .similar-item--container {
    position: relative;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    img {
      height: 16vh;
      box-shadow: 0.25rem 0.5rem 1rem lightgray;
      &:hover + .similar-item--info {
        opacity: 1;
      }
    }
    .similar-item--info {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      background-color: $base-color-transparent;
      box-shadow: 0.2rem 0.2rem 0.5rem black;
      min-width: 5rem;
      flex-direction: column;
      align-items: center;
      border-radius: 0.2rem;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease-in;
      padding: 0.2rem;
      span {
        font-size: 0.7rem;
        font-family: Georgia, "Times New Roman", Times, serif;
      }
      .price {
        font-weight: 700;
      }
    }
  }
}
</style>
