<template>
  <div class="base-form">
    <header class="base-header">
      <p>г.Санкт-Петербург, Комендантский 17к1</p>
      <span class="fas fa-window-close" @click="toggleInfo"></span>
    </header>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2389795602746!2d30.255201716175783!3d60.01111236321207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696343696da5921%3A0x9020ee07809b84e8!2z0JrQvtC80LXQvdC00LDQvdGC0YHQutC40Lkg0L_RgC4sIDE3INC60L7RgNC_0YPRgSAxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk3Mzcx!5e0!3m2!1sru!2sru!4v1631976866536!5m2!1sru!2sru"
      width="370"
      height="370"
      style="border:0;border-radius: 0.5rem"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <p>Время работы: 06.50 - 22.50</p>
  </div>
</template>

<script>
export default {
  emits: ["toggle-info"],
  methods: {
    toggleInfo() {
      this.$emit("toggle-info");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
@import './sidebar-form.scss';
  .fa-window-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.4s linear;
    &:hover {
      transform: scale(1.2);
    }
  }
</style>
