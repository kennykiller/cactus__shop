<template>
  <div class="backdrop" @click="close"></div>
    <div class="container">
      <h1>Фильтры</h1>
      <div class="filter-option__mobile">
        <label for="filter-type__mobile">По типу растений:</label>
        <select name="type" id="filter-type__mobile">
          <option value="Любая">Любые</option>
          <option
            v-for="item in $store.getters.catalogue"
            :key="item[0].name"
            :value="item[0].name"
            >{{ item[0].name }}</option
          >
        </select>
      </div>
      <div class="filter-option__mobile">
        <label for="filter-price__mobile">По цене (руб):</label>
        <select name="price" id="filter-price__mobile">
          <option value="Любая">Любая</option>
          <option value="0    1000">До 1000</option>
          <option value="1000 1500">1000 - 1500</option>
          <option value="1500 2500">1500 - 2500</option>
          <option value="2500 5000">2500 - 5000</option>
          <option value="5000 9999">5000 - 9999</option>
          <option value="9999 9999999">Дороже 10000</option>
        </select>
      </div>

      <div class="button-container">
        <button @click="clearFilters">Убрать фильтры</button>
        <button @click="applyFilters">Применить</button>
      </div>
      <p v-if="noMatch">
        К сожалению нет соответствий Вашим требованиям.
      </p>
    </div>
</template>

<script>
export default {
  emits: ["close"],
  created() {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  },
  unmounted() {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  },
  computed: {
    noMatch() {
      return !!this.$store.getters.noMatch;
    },
  },
  methods: {
    applyFilters() {
      this.clearFilters();
      this.$store.commit("matchDefault");
      let name = document.querySelector("#filter-type__mobile").value;
      let price = document.querySelector("#filter-price__mobile").value;

      this.$store.commit("setFiltered", {
        name: name,
        price: price,
      });

      if (this.$store.getters.filtered.length === 0) {
        this.$store.dispatch("setMatch");
      } else {
        this.$emit("close");
      }
    },
    clearFilters() {
      this.$store.commit("clearFilters");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  left: 0;
  top: 7vh;
  width: 100%;
  background-color: white;
  border: 1px solid rgb(161, 161, 161);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5001;
  animation: filters .3s ease;
}

@keyframes filters {
  from {
    transform: scale(0.9) translateX(-40rem);
  }
  to {
    transform: scale(1) translateX(0);
  }
}

h1 {
  margin-left: 1.5rem;
  margin-bottom: 0;
}

.filter-option__mobile {
  margin: 0.5rem 0 1.5rem 1.5rem;
  text-align: start;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  select {
    width: 95%;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    padding: 0.5rem;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  select::-ms-expand {
    display: none;
  }
  select:hover {
    border-color: #888;
  }
  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    color: #222;
    outline: none;
  }
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  button {
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    padding: 0.6rem;
    font-family: "Raleway", sans-serif;
    color: black;
    cursor: pointer;
    margin-bottom: 1rem;
  }
}
p {
  text-align: center;
}
</style>
