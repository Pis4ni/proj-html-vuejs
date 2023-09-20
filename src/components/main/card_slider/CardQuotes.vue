<script>
// import MyComponent from "./components/MyComponent.vue";
import { buildImgPath } from "../../../utils/img";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  methods: {
    buildImgPath,
  },
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card mb-3" style="width: 24rem">
    <div class="card-body">
      <h5 class="card-title">{{ cardObj.headingTxt }}</h5>
      <p class="card-text">{{ cardObj.contentTxt }}</p>
      <hr />
      <div class="d-flex">
        <div class="bullet-img">
          <img :src="buildImgPath(cardObj.imgName)" alt="" />
        </div>
        <div class="d-flex flex-column">
          <span>
            {{ cardObj.author }}
          </span>
          <span> / {{ cardObj.occupation }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bullet-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
