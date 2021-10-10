<template>
  <main :class="{ loading: isLoading }">
    <div v-if="isLoading" class="loading-spinner">
      <span class="fa fa-spin fa-3x fa-spinner" aria-hidden="true"></span>
      <span>Список товаров загружается...</span>
    </div>
    <div v-if="filter">
      <!--available just for one filter -->
      <catalogue-carousel
        v-for="item in $store.getters.filtered"
        :key="item[0].name"
        :carousel="item"
        :name="item[0].name"
      >
      </catalogue-carousel>
    </div>
    <div v-else-if="filters">
      <!--available just for two filters -->
      <catalogue-carousel
        :carousel="$store.getters.filtered"
        :name="$store.getters.filtered[0].name"
      >
      </catalogue-carousel>
    </div>
    <div v-else>
      <catalogue-carousel
        v-for="item in $store.getters.catalogue"
        :key="item[0].name"
        :carousel="item"
        :name="item[0].name"
      >
      </catalogue-carousel>
    </div>
  </main>
</template>

<script>
import CatalogueCarousel from "./CatalogueCarousel.vue";
export default {
  components: {
    CatalogueCarousel,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  async created() {
    if (this.$store.getters.catalogue.length === 0) {
      this.isLoading = true;
      await this.$store.dispatch("getItems");
      this.isLoading = false;
    }
  },
  computed: {
    filter() {
      console.log(Object.keys(this.$store.getters.objFiltered));
      return Object.keys(this.$store.getters.objFiltered).length === 1;
    },
    filters() {
      return Object.keys(this.$store.getters.objFiltered).length === 2;
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
.loading {
  align-items: center;
  justify-content: center;
  .loading-spinner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    span {
      padding: 1rem;
    }
  }
}
</style>
