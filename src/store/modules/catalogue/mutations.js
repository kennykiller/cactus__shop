export default {
  qtyDecrease(state, payload) {
    let orderedType = state.catalogue.find((a) => payload.name === a[0].name);
    let orderedItem = orderedType.find(a => payload.id === a.name + a.front);
    orderedItem.stockLeft -= payload.value;
    orderedItem.counter += payload.value;
  },
  qtyIncrease(state, payload) {
    let orderedType = state.catalogue.find((a) => payload.name === a[0].name);
    let orderedItem = orderedType.find(a => payload.id === a.name + a.front);
    orderedItem.stockLeft += payload.value;
    orderedItem.counter -= payload.value;
  },
  resetCounter(state, payload) {
    let orderedCarousel = state.catalogue.find((a) => a[0].name === payload.name);
    let orderedItem = orderedCarousel.find(obj => obj.name + obj.front === payload.id);
    orderedItem.counter = 1;
    orderedItem.stockLeft = orderedItem.initialStock;
  },
  setItems(state, payload) {
    const withKeys = {};
    payload.arr.forEach(item => {
      const keyExists = withKeys[item.name];
      if (keyExists) {
        return keyExists.push(item)
      }
      withKeys[item.name] = [item];
    })
    state.catalogue = Object.values(withKeys);
    state.id = payload.id;
    console.log(state.catalogue, state.id);
  },
  clearCatalogue(state) {
    state.catalogue.length = 0;
  },
  setShortage(state, payload) {
    state.shortage = payload;
  },
  clearShortage(state) {
    state.shortage = null;
  },
  clearFilters(state) {
    state.filtered.length = 0;
  },
  setFiltered(state, payload) {
    let objFiltered = {};
    for (let key in payload) {
      if (payload[key] === "Любая") {
        continue;
      } else {
        objFiltered[key] = payload[key];
      }
    }

    if (Object.values(objFiltered).length === 0) {
      return;
    }

    function setPriceFilter(filteredCarousel) { //function for check price property in carousels
      let str1 = +objFiltered.price.slice(0, 4);
      let str2 = +objFiltered.price.slice(5);
      for (let item in filteredCarousel) {
        if (
          str1 < filteredCarousel[item].price &&
          filteredCarousel[item].price < str2
        ) {
          continue;
        } else {
          delete filteredCarousel[item];
        }
      }
    }

    state.filtered = JSON.parse(JSON.stringify(state.catalogue)) //new array filled with data from catalogue, otherwise state.catalogue will be also changed

    if (objFiltered.name) { //case 1: just name as a filter OR name && price
      state.filtered = state.filtered.filter(obj => obj.name === objFiltered.name);
      if (objFiltered.price) {
        setPriceFilter(state.filtered[0].carousel);
      }
    } else { //case 2: just price
      state.filtered.forEach(obj => setPriceFilter(obj.carousel));
      state.filtered = state.filtered.filter(obj => { //filter of a state.filtered array to avoid carousels without data
        if (Object.values(obj.carousel).length === 0) {
          return false;
        } return true;
      })
    }
  },
};
