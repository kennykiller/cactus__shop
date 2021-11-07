<template>
  <div class="info--container" :class="{ loading: isLoading }">
    <div v-if="isLoading" class="loading-spinner">
      <span class="fa fa-spin fa-3x fa-spinner" aria-hidden="true"></span>
      <span>Информация о товаре загружается...</span>
    </div>
    <section class="item-info--section" v-else>
      <div class="item-name">
        <h2>{{ item.description }}</h2>
      </div>
      <div class="item-info--mobile">
        <div class="item-info--image mobile">
          <img :src="require(`@/assets/${item.front}`)" alt="" />
          <img :src="require(`@/assets/${item.back}`)" alt="" />
          <div class="price-container">
            <base-button v-if="item.counter < 2" @click="addToCart"
              >{{ item.price }} Руб</base-button
            >
            <div class="addToCart-container" v-else>
              <i class="far fa-minus-square fa-2x" @click="reduceFromCart"></i>
              <i class="fas fa-shopping-cart fa-2x"
                ><span>{{ quantity }}</span></i
              >
              <i class="far fa-plus-square fa-2x" @click="addToCart"></i>
            </div>
          </div>
          <div>
            <h3>Общая сумма этого товара: {{ totalForBucket }} Рублей</h3>
          </div>
        </div>
        <div class="info-description--mobile">
          <div class="info-sublist">
            <h3>В состав букета входят:</h3>
            <ul class="subflowers--list">
              <li>Роза кахала</li>
              <li>Гипсофила</li>
              <li>Альстромерия</li>
              <li>Фисташка</li>
              <li>Пион</li>
              <li>Подсолнух</li>
              <li>Эвкалипт</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="item-info--desktop">
        <div class="item-info--image desktop">
          <img :src="require(`@/assets/${item.front}`)" alt="" />
          <img :src="require(`@/assets/${item.back}`)" alt="" />
        </div>
        <div class="info-description--container">
          <div class="target-customers">
            <h2>{{ item.description }}</h2>
            <div class="price-container">
              <base-button v-if="item.counter < 2" @click="addToCart"
                >{{ item.price }} Руб</base-button
              >
              <div class="addToCart-container" v-else>
                <i
                  class="far fa-minus-square fa-2x"
                  @click="reduceFromCart"
                ></i>
                <i class="fas fa-shopping-cart fa-2x"
                  ><span>{{ quantity }}</span></i
                >
                <i class="far fa-plus-square fa-2x" @click="addToCart"></i>
              </div>
            </div>
            <div class="price-total">
              <h3>Цена за единицу: {{ item.price }} Рублей</h3>
              <h3>Общая сумма этого товара: {{ totalForBucket }} Рублей</h3>
            </div>
          </div>
          <div class="info-sublist">
            <h3>В состав букета входят:</h3>
            <ul class="subflowers--list">
              <li>Роза кахала</li>
              <li>Гипсофила</li>
              <li>Альстромерия</li>
              <li>Фисташка</li>
              <li>Пион</li>
              <li>Подсолнух</li>
              <li>Эвкалипт</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="similar-items-section" v-if="!isLoading">
      <div class="similar-items--container" @mouseover="stop" @mouseout="start">
        <p>Также Вас могут заинтересовать:</p>
        <div class="similar-items">
          <transition name="fade" mode="out-in">
            <ul class="similar-items--list" v-if="firstIsVisible">
              <similar-item
                v-for="item in items"
                :key="item.front"
                :name="item.name"
                :desc="item.description"
                :front="item.front"
                :price="item.price"
                @routeTo="routeToPage"
              ></similar-item>
            </ul>
            <ul class="similar-items--list" v-else>
              <similar-item
                v-for="item in items1"
                :key="item.front"
                :name="item.name"
                :desc="item.description"
                :front="item.front"
                :price="item.price"
                @routeTo="routeToPage"
              ></similar-item></ul
          ></transition>
        </div>
      </div>
      <div class="similar-items--container" @mouseover="stop" @mouseout="start">
        <p>С этим букетом Вам может понадобиться:</p>
        <div class="similar-items">
          <ul class="similar-items--list">
            <similar-item
              v-for="item in extra[0]"
              :key="item"
              :front="item"
            ></similar-item>
          </ul>
        </div>
      </div>
    </section>
    <div class="contacts">
      <div class="links--container">
        <a href="https://t.me/floristickaktusshop"
          ><i class="fab fa-telegram"></i
        ></a>
        <a href="https://vk.com/realmadridinmyheart"
          ><i class="fab fa-vk"></i
        ></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import SimilarItem from "../components/ItemInfo/SimilarItems.vue";
export default {
  components: {
    SimilarItem,
  },
  data() {
    return {
      item: null,
      items: null,
      items1: null,
      firstIsVisible: true,
      interval: null,
      extraInterval: null,
      extra: [],
      isLoading: false,
    };
  },
  async created() {
    if (this.$store.getters.catalogue.length === 0) {
      this.isLoading = true;
      await this.$store.dispatch("getItems");
      this.isLoading = false;
    }
    const params = this.$route.params.id;
    const num = +params.match(/\d/);
    const str = params.match(/\D/g).join("");
    const createdFront = str + "/" + num + ".jpg";
    let selectedItem = null;
    for (let arr of this.$store.getters.catalogue) {
      if (selectedItem !== undefined && selectedItem !== null) {
        break;
      } else {
        selectedItem = arr.find((obj) => obj.front === createdFront);
      }
    }
    this.item = selectedItem;
    const categoryName = selectedItem.name;
    let categoryArr = this.$store.getters.catalogue.find(
      (arr) => arr[0].name === categoryName
    );
    let similarArr = categoryArr.filter(
      (obj) => obj.front !== selectedItem.front
    );
    if (similarArr.length > 5) {
      const mid = Math.floor(similarArr.length / 2);
      this.items = similarArr.slice(0, mid);
      this.items1 = similarArr.slice(mid);
    } else {
      this.items = similarArr;
    }
    this.$store.dispatch("getItems", "extra");
  },
  mounted() {
    this.start();
    this.extraStart();
  },
  unmounted() {
    this.item = null;
    this.items = null;
    this.items1 = null;
    clearInterval(this.interval);
    clearInterval(this.extraInterval);
  },
  computed: {
    quantity() {
      if (this.item.counter === 1) {
        return 0;
      } else {
        return this.$store.getters.orders.find(
          (el) => this.item.name + this.item.front === el.id
        ).quantityOrdered;
      }
    },
    totalForBucket() {
      return this.item.price * this.quantity;
    },
  },
  methods: {
    stop() {
      clearInterval(this.interval);
    },
    start() {
      if (this.items1) {
        this.interval = setInterval(() => {
          this.firstIsVisible = !this.firstIsVisible;
        }, 7000);
      }
    },
    extraStart() {
      console.log(this.$store.getters.extraItems);
      this.extra = this.$store.getters.extraItems;
      console.log(this.extra);
      this.extraInterval = setInterval(() => {
        let lastBlock = this.extra.shift();
        this.extra.push(lastBlock);
      }, 5000);
    },
    routeToPage(shortId) {
      this.$router.push(`/iteminfo/${shortId}`);
    },
    addToCart() {
      this.$store.commit("addToCart", {
        id: this.item.name + this.item.front,
        name: this.item.name,
        price: this.item.price,
        quantityOrdered: this.item.counter,
        img: this.item.front,
        initialStock: this.item.initialStock,
      });
      this.$store.commit("qtyDecrease", {
        value: 1,
        id: this.item.name + this.item.front,
        name: this.item.name,
      });
    },
    reduceFromCart() {
      this.$store.commit("reduceFromCart", {
        id: this.item.name + this.item.front,
      });
      this.$store.commit("qtyIncrease", {
        value: 1,
        id: this.item.name + this.item.front,
        name: this.item.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../components/UI/prices.scss";
.info--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loading {
  align-items: center;
  justify-content: center;
  @media (max-width: $tablets) {
    width: 100%;
  }
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
.item-info--desktop {
  display: flex;
  justify-content: center;
  @media (max-width: $tablets) {
    display: none;
  }
}
.item-name {
  text-align: center;
  @media (min-width: $tablets) {
    display: none;
  }
}
.item-info--image {
  margin-right: 1.5rem;
  text-align: center;
  @media (max-width: $tablets) {
    margin: 0;
  }
  &.desktop {
    @media (max-width: 1023px) {
      display: none;
    }
  }
  &.mobile {
    .price-container {
      display: flex;
      justify-content: center;
    }
    @media (min-width: $default) {
      display: none;
    }
  }
  img {
    display: block;
    margin: 0.5rem auto;
    box-shadow: 3px 2px 3px lightgray;
    height: 70%;
    @media (max-width: $tablets) {
      width: 85%;
      margin-bottom: 1rem;
    }
  }
  img:nth-child(2) {
    display: none;
  }
  &:hover > img:nth-child(1) {
    display: none;
    box-shadow: none;
  }
  &:hover > img:nth-child(2) {
    display: block;
  }
}
.item-info--mobile {
  display: none;
  @media (max-width: $tablets) {
    display: flex;
    align-items: center;
  }
  .info-description--mobile {
    display: none;
    @media (max-width: $tablets) {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
    }
    h3 {
      margin-bottom: 1rem;
      margin-top: 0;
    }
    .info-sublist {
      .subflowers--list {
        padding-left: 1rem;
        list-style: circle;
        margin: 0;
        :not(li:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
.item-info--section {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 80%;
  max-height: 35vh;
  @media (max-width: $tablets) {
    flex-direction: column;
    width: 100%;
    margin-top: 0;
    max-height: none;
  }
}
.info--container {
  display: flex;
  flex-direction: column;
}
.item-info--container {
  display: flex;
  @media (max-width: $tablets) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}

.similar-items-section {
  max-height: 45%;
  width: 80%;
  display: flex;
  flex-direction: column;
  .similar-items--container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .similar-items {
      .similar-items--list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
        @media (max-width: $tablets) {
          padding: 0;
          justify-content: center;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


.info-description--container {
  display: flex;
  justify-content: space-between;
  .target-customers {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    @media (max-width: $tablets) {
      display: none;
    }
    h2,
    h3 {
      margin-top: 0;
    }
    .price-container {
      justify-content: flex-start;
      @media (max-width: $tablets) {
        justify-content: center;
      }
    }
    .price-total {
      margin-top: 1rem;
    }
  }
  .info-sublist {
    margin: 0 1.5rem;
    padding: 0 1rem;
    h3 {
      margin-top: 0;
    }
    .subflowers--list {
      padding: 0;
      list-style: circle;
      @media (max-width: $tablets) {
        margin: 0;
      }
      :not(li:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
}

.contacts {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  .links--container {
    display: flex;
    a {
      color: black;
      :not(a:first-child) {
        margin-left: 1rem;
      }
      .fab {
        font-size: 1.5rem;
      }
      .fa-vk {
        color: #0077ff;
      }
      .fa-telegram {
        color: #30a3e6;
      }
      .fa-whatsapp {
        color: #4ced69;
      }
    }
  }
}
</style>
