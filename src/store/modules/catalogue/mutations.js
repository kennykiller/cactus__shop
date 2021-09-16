export default {
  qtyDecrease(state, payload) {
    let orderedCarousel = state.catalogue.find(a => payload.name === a.name);
    
    for (let key in orderedCarousel.carousel) {
      if (orderedCarousel.id + orderedCarousel.carousel[key].front === payload.id) {
        orderedCarousel.carousel[key].stockLeft -= payload.value;
        orderedCarousel.carousel[key].counter += payload.value;
      }
    }
  },
  qtyIncrease(state, payload) {
    let orderedCarousel = state.catalogue.find(a => payload.name === a.name);

    for (let key in orderedCarousel.carousel) {
      if (orderedCarousel.id + orderedCarousel.carousel[key].front === payload.id) {
        orderedCarousel.carousel[key].stockLeft += payload.value;
        orderedCarousel.carousel[key].counter -= payload.value;
      }
    }
  },
  resetCounter(state, payload) {
    let orderedCarousel = state.catalogue.find(a => payload.name === a.name);
    
    for (let key in orderedCarousel.carousel) {
      if (orderedCarousel.id + orderedCarousel.carousel[key].front === payload.id) {
        orderedCarousel.carousel[key].counter = 1;
        orderedCarousel.carousel[key].stockLeft = orderedCarousel.carousel[key].initialStock;
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
  setFiltered(state, payload) {
    let objFiltered = {};
    for (let key in payload) {
      if (payload[key] === "Любая") {
        continue;
      } else {
        if (key === "popularity") {
          objFiltered[key] = +payload[key];
        } else {
          objFiltered[key] = payload[key];
        }
      }
    }

    state.filtered = state.catalogue.filter((a) => {
      for (let key in objFiltered) {
        if (objFiltered[key] === a[key]) {
          continue;
        } else if (key === "price") {
          let str1 = +objFiltered[key].slice(0, 4);
          let str2 = +objFiltered[key].slice(5);
          console.log(str1);
          console.log(str2);
          console.log(a[key]);
          if (str1 < a[key] && a[key] < str2) {
            continue;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    });
  },
};
