<template>
  <li class="carousel__item">
    <div class="carousel__image-container" >
      <img :src="require(`@/assets/${front}`)" alt=""/>
      <img :src="require(`@/assets/${back}`)" alt=""/>
    </div>
    <div class="description-container">
      <p>{{ desc }}</p>
      <base-button v-if="counter < 2">{{ price }} Руб</base-button>
      <div class="addToCart-container" v-else>
        <button>-</button>
        <div class="counter-container">{{ counter }}</div>
        <button>+</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "desc", "back", "front", "counter", "price"],
};
</script>

<style lang="scss" scoped>
.carousel__item {
  margin: 0 0.3rem;
  min-height: 15rem;
  min-width: 15rem;
  border: 1px solid black;
  .carousel__image-container {
    img {
      display: block;
      margin: 0.5rem auto;
      height: 90%;
      width: 90%;
      // object-fit: contain;
      border: 1px solid lightgray;
    }
    img:nth-child(2) {
      display: none;
      border: 0;
    }
  }
}
.carousel__image-container:hover > img:nth-child(1) {
  display: none;
  border: 0;
}
.carousel__image-container:hover > img:nth-child(2) {
  display: block;
  border: 1px solid lightgray;
}
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  font-family: "Raleway", sans-serif;
}
.addToCart-container {
  display: flex;
  align-items: center;
  button {
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.counter-container {
  width: 3rem;
  height: 3rem;
  border: 1px solid lightgray;
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
