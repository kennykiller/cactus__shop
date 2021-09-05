export default {
  async checkStock(context) {
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
        responseData.message
      );
      throw error;
    }

    console.log(responseData);
    const flowers = [];
    for (const key in responseData) {
      const flowerStock = {
        id: key,
        initialStock: responseData[key].initialStock,
        stockLeft: responseData[key].stockLeft,
        name: responseData[key].name,
      };
      flowers.push(flowerStock);
    }

    const checkedItems = [];

    for (const order of context.getters.orders) {
      console.log(order.id);
      const orderedItem = flowers.find((flower) => {
        console.log(flower.id);
        return flower.id === order.id;
      });
      if (orderedItem.initialStock >= order.quantityOrdered) {
        console.log("GREAT");
        const updatedStock = orderedItem.initialStock - order.quantityOrdered;
        checkedItems.push({
          id: order.id,
          initialStock: updatedStock,
          stockLeft: updatedStock,
        });
      } else {
        context.commit('setShortage', {
          initialStock: orderedItem.initialStock,
          name: orderedItem.name
        });
        context.commit('clearCatalogue')
        context.dispatch('getItems')
        return; 
      }
    }
    context.dispatch('updateStock', checkedItems);
  },
};
