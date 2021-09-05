<template>
  <div class="wrapper">
    <base-dialog
      v-if="filtersAreVisible"
      :show="false"
      @close="toggleFilters"
    ></base-dialog>
    <base-setting
      class="toggle-button"
      img="titanic titanic-toggle"
      @click="toggleFilters"
    ></base-setting>
    <catalogue-filters
      v-if="filtersAreVisible"
      class="catalogue-filters"
      @apply-filters="applyFilters"
    ></catalogue-filters>
    <catalogue-main class="catalogue-main"></catalogue-main>
  </div>
</template>

<script>
import CatalogueFilters from "../components/Catalogue/CatalogueFilters.vue";
import CatalogueMain from "../components/Catalogue/CatalogueMain.vue";

export default {
  components: {
    CatalogueFilters,
    CatalogueMain,
  },
  data() {
    return {
      filtersAreVisible: false,
    };
  },
  methods: {
    toggleFilters() {
      this.filtersAreVisible = !this.filtersAreVisible;
    },
    applyFilters(filters) {
      this.$store.commit("setFiltered", filters);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 1rem;
  display: block;
  flex-direction: column;
  position: relative;
}
.toggle-button {
  position: absolute;
  left: 0.2rem;
  top: 1rem;
}

@media (min-width: 768px) {
  .wrapper {
    display: grid;
    margin: 1.5rem;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 3rem 45rem 1fr;
    grid-gap: 10px;
    grid-template-areas:
      ". searchingField searchingField ."
      "side main main main"
      ". main main main";
    justify-items: center;
  }

  .catalogue-filters {
    grid-area: side;
  }

  .catalogue-main {
    grid-area: main;
  }
}
</style>
