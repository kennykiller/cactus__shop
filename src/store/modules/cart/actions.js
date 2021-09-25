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
    const flowersType = [];
    for (const key in responseData) {
      const flowers = {
        id: key,
        carousel: responseData[key].carousel
      };
      flowersType.push(flowers);
    }

    console.log(flowersType);

    let flowersArr = [];

    flowersType.forEach(obj => {
      for (let key in obj.carousel) {
        const flowers = {
          id: obj.id + obj.carousel[key].front,
          initialStock: obj.carousel[key].initialStock,
          stockLeft: obj.carousel[key].stockLeft
        };
        flowersArr.push(flowers)
      }
    })

    console.log(flowersArr);

    const checkedItems = [];

    for (const order of context.getters.orders) {
      console.log(order.id);
      const orderedItem = flowersArr.find((flower) => {
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
