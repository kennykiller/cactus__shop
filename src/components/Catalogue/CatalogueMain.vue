<template>
  <main>
    <ul class="catalogue-items__list" v-if="!filters">
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

    <ul v-else>
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
  </main>
</template>

<script>
import CatalogueItem from "./CatalogueItem.vue";
export default {
  components: {
    CatalogueItem,
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
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
</style>
