<template>
  <main>
    <ul v-if="filters">
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
      v-show="!filters"
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
    <catalogue-cart></catalogue-cart>
  </main>
</template>

<script>
import CatalogueItem from "./CatalogueItem.vue";
import CatalogueCarousel from "./CatalogueCarousel.vue";
import CatalogueCart from "./CatalogueCart.vue";
export default {
  components: {
    CatalogueItem,
    CatalogueCarousel,
    CatalogueCart,
  },
  created() {
    if (this.$store.getters.catalogue.length === 0) {
      this.$store.dispatch("getItems");
    }
  },
  computed: {
    filters() {
      return this.$store.getters.filtered.length === 0 ? false : true;
    },
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
main {
  position: relative;
}
</style>
