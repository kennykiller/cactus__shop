export default {
  async checkStock(context) {
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
        responseData.message
      );
      throw error;
    }

    console.log(responseData);
    const flowers = [];
    for (let key in responseData) {
      flowers.push(responseData[key]);
      console.log(responseData[key]);
    }
    
    const checkedItems = [];

    for (const order of context.getters.orders) {
      const index = flowers[0].findIndex(flower => {
        return flower.name + flower.front === order.id;
      });
      if (flowers[0][index].initialStock >= order.quantityOrdered) {
        console.log("GREAT");
        const updatedStock = flowers[0][index].initialStock - order.quantityOrdered;
        checkedItems.push({
          index: index,
          initialStock: updatedStock,
          stockLeft: updatedStock,
        });
      } else {
        context.commit('setShortage', {
          initialStock: flowers[0][index].initialStock,
          name: flowers[0][index].name
        });
        context.commit('clearCatalogue')
        context.dispatch('getItems')
        return; 
      }
    }
    context.dispatch('updateStock', checkedItems);
  },
};
