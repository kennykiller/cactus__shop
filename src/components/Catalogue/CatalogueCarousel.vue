<template>
  <div class="carousel">
    <h3>{{ name }}</h3>
    <div class="carousel__list-container">
      <ul class="carousel__list">
        <carousel-item
          v-for="item in carousel"
          :key="item.front"
          :id="id + item.front"
          :name="name"
          :price="item.price"
          :popularity="popularity"
          :stock="item.stockLeft"
          :initialStock="item.initialStock"
          :counter="item.counter"
          :desc="item.description"
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
    "popularity",
    "carousel",
  ],
};
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: rgb(58, 100, 58);
  }
}
.carousel__list-container {
  min-height: 20rem;
  width: auto;
  overflow-x: auto;
  overflow-y: hidden;
}
@media (min-width: 748px) {
  .carousel__list-container {
    min-height: 25rem;
    width: auto;
    overflow-x: none;
  }
  .carousel__list {
    justify-content: space-between;
  }
}
.carousel__list-container::-webkit-scrollbar {
  height: 0.5rem;
  background-color: #aaa;
}

.carousel__list {
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
}

</style>
