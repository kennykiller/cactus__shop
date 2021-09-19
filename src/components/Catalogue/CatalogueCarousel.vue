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
  props: ["id", "name", "popularity", "carousel"],
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
  &::-webkit-scrollbar {
    height: 0.7rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  @media (min-width: 80rem) {
    .carousel__list-container {
      min-height: 25rem;
      width: auto;
      overflow-x: none;
    }
    .carousel__list {
      justify-content: space-between;
    }
  }
}

.carousel__list {
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
}
</style>
