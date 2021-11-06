<template>
  <div class="wrapper">
    <side-bar></side-bar>
    <div class="toggle-button">
      <img src="../assets/filter.png" alt="" @click="toggleFilters" />
    </div>

      <catalogue-filters
        v-if="filtersAreVisible"
        class="catalogue-filters"
        @close="toggleFilters"
      ></catalogue-filters>

    <catalogue-main class="catalogue-main"></catalogue-main>
  </div>
</template>

<script>
import CatalogueFilters from "../components/Catalogue/CatalogueFilters.vue";
import CatalogueMain from "../components/Catalogue/CatalogueMain.vue";
import SideBar from "../components/Catalogue/SideBar.vue";

export default {
  components: {
    CatalogueFilters,
    CatalogueMain,
    SideBar,
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
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 78rem;
}
.toggle-button {
  position: absolute;
  left: 0.2rem;
  z-index: 300;
  @media (min-width: $default) {
    display: none;
  }
}
.catalogue-main {
  overflow-y: scroll;
}
</style>
