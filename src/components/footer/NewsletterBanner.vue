<script>
// import MyComponent from "./components/MyComponent.vue";
import { buildImgPath } from "../../utils/img";

export default {
  data() {
    return {
      title: "Newsletter to get in touch",
      backgroundImg: [
        "artist-shape-color-paint-top-left-300x170.png",
        "artist-shape-color-paint-bottom-right-300x153.png",
      ],
    };
  },
  methods: {
    buildImgPath,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="wrapper w-100">
    <img :src="buildImgPath(this.backgroundImg[0])" class="left" alt="" />
    <img :src="buildImgPath(this.backgroundImg[1])" class="right" alt="" />
    <div class="container h-100">
      <div class="d-flex align-items-center justify-content-evenly h-100">
        <h2 class="text-light">{{ title }}</h2>
        <input type="text" placeholder="Your e-mail" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #244186;
  position: relative;
  height: 200px;
  h2 {
    text-align: end;
    max-width: 20%;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff99;
    width: 50%;
    height: 2.8rem;
    font-size: 2rem;
    color: #ffffff;
    &::after {
      content: "U";
      color: #ffffff;
      height: fit-content;
    }
    &::placeholder {
      color: #ffffff;
    }
  }
  img {
    height: 100%;
    position: absolute;
  }
  .left {
    left: 0;
    bottom: 0;
  }
  .right {
    right: 0;
    bottom: 0;
  }
}
</style>
