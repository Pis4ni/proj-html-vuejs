<script>
// import MyComponent from "./components/MyComponent.vue";
import {buildImgPath} from '../../../utils/img'

export default {
  data() {
    return {
      title: "card"
    }
  },
  props:{
    'cardsImg':String,
    'size':String
  },
  methods: {
    buildImgPath
  },
  mounted(){
  }
};
</script>

<template>

  <div :class="'card-container ' + size">

    <img :src="buildImgPath(cardsImg)" class="card-img" alt="...">
  </div>
</template>

<style lang="scss" scoped>

.sm{
  width: 180px;

}
.m{
  width: 230px;
  height: 300px;
}
.card-container{

}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem;
  
}
</style>