export default {
  qtyDecrease(state, payload) {
    let orderedType = state.catalogue.find((a) => payload.name === a[0].name);
    let orderedItem = orderedType.find((a) => payload.id === a.name + a.front);
    orderedItem.stockLeft -= payload.value;
    orderedItem.counter += payload.value;
  },
  qtyIncrease(state, payload) {
    let orderedType = state.catalogue.find((a) => payload.name === a[0].name);
    let orderedItem = orderedType.find((a) => payload.id === a.name + a.front);
    orderedItem.stockLeft += payload.value;
    orderedItem.counter -= payload.value;
  },
  resetCounter(state, payload) {
    let orderedCarousel = state.catalogue.find(
      (a) => a[0].name === payload.name
    );
    let orderedItem = orderedCarousel.find(
      (obj) => obj.name + obj.front === payload.id
    );
    orderedItem.counter = 1;
    orderedItem.stockLeft = orderedItem.initialStock;
  },
  setExtraItems(state, payload) {
    let arr = [...payload];
    arr.forEach((v, i) => {
      if (i % 4 === 0) {
        state.extraItems.push([v]);
      } else {
        state.extraItems[state.extraItems.length - 1].push(v);
      }
    });
  },
  setItems(state, payload) {
    const withKeys = {};
    payload.arr.forEach((item) => {
      const keyExists = withKeys[item.name];
      if (keyExists) {
        return keyExists.push(item);
      }
      withKeys[item.name] = [item];
    });
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
  setMismatch(state) {
    console.log(state.noMatch);
    state.noMatch = true;
    console.log(state.noMatch);
  },
  matchDefault(state) {
    state.noMatch = null;
  },
  clearShortage(state) {
    state.shortage = null;
  },
  clearFilters(state) {
    state.filtered.length = 0;
    state.objFiltered = {};
  },
  setFiltered(state, payload) {
    for (let key in payload) {
      if (payload[key] === "??????????") {
        continue;
      } else {
        state.objFiltered[key] = payload[key];
      }
    }

    if (Object.values(state.objFiltered).length === 0) {
      return;
    }

    function setPriceFilter(carousel, mode) {
      let str1 = +state.objFiltered.price.slice(0, 4);
      let str2 = +state.objFiltered.price.slice(5);
      if (mode === "priceFilter") {
        let filtered = carousel.filter((obj) => {
          if (str1 < obj.price && obj.price < str2) {
            return true;
          }
          return false;
        });
        state.filtered.push(filtered);
      } else {
          state.filtered = carousel[0].filter((obj) => {
            if (str1 < obj.price && obj.price < str2) {
              return true;
            }
            return false;
          });
      }
    }

    if (state.objFiltered.name) {
      state.filtered = state.catalogue.filter(
        (obj) => obj[0].name === state.objFiltered.name
      );
      if (state.objFiltered.price) {
        setPriceFilter(state.filtered, "bothFilters");
      }
    } else {
      state.catalogue.forEach((obj) => setPriceFilter(obj, "priceFilter"));
      state.filtered = state.filtered.filter((obj) => {
        if (obj.length === 0) {
          return false;
        }
        return true;
      });
    }
  },
};
