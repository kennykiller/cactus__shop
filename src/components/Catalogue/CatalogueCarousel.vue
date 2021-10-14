<template>
  <div class="carousel">
    <h3>{{ name }}</h3>
    <div
      class="carousel__list-container"
      :id="_name"
      @mouseover="displayArrows"
      @mouseout="hideArrows"
    >
      <ul class="carousel__list" :class="{ filtered: itemAmount }">
        <carousel-item
          v-for="item in carousel"
          :key="item.front"
          :id="item.name + item.front"
          :name="item.name"
          :price="item.price"
          :stock="item.stockLeft"
          :initialStock="item.initialStock"
          :counter="item.counter"
          :desc="item.description"
          :back="item.back"
          :front="item.front"
          :filtered="itemAmount"
        ></carousel-item>
      </ul>
      <div class="arrows">
        <div @click="scrollBack" class="arrow arrow-back">
          <img src="../../assets/arrow-back.png" alt="" />
        </div>
        <div @click="scrollForward" class="arrow arrow-forward">
          <img src="../../assets/arrow-forward.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  components: {
    CarouselItem,
  },
  props: ["carousel", "name"],
  computed: {
    _name() {
      return this.name.replace(/\s+/g, "");
    },
    itemAmount() {
      return this.carousel.length > 4 ? false : true;
    },
  },
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
      let div = document.querySelector(`#${this._name}`);
      this.sideScroll(div, "left", 40, 100, 25);
    },
    scrollForward() {
      let div = document.querySelector(`#${this._name}`);
      this.sideScroll(div, "right", 40, 100, 25);
    },
    chooseArrows() {
      let div = document.querySelector(`#${this._name}`);
      return div.lastElementChild;
    },
    displayArrows() {
      let arrows = this.chooseArrows();
      arrows.classList.add("active");
    },
    hideArrows() {
      let arrows = this.chooseArrows();
      arrows.classList.remove("active");
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
    @media (max-width: $default) {
      margin: 0.3rem 0;
    }
  }
}
.carousel__list-container {
  min-height: 20rem;
  width: auto;
  overflow-y: hidden;
  // overflow-x: hidden;

  @media (max-width: $default) {
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
  @media (min-width: $default) {
    overflow-x: hidden;
  }
}

.carousel__list {
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
  @media (max-width: $default) {
    margin: 0.5rem 0;
  }
}
.filtered {
  @media (min-width: $default) {
    justify-content: center;
  }
}

.arrows {
  transition: opacity 0.3s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;
  .arrow {
    position: absolute;
    height: 4rem;
    cursor: pointer;
  }
  .arrow-back {
    top: 50%;
    left: 3vw;
  }
  .arrow-forward {
    top: 50%;
    right: 3vw;
  }
}
.arrows.active {
  opacity: 1;
  height: auto;
  @media (max-width: $default) {
    display: none;
  }
}
</style>
