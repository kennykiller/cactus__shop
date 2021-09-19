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
        @apply-filters="applyFilters"
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
    applyFilters(filters) {
      this.$store.commit("setFiltered", filters);
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
  @media (min-width: 768px) {
    margin: 0 auto;
  }
  // background: $base-color;
}
.toggle-button {
  position: absolute;
  left: 0.2rem;
  top: -1rem;
  @media (min-width: 80rem) {
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
// @media (min-width: 768px) {
//   .wrapper {
//     display: grid;
//     margin: 1.5rem;
//     grid-template-columns: repeat(4, 25%);
//     grid-template-rows: 3rem 45rem 1fr;
//     grid-gap: 10px;
//     grid-template-areas:
//       ". searchingField searchingField ."
//       "side main main main"
//       ". main main main";
//     justify-items: center;
//   }

//   .catalogue-filters {
//     grid-area: side;
//   }

//   .catalogue-main {
//     grid-area: main;
//   }
// }
</style>
