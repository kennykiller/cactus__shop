<template>
  <div class="info--container">
    <section class="item-info--section">
      <div class="item-info--container">
        <div class="item-info--image">
          <img :src="require(`@/assets/${item.front}`)" alt="" />
          <img :src="require(`@/assets/${item.back}`)" alt="" />
          <h2>{{ item.description }}</h2>
        </div>
        <div class="info-description--container">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            iusto beatae voluptatem illum suscipit illo, ea dignissimos libero
            iure nisi. Eos, culpa architecto reiciendis laboriosam maxime atque
            aliquid amet neque.
          </div>

          <div>
            <h3>Цена за единицу: {{ item.price }}</h3>
            <h3>Общая сумма:</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="similar-items-section">
      <div class="similar-items--container">
        <p>Также Вас могут заинтересовать:</p>
        <div class="similar-items">
          <ul class="similar-items--list">
            <similar-item
              v-for="item in items"
              :key="item.front"
              :name="item.name"
              :desc="item.description"
              :front="item.front"
              :price="item.price"
            ></similar-item>
          </ul>
        </div>
      </div>
      <div class="similar-items--container">
        <p>С этим букетом Вам может понадобиться:</p>
        <div class="similar-items">
          <ul class="similar-items--list">
            <similar-item
              v-for="item in items"
              :key="item.front"
              :name="item.name"
              :desc="item.description"
              :front="item.front"
              :price="item.price"
            ></similar-item>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SimilarItem from "../components/ItemInfo/SimilarItems.vue";
export default {
  components: {
    SimilarItem,
  },
  data() {
    return {
      item: null,
      items: null,
    };
  },
  created() {
    const params = this.$route.params.id;
    const num = +params.match(/\d/);
    const str = params.match(/\D/g).join("");
    const createdFront = str + "/" + num + ".jpg";
    let selectedItem = null;
    for (let arr of this.$store.getters.catalogue) {
      if (selectedItem !== undefined && selectedItem !== null) {
        break;
      } else {
        selectedItem = arr.find((obj) => obj.front === createdFront);
      }
    }
    this.item = selectedItem;
    const categoryName = selectedItem.name;
    let categoryArr = this.$store.getters.catalogue.find(
      (arr) => arr[0].name === categoryName
    );
    console.log(categoryArr);
    let similarArr = categoryArr.filter(
      (obj) => obj.front !== selectedItem.front
    );
    console.log(similarArr);
    this.items = similarArr;
  },
  unmounted() {
    this.item = null;
    this.items = null;
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
.info--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-info--section {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 80%;
  max-height: 40vh;
}
.info--container {
  display: flex;
  flex-direction: column;
}
.item-info--container {
  display: flex;
  justify-content: space-between;
}
.item-info--image {
  margin-right: 1.5rem;
  text-align: center;
  img {
    display: block;
    margin: 0.5rem auto;
    box-shadow: 3px 2px 3px lightgray;
    height: 70%;
  }
  img:nth-child(2) {
    display: none;
  }
  &:hover > img:nth-child(1) {
    display: none;
    box-shadow: none;
  }
  &:hover > img:nth-child(2) {
    display: block;
  }
}
.info-description--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.similar-items-section {
  max-height: 45%;
  width: 80%;
  display: flex;
  flex-direction: column;
  .similar-items--container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .similar-items {
      width: 100%;
      .similar-items--list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        width: 100%;
      }
    }
  }
}
</style>
