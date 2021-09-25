<template>
  <div class="carousel">
    <h3>{{ name }}</h3>
    <div class="carousel__list-container" :id="id">
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
    <base-button @click="scrollBack" class="arrow-back">
      <img src="../../assets/arrow-back.png" alt="" />
    </base-button>
    <base-button @click="scrollForward" class="arrow-forward"
      ><img src="../../assets/arrow-forward.png" alt=""
    /></base-button>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  components: {
    CarouselItem,
  },
  props: ["id", "name", "popularity", "carousel"],
  methods: {
    sideScroll(element, direction, speed, distance, step) {
      let scrollAmount = 0;
      let slideTimer = setInterval(function() {
        if (direction === "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    },
    scrollBack() {
      let div = document.querySelector(`#${this.id}`);
      this.sideScroll(div, "left", 25, 100, 10);
    },
    scrollForward() {
      let div = document.querySelector(`#${this.id}`);
      this.sideScroll(div, "right", 25, 100, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
.carousel {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
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
  overflow-x: hidden;
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
      // justify-content: center;
    }
  }
}

.carousel__list {
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
}

.arrow-back {
  position: absolute;
  top: 50%;
  left: 3rem;
}
.arrow-forward {
  position: absolute;
  top: 50%;
  right: 3rem;
}
</style>
