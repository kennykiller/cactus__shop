<template>
  <div class="backdrop" @click="close"></div>
  <div class="base-form">
    <header class="base-header">
      <p>В нашем магазине применяются следующие акции:</p>
      <span class="fas fa-window-close" @click="toggleInfo"></span>
    </header>
    <main>
      <ul class="sales-items-list">
        <li class="sales-item">
          <p>
            Если Вы сделали заказ в
            <span class="sales-condition"
              >день рождения или в течение пяти дней</span
            >
            до него.
          </p>
          <div class="img-container">
            <img
              src="https://res.cloudinary.com/dxxd2c3du/image/upload/c_scale,w_180/v1633244774/1-3-760x507_ksnl9c.jpg"
              alt=""
            />
            <base-badge :price="true">-20%</base-badge>
          </div>
        </li>
        <li class="sales-item">
          <div class="img-container">
            <img
              src="https://res.cloudinary.com/dxxd2c3du/image/upload/c_scale,w_180/v1633244111/svad-11_ml56ss.jpg"
              alt=""
            />
            <base-badge :price="true">-30%</base-badge>
          </div>
          <p>
            Если Вы сделали заказ
            <span class="sales-condition"
              >в день свадьбы или в течение пяти дней до нее</span
            >.
          </p>
        </li>
        <li class="sales-item">
          <p>
            Если Вы сделали заказ
            <span class="sales-condition"
              >31 августа, 1-го сентября или на выпускной</span
            >.
          </p>
          <div class="img-container">
            <img
              src="https://res.cloudinary.com/dxxd2c3du/image/upload/c_scale,w_180/v1633244673/x_4ed6cb24_trypf9.jpg"
              alt=""
            />
            <base-badge :price="true">-15%</base-badge>
          </div>
        </li>
      </ul>
    </main>
    <footer>
      <p>Акции распространяются только на самовывоз</p>
    </footer>
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
.backdrop {
  @media (max-width: $tablets) {
    display: none;
  }
}
.base-form {
  box-shadow: 1rem 1rem 2.5rem $fourth-color;
  text-shadow: 1px 1px 2px $fourth-color;
  width: 45rem;
  top: 45%;
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
  }
  @media (max-width: $tablets) {
    width: 100vw;
    top: 0;
    height: 100vh;
    left: 0;
    transform: none;
  }
  @media (min-width: $tablets) and (max-width: $default) {
    width: 60vw;
    height: 55vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -45%);
    justify-content: center;
  }
}
.sales-items-list {
  padding: 0;
  margin: 0;
  .sales-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    .img-container {
      position: relative;
      box-shadow: 0.25rem 0.25rem 0.5rem lightgray;
      background-color: $fourth-color;
      &:hover img {
        transform: translate(-0.3rem, -0.3rem);
      }
      img {
        display: block;
        transition: all 0.5s ease;
      }
    }
    p {
      max-width: 14rem;
      text-align: center;
      margin: 0 3rem;
      @media (max-width: $tablets) {
        margin: 0;
      }
      .sales-condition {
        font-style: italic;
        font-weight: 700;
        color: rgb(165, 72, 72);
      }
    }
    @media (max-width: $tablets) {
      margin-bottom: 1rem;
    }
  }
}
footer > p {
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
}
</style>
