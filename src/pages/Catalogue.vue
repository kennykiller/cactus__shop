<template>
  <base-dialog
    v-if="filtersAreVisible"
    :show="false"
    @close="toggleFilters"
  ></base-dialog>
  <div class="wrapper">
    <side-bar></side-bar>
    <div class="toggle-button">
      <img src="../assets/filter.png" alt="" @click="toggleFilters" />
    </div>
    <transition name="filters">
      <catalogue-filters
        v-if="filtersAreVisible"
        class="catalogue-filters"
        @close="toggleFilters"
      ></catalogue-filters>
    </transition>

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
  @media (min-width: $tablets) {
    display: none;
  }
}

.filters-enter-active {
  transition: all 0.3s ease-out;
}

.filters-leave-active {
  transition: all 0.3s ease-in;
}

.filters-enter-from,
.filters-leave-to {
  transform: scale(0.9) translateX(-40rem);
}

.filters-enter-to,
.filters-leave-from {
  transform: scale(1) translateX(0);
}

.catalogue-main {
  overflow-y: scroll;
}
</style>
