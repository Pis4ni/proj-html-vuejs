<script>
// import MyComponent from "./components/MyComponent.vue";
import {buildImgPath} from '../../../utils/img'

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  props:{
    'img':String,
    'heading':String,
    'txt':String,
  },
  methods:{
    buildImgPath
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
<div class="card" style="width: 18rem;">
  <img :src="buildImgPath(img)" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{heading}}</h5>
    <p class="card-text">{{ txt }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>


img{
    width: 100%;
    height: 100px;
    object-fit: contain;
    }
</style>