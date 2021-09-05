<template>
  <main class="container">
    <h1>Цветы - залог счастья</h1>
    <div class="items__main">
      <ul class="items-list">
        <base-card v-for="item in baseItems"
        :key="item.itemName"
        :itemName="item.itemName"
        :link="item.source"
        ></base-card>
        <!-- <li>
          <router-link to="/cactus">Сухоцветы</router-link
          ><img src="../assets/sukho.jpg" alt="" />
        </li>
        <li>
          <router-link to="/cactus">Розы</router-link
          ><img src="../assets/rose.jpg" alt="" />
        </li>
        <li>
          <router-link to="/cactus">Кустовые цветы</router-link
          ><img src="../assets/kust.jpg" alt="" />
        </li>
        <li>
          <router-link to="/cactus">Горшечные цветы</router-link
          ><img src="../assets/gorsh.jpg" alt="" />
        </li>
        <li>
          <router-link to="/cactus">Букеты</router-link
          ><img src="../assets/bucket.jpg" alt="" />
        </li>
        <li>
          <router-link to="/cactus">Экзотика</router-link
          ><img src="../assets/exotic.jpg" alt="" />
        </li> -->
      </ul>
      <h2>
        <router-link to="/catalogue">И многое - многое другое!!!</router-link>
      </h2>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      baseItems: [
        {
          itemName: "Сухоцветы",
          source: "sukho",
        },
        {
          itemName: "Розы",
          source: "rose",
        },
        {
          itemName: "Кустовые цветы",
          source: "kust",
        },
        {
          itemName: "Горшечные цветы",
          source: "gorsh",
        },
        {
          itemName: "Букеты",
          source: "bucket",
        },
        {
          itemName: "Экзотика",
          source: "exotic",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background: url("../assets/2.jpg") no-repeat;
  background-size: cover;
}

h1 {
  text-align: center;
  margin: 0;
  padding-top: 1.5rem;
}

.items__main {
  text-align: center;
}

.items-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 0;
}

h2 {
  display: inline-block;
  text-align: center;
  a {
    text-decoration: none;
    color: #05270a;
  }
}
</style>
