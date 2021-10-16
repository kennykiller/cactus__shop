<template>
  <div class="backdrop" @click="close"></div>
  <div class="base-form">
    <header class="base-header">
      <span class="fas fa-window-close" @click="toggleInfo"></span>
      <p class="free-delivery">
        Мы доставляем бесплатно в следующие районы Санкт-Петербурга
      </p>
      <p class="average-delivery">
        Среднее время доставки после заказа: 3,5 - 4 часа
      </p>
    </header>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1giV8xq86cb1W25CwvZKsQPXULV91h7LL"
      width="640"
      height="480"
      style="border-radius: 0.5rem"
      id="desktop-delivery"
    ></iframe>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1giV8xq86cb1W25CwvZKsQPXULV91h7LL"
      width="300"
      height="360"
      style="border-radius: 0.5rem"
      id="mobile-delivery"
    ></iframe>
    <p>Время работы: 06.50 - 22.50</p>
  </div>
</template>
<script>
export default {
  emits: ["toggle-info"],
  created() {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  },
  unmounted() {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  },
  methods: {
    toggleInfo() {
      this.$emit("toggle-info");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
@import "./sidebar-form.scss";
.backdrop,
#desktop-delivery {
  @media (max-width: $tablets) {
    display: none;
  }
}
#mobile-delivery {
  @media (min-width: $tablets) {
    display: none;
  }
}
.base-form {
  width: 42rem;
  box-shadow: 1rem 1rem 2.5rem $secondary-color;
  text-shadow: 1px 1px 2px $secondary-color;
  @media (max-width: $tablets) {
    width: 100vw;
    height: 70vh;
  }
  .base-header {
    flex-direction: column;
  }
  .fa-window-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.4s linear;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: $tablets) {
      top: 0.5rem;
    }
  }
}
.free-delivery {
  margin-top: 2rem;
}
.average-delivery {
  margin: 0;
  margin-bottom: 1rem;
}
</style>
