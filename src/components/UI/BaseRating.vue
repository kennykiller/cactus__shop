<template>
  <div class="simple-rating">
    <div class="simple-rating__items">
      <input
        type="radio"
        value="5"
        :id="`simple-rating__5 + ${id}`"
        :name="`simple-rating + ${id}`"
        class="simple-rating__item"
        :checked="'5'===popularity"
      />
      <label :for="`simple-rating__5 + ${id}`" class="simple-rating__label"></label>
      <input
        type="radio"
        value="4"
        :id="`simple-rating__4 + ${id}`"
        :name="`simple-rating + ${id}`"
        class="simple-rating__item"
        :checked="'4'===popularity"
      />
      <label :for="`simple-rating__4 + ${id}`" class="simple-rating__label"></label>
      <input
        type="radio"
        value="3"
        :id="`simple-rating__3 + ${id}`"
        :name="`simple-rating + ${id}`"
        class="simple-rating__item"
        :checked="'3'===popularity"
      />
      <label :for="`simple-rating__3 + ${id}`" class="simple-rating__label"></label>
      <input
        type="radio"
        value="2"
        :id="`simple-rating__2 + ${id}`"
        :name="`simple-rating + ${id}`"
        class="simple-rating__item"
        :checked="'2'===popularity"
      />
      <label :for="`simple-rating__2 + ${id}`" class="simple-rating__label"></label>
      <input
        type="radio"
        value="1"
        :id="`simple-rating__1 + ${id}`"
        :name="`simple-rating + ${id}`"
        class="simple-rating__item"
        :checked="'1' == popularity"
      />
      <label :for="`simple-rating__1 + ${id}`" class="simple-rating__label"></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popularity: {
      type: String,
      required: true,
    },
    id: {
        type: String,
        required: true
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.simple-rating {
  position: relative;
  font-size: 1.3rem;
  display: inline-block;
}
.simple-rating::before {
  display: block;
  content: "★★★★★";
}
.simple-rating__items {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
}
.simple-rating__item {
  position: absolute;
  width: 0%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  top: 0;
  left: 0;
}
.simple-rating__label {
  flex: 0 0 20%;
  height: 100%;
  cursor: pointer;
  color: #fff;
}
.simple-rating__label::before {
  content: "★";
  display: block;
  transition: color 0.3s ease 0s;
}

.simple-rating__item:checked,
.simple-rating__item:checked ~ .simple-rating__label {
  color: #ffbb00;
}

.simple-rating__label:hover,
.simple-rating__label:hover ~ .simple-rating__label,
.simple-rating__label:checked ~ .simple-rating__label:hover {
  color: #ffef9f;
}
</style>
