export default {
  async getItems(context) {
    const response = await fetch(
      "https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBase.json",
      {
        method: "GET",
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "No available items, please check later"
      );
      throw error;
    }

    console.log(responseData);
    for (let key in responseData) {
      context.commit("setItems", {
        counter: responseData[key].counter,
        description: responseData[key].description,
        id: key,
        initialStock: responseData[key].initialStock,
        name: responseData[key].name,
        popularity: responseData[key].popularity,
        price: responseData[key].price,
        stockLeft: responseData[key].stockLeft,
        imgSrc: responseData[key].imgSrc,
        carousel: responseData[key].carousel
      });
    }
  },
  async updateStock(context, checkedItems) {
    for (let flower of checkedItems) {
      const response = await fetch(
        `https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBase/${flower.id}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            initialStock: flower.initialStock,
            stockLeft: flower.stockLeft,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    }
    context.commit("clearCatalogue");
    context.dispatch("getItems");
  },
};
