export default {
  async getItems(context) {
    const response = await fetch(
      "https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBaseDataNew.json",
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
    for (let obj in responseData) {
      context.commit("setItems", {
        id: obj,
        arr: responseData[obj],
      });
    }
  },
  async updateStock(context, checkedItems) {
    for (let flower of checkedItems) {
      let token = context.getters.isAuthenticated;
      const response = await fetch(
        `https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBaseDataNew/-Ml5gTvGGBuLKxxN8TJO/index.json?auth=` +
          token,
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
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
    }
    context.commit("clearCatalogue");
    context.dispatch("getItems");
  },
};
