<template>
  <main>
    <div v-if="filters">
      <catalogue-carousel
        v-for="item in $store.getters.filtered"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :popularity="item.popularity"
        :carousel="item.carousel"
      >
      </catalogue-carousel>
    </div>
    <div v-else>
      <catalogue-carousel  
        v-for="item in $store.getters.catalogue"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :popularity="item.popularity"
        :carousel="item.carousel"
      >
      </catalogue-carousel>
    </div>
    <catalogue-cart></catalogue-cart>
  </main>
</template>

<script>
import CatalogueCarousel from "./CatalogueCarousel.vue";
import CatalogueCart from "./CatalogueCart.vue";
export default {
  components: {
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
  padding-inline-start: 0;
}
main {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 18rem);
  overflow-y: auto;
  height: calc(100vh - 10rem);
  &::-webkit-scrollbar {
    width: 0.7rem;
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
}
</style>
