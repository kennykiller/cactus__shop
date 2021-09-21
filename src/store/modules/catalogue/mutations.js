export default {
  qtyDecrease(state, payload) {
    let orderedCarousel = state.catalogue.find((a) => payload.name === a.name);

    for (let key in orderedCarousel.carousel) {
      if (
        orderedCarousel.id + orderedCarousel.carousel[key].front ===
        payload.id
      ) {
        orderedCarousel.carousel[key].stockLeft -= payload.value;
        orderedCarousel.carousel[key].counter += payload.value;
      }
    }
  },
  qtyIncrease(state, payload) {
    let orderedCarousel = state.catalogue.find((a) => payload.name === a.name);

    for (let key in orderedCarousel.carousel) {
      if (
        orderedCarousel.id + orderedCarousel.carousel[key].front ===
        payload.id
      ) {
        orderedCarousel.carousel[key].stockLeft += payload.value;
        orderedCarousel.carousel[key].counter -= payload.value;
      }
    }
  },
  resetCounter(state, payload) {
    let orderedCarousel = state.catalogue.find((a) => payload.name === a.name);

    for (let key in orderedCarousel.carousel) {
      if (
        orderedCarousel.id + orderedCarousel.carousel[key].front ===
        payload.id
      ) {
        orderedCarousel.carousel[key].counter = 1;
        orderedCarousel.carousel[key].stockLeft =
          orderedCarousel.carousel[key].initialStock;
      }
    }
  },
  setItems(state, payload) {
    console.log(payload);
    state.catalogue.push(payload);
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
