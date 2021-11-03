<template>
  <li v-if="price && desc">
    <div class="similar-item--container" @click="goToItem">
      <img :src="require(`@/assets/${front}`)" alt="" />
      <div class="similar-item--info">
        <div class="name">
          <span>{{ desc }}</span>
        </div>
        <span class="price">{{ price }}</span>
      </div>
    </div>
  </li>
  <li class="extra-block" v-else>
    <div class="similar-item--container extra">
      <img class="extra-img" :src="require(`@/assets/${front}`)" alt="" />
      <div class="extra similar-item--info">
        <span class="price">{{ randomPrice }}</span>
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
    name: {
      required: false
    }
  },
  emits: ["routeTo"],
  computed: {
    randomPrice() {
      return Math.floor(Math.random() * 3000);
    },
  },
  methods: {
    goToItem() {
      let regexp = this.front.match(/\w+\/\d/);
      let shortId = regexp[0].replace("/", "");
      this.$emit('routeTo', shortId)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
li {
  height: 14rem;
  display: flex;
  justify-content: center;
  .similar-item--container {
    position: relative;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
    box-shadow: 0.25rem 0.5rem 1rem lightgray;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    width: 12rem;
    cursor: pointer;
    img {
      height: 16vh;
      margin-bottom: 1rem;
    }
    .similar-item--info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      .name,
      .price {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-family: Georgia, "Times New Roman", Times, serif;
      }
      .price {
        font-weight: 700;
      }
    }
  }
}
.extra-block {
  height: auto;
}
.extra-img {
  margin: 0 !important;
}
.extra.similar-item--info {
  margin: 0.5rem 0;
}
</style>
