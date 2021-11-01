export default {
  async getItems(context, mode) {
    let url = "https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBaseDataNew.json";
    if (mode === "extra") {
      url = "https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/extra.json"
    }
    const response = await fetch(
      url,
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

    if (mode === "extra") {
      context.commit("setExtraItems", responseData)
    } else {
      for (let obj in responseData) {
        context.commit("setItems", {
          id: obj,
          arr: responseData[obj],
        });
      }
    }
  },
  async updateStock(context, checkedItems) {
    for (let flower of checkedItems) {
      const index = flower.index;
      const token = context.getters.isAuthenticated;
      const response = await fetch(
        `https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBaseDataNew/-Ml5gTvGGBuLKxxN8TJO/${index}.json?auth=` +
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
  setMatch(context) {
    context.commit("setMismatch");
    setTimeout(() => context.commit("matchDefault"), 3000);
  },
};
