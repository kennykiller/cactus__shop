<template>
  <div class="carousel" v-if="stock > 0">
    <h3>{{ name }}</h3>
    <div class="carousel__list-container">
      <ul class="carousel__list">
        <carousel-item
          v-for="item in carousel"
          :key="item.front"
          :id="item.front"
          :name="name"
          :price="price"
          :popularity="popularity"
          :stock="stock"
          :counter="counter"
          :desc="desc"
          :back="item.back"
          :front="item.front"
        ></carousel-item>
      </ul>
    </div>
  </div>
</template>

<script>
// import CarouselItem from "./CarouselItem.vue";
export default {
  components: [],
  props: [
    "id",
    "name",
    "price",
    "popularity",
    "stock",
    "counter",
    "desc",
    "carousel",
  ],
};
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.carousel__list-container {
  min-height: 20rem;
  width: auto;
  overflow-x: auto;
}
.carousel__list-container::-webkit-scrollbar {
  height: 0.3rem;
  background-color: #aaa;
}

.carousel__list {
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
}
.carousel__item {
  margin: 0 0.3rem;
  min-height: 15rem;
  min-width: 15rem;
  border: 1px solid black;
  .carousel__image-container {
    img {
      margin: 0.5rem 0 0 0;
      height: 90%;
      width: 90%;
      // object-fit: contain;
      border: 1px solid lightgray;
    }
  }
}
.carousel__image-container:hover img {
  opacity: 0;
  border: 0;
}
.carousel__image-container:hover {
  background-image: url("../../assets/roses/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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
}
</style>
