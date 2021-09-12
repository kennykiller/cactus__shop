<template>
  <main>
    <ul class="catalogue-items__list" v-show="!filters && !isMobile">
      <catalogue-item
        v-for="item in $store.getters.catalogue"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :popularity="item.popularity"
        :stock="item.stockLeft"
        :counter="item.counter"
        :img="item.imgSrc"
      >
      </catalogue-item>
    </ul>

    <ul v-show="filters && !isMobile">
      <catalogue-item
        v-for="item in $store.getters.filtered"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :popularity="item.popularity"
        :stock="item.stockLeft"
        :counter="item.counter"
        :img="item.imgSrc"
      >
      </catalogue-item>
    </ul>

    <catalogue-carousel
      v-show="isMobile"
      v-for="item in $store.getters.catalogue"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :popularity="item.popularity"
      :stock="item.stockLeft"
      :counter="item.counter"
      :desc="item.description"
      :carousel="item.carousel"
    >
    </catalogue-carousel>
  </main>
</template>

<script>
import CatalogueItem from "./CatalogueItem.vue";
import CatalogueCarousel from "./CatalogueCarousel.vue";
export default {
  components: {
    CatalogueItem,
    CatalogueCarousel,
  },
  data() {
    return {
      isMobile: null
    }
  },
  created() {
    if (this.$store.getters.catalogue.length === 0) {
      this.$store.dispatch("getItems");
    }
    window.addEventListener("resize", this.isMobileView);
  },
  computed: {
    filters() {
      return this.$store.getters.filtered.length === 0 ? false : true;
    },
  },
  methods: {
    isMobileView() {
      // console.log(document.documentElement.clientWidth);
      if (document.documentElement.clientWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.mobileView);
  },
};
</script>

<style lang="scss" scoped>
.catalogue-items__list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-inline-start: 0;
}
</style>
