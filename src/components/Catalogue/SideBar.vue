<template>
  <menu id="toggleMenu">
    <section class="filters__desktop">
      <h2 @click="setFilters">Фильтры</h2>
      <div v-if="filterIsSet">
        <div class="filter-option__desktop">
          <label for="filter-type__desktop">По типу:</label>
          <select name="type" id="filter-type__desktop">
            <option value="Любая">Любые</option>
            <option
              v-for="item in $store.getters.catalogue"
              :key="item.name"
              :value="item.name"
              >{{ item.name }}</option
            >
          </select>
        </div>
        <div class="filter-option__desktop">
          <label for="filter-price__desktop">По цене (руб):</label>
          <select name="price" id="filter-price__desktop">
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
          <button @click="clearFilters">
            Убрать фильтры
          </button>
          <button @click="applyFilters">Применить</button>
        </div>
      </div>
    </section>

    <nav class="sidebar-nav__container">
      <ul class="sidebar-list__items">
        <router-link to="/auth"
          ><li class="sidebar-list__item enter">Войти</li></router-link
        >

        <router-link to="/cactus"
          ><li class="sidebar-list__item delivery">Доставка</li></router-link
        >

        <router-link to="/cactus"
          ><li class="sidebar-list__item sales">Скидки</li></router-link
        >

        <li class="sidebar-list__item location">
          <h2 @click="openInfo" class="shop-location">Как нас найти</h2>
          <div v-if="infoIsOpened">
            <p>Наш адрес: г.Санкт-Петербург, Комендантский 17к1</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2389795602746!2d30.255201716175783!3d60.01111236321207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696343696da5921%3A0x9020ee07809b84e8!2z0JrQvtC80LXQvdC00LDQvdGC0YHQutC40Lkg0L_RgC4sIDE3INC60L7RgNC_0YPRgSAxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk3Mzcx!5e0!3m2!1sru!2sru!4v1631976866536!5m2!1sru!2sru"
              width="250"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <p>Время работы: 06.50 - 22.50</p>
          </div>
        </li>
      </ul>
    </nav>
  </menu>
</template>

<script>
export default {
  data() {
    return {
      filterIsSet: false,
      infoIsOpened: false,
    };
  },
  methods: {
    setFilters() {
      this.filterIsSet = !this.filterIsSet;
    },
    openInfo() {
      this.infoIsOpened = !this.infoIsOpened;
    },
    applyFilters() {
      this.clearFilters();
      let name = document.querySelector("#filter-type__desktop").value;
      console.log(name);
      let price = document.querySelector("#filter-price__desktop").value;
      console.log(price);

      this.$store.commit("setFiltered", {
        name: name,
        price: price,
      });
    },
    clearFilters() {
      this.$store.commit("clearFilters");
      console.log(123);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

#toggleMenu {
  background: $base-color;
  border: 1px solid $third-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18rem;
  flex-basis: 18rem;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0;
  position: fixed;
  top: 5rem;
  left: calc((100vw - 116rem) / 2);
  bottom: 5rem;
  @media (max-width: 115rem) {
    position: static;
    height: calc(100vh - 10rem);
  }
}
.filters__desktop {
  border: 1px solid $secondary-color;
  width: 100%;
  &:hover {
    background-color: $secondary-color;
  }
  h2 {
    cursor: pointer;
    display: flex;
    align-items: center;
    &::before {
      content: url("../../assets/filter.png");
      margin-right: 1.5rem;
    }
  }
}
.filter-option__desktop {
  margin: 0.3rem 0 1rem 0;
  text-align: start;
  display: flex;
  align-items: flex-start;
  label {
    display: block;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
  select {
    width: 90%;
    margin-right: 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
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
    box-shadow: 2px 2px 3px rgb(31, 30, 30);
    border-radius: 2rem;
    padding: 0.6rem;
    font-family: "Raleway", sans-serif;
    color: black;
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
      background-color: $third-color;
      color: $headers-color;
      font-weight: bold;
      border: none;
    }
  }
}
.sidebar-nav__container {
  width: 100%;
}
.sidebar-list__items {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  .sidebar-list__item {
    padding: 0.3rem;
    margin: 0.2rem 0;
    display: flex;
    align-items: center;
    color: black;
    font-size: 1.4rem;
    &:hover {
      background: $secondary-color;
    }
    &::before {
      margin-right: 1.5rem;
    }
    a {
      color: black;
      font-size: 1.5rem;
    }
    h2 {
      cursor: pointer;
    }
  }
  .sidebar-list__item.enter::before {
    content: url("../../assets/login.png");
  }
  .sidebar-list__item.delivery::before {
    content: url("../../assets/delivery.png");
  }
  .sidebar-list__item.sales::before {
    content: url("../../assets/sales.png");
  }
  .sidebar-list__item.location {
    flex-direction: column;
  }
  .shop-location {
    width: 100%;
    font-weight: 400;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    &::before {
      margin-right: 1.5rem;
      content: url("../../assets/location.png");
    }
  }
}
</style>
