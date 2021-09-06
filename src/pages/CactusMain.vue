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
          source: "sukho2",
        },
        {
          itemName: "Розы",
          source: "rose2",
        },
        {
          itemName: "Кустовые цветы",
          source: "kust3",
        },
        {
          itemName: "Горшечные цветы",
          source: "gorsh",
        },
        {
          itemName: "Букеты",
          source: "bucket3",
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
  background: rgba(76, 175, 80, 0.2);
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
