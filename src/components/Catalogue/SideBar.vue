<template>
  <menu id="toggleMenu">
    <div class="wrapper">
      <nav class="sidebar-nav__container">
        <ul class="sidebar-list__items">
          <li class="sidebar-list__item filter">
            <div
              v-if="hint.filter && !filterIsSet"
              class="notification filter-notification"
            >
              Настроить фильтры
            </div>
            <section class="filters__desktop">
              <span
                @click="setFilters"
                class="fas fa-filter"
                @mouseover="showHint('filter')"
                @mouseout="hideHint('filter')"
              ></span>
              <div class="filters__opened" :class="{ active: filterIsSet }">
                <div class="filter-option__desktop">
                  <label for="filter-type__desktop">Тип:</label>
                  <select name="type" id="filter-type__desktop">
                    <option value="Любая">Любые</option>
                    <option
                      v-for="item in $store.getters.catalogue"
                      :key="item[0].name"
                      :value="item[0].name"
                      >{{ item[0].name }}</option
                    >
                  </select>
                </div>
                <div class="filter-option__desktop">
                  <label for="filter-price__desktop">Цена:</label>
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
          </li>
          <li
            class="sidebar-list__item login"
            v-if="!isAuthenticated"
            @mouseover="showHint('login')"
            @mouseout="hideHint('login')"
            @click="this.$router.push('auth')"
          >
            <div v-if="hint.login" class="notification login-notification">
              Войти в аккаунт
            </div>
          </li>
          <li
            v-if="isAuthenticated"
            class="sidebar-list__item logout"
            @click="logout"
            @mouseover="showHint('logout')"
            @mouseout="hideHint('logout')"
          >
            <div v-if="hint.logout" class="notification logout-notification">
              Выход из аккаунта
            </div>
          </li>
          <li
            class="sidebar-list__item delivery"
            @mouseover="showHint('delivery')"
            @mouseout="hideHint('delivery')"
            @click="toggleInfo('delivery')"
          >
            <div
              v-if="hint.delivery"
              class="notification delivery-notification"
            >
              Условия доставки
            </div>
          </li>
          <li
            class="sidebar-list__item sales"
            @mouseover="showHint('sales')"
            @mouseout="hideHint('sales')"
            @click="toggleInfo('sales')"
          >
            <div v-if="hint.sales" class="notification sales-notification">
              Скидки
            </div>
          </li>
          <li
            class="sidebar-list__item location"
            @mouseover="showHint('location')"
            @mouseout="hideHint('location')"
          >
            <span
              class="fas fa-search-location"
              @click="toggleInfo('location')"
            ></span>
            <div v-if="hint.location" class="notification sales-notification">
              Где нас найти
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </menu>
  <shop-location
    v-if="infoIsOpened.location"
    @toggleInfo="toggleInfo('location')"
  ></shop-location>
  <delivery
    v-if="infoIsOpened.delivery"
    @toggleInfo="toggleInfo('delivery')"
  ></delivery>
  <sales v-if="infoIsOpened.sales" @toggleInfo="toggleInfo('sales')"></sales>
  <base-dialog
    v-if="infoIsOpened.delivery || infoIsOpened.location || infoIsOpened.sales"
    :show="false"
  ></base-dialog>
</template>

<script>
import Sales from "../Sidebar/Sales.vue";
import Delivery from "../Sidebar/Delivery.vue";
import ShopLocation from "../Sidebar/ShopLocation.vue";

export default {
  components: {
    ShopLocation,
    Delivery,
    Sales,
  },
  data() {
    return {
      filterIsSet: false,
      infoIsOpened: {
        delivery: false,
        location: false,
        sales: false,
      },
      hint: {
        filter: false,
        login: false,
        logout: false,
        delivery: false,
        sales: false,
        location: false,
      },
    };
  },
  computed: {
    isAuthenticated() {
      return !!this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    showHint(item) {
      this.hint[item] = true;
    },
    hideHint(item) {
      this.hint[item] = false;
    },
    setFilters() {
      this.filterIsSet = !this.filterIsSet;
    },
    toggleInfo(item) {
      this.infoIsOpened[item] = !this.infoIsOpened[item];
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
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

#toggleMenu {
  background: linear-gradient(
    to right bottom,
    $base-color,
    $base-color-transparent,
    $secondary-color-transparent,
    $secondary-color,
    $fourth-color
  );
  background-size: 300% 300%;
  animation: menu-gradient 6s ease infinite;
  border: 1px solid $third-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18rem;
  width: 4rem;
  flex-grow: 0;
  padding: 0;
  position: fixed;
  top: 5rem;
  left: calc((100vw - 116rem) / 2);
  bottom: 5rem;
  border-radius: 0.5rem;
  @media (max-width: 115rem) {
    position: static;
    height: calc(100vh - 10rem);
  }
  .wrapper {
    width: 100%;
  }
}

@keyframes menu-gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.filters__desktop {
  width: 100%;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  .filters__opened {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 18rem;
    right: 0;
    top: 0;
    transform: translateX(19rem);
    padding: 0.2rem;
    border-radius: 0.5rem;
    z-index: 100;
    background-color: $secondary-color;
    transition: all 0.5s ease;
    &.active {
      opacity: 1;
      pointer-events: painted;
    }
  }
}
.notification {
  display: block;
  position: absolute;
  width: 8rem;
  height: 3.5rem;
  top: 0;
  right: 0;
  transform: translateX(9rem);
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  box-shadow: 0.2rem 0.2rem 0.5rem black;
  z-index: 50;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter-option__desktop {
  margin: 0.3rem 0 1rem 0;
  text-align: start;
  display: flex;
  align-items: center;
  label {
    display: block;
    margin: 0.5rem;
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
    border-radius: 0.25rem;
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
  z-index: 50;
}
.sidebar-list__items {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  .sidebar-list__item {
    position: relative;
    cursor: pointer;
    padding: 0.3rem;
    margin: 0.2rem 0;
    display: flex;
    align-items: center;
    color: black;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    &:not(.sidebar-list__item.filter):hover {
      transform: scale(1.15);
    }
    h2 {
      cursor: pointer;
    }
  }
  .sidebar-list__item.login::before {
    content: url("../../assets/login.png");
  }
  .sidebar-list__item.logout::before {
    content: url("../../assets/logout.png");
  }
  .sidebar-list__item.delivery::before {
    content: url("../../assets/delivery.png");
  }
  .sidebar-list__item.sales::before {
    content: url("../../assets/sales.png");
  }
}
.fa-search-location,
.fa-filter {
  font-size: 2.7rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgb(19, 18, 18);
  font-weight: 700;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
