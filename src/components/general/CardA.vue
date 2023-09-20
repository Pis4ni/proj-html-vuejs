<script>
// import MyComponent from "./components/MyComponent.vue";
import { buildImgPath } from "../../utils/img";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  props: {
    'cardObj': Object,
  },
  methods:{
    buildImgPath
  }
};
</script>

<template>

<!-- 
  <div class="card mb-5" style="width: 18rem">
    <img :src="buildImgPath(cardObj.imgName)" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-primary">{{ cardObj.dataA }}</h5>
      <p class="card-text h5">
            {{ cardObj.title }}
      </p>

      <div class="d-flex align-items-center ">
        <font-awesome-icon icon="fa-regular fa-file-lines" class="m-1" />
        <span class="m-1">{{cardObj.dataB}} </span><span>Lessons</span>
        <font-awesome-icon icon="fa-regular fa-file-lines" class="ms-2 m-1" />
        <span class="m-1">{{cardObj.dataC}} </span><span>Students</span>
      </div>
    </div>
  </div> -->

  <div :class="'card mb-3 width ' + cardObj.modificatorC">
    <img :src="buildImgPath(cardObj.imgName)" class="card-img-top" alt="" />
    <div class="card-body transparent">
      <h5 :class="'card-title text-' + cardObj.modificatorD">{{ cardObj.dataA }}</h5>
      <p class="card-text h5">
            {{ cardObj.title }}
      </p>

      <div class="d-flex align-items-center icon-container">
        <font-awesome-icon :icon="'fa-regular ' + cardObj.modificatorA" class="m-1" />
        <span class="m-1">{{cardObj.dataB}} </span>
        <font-awesome-icon :icon="'fa-regular ' + cardObj.modificatorB" class="ms-2 m-1" />
        <span class="m-1">{{cardObj.dataC}} </span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.deb{
  background-color: blue;
}
.width{
  width: calc((100% - 15rem) / 4);
  h5{
    font-size:.8rem
  }
  p{
    font-size:.8rem
  }
}
.icon-container{
  font-size: .8rem;
}
.big{
  width: 27rem;
  h5{
    font-size: 1.2rem
  }
  img{
    height: 600px;
    
    object-fit: cover;
  }
  .transparent{
    width: 100%;
    color: #ffffff;
    background-image: linear-gradient(to bottom, transparent,#00000099 );

    position: absolute;
    z-index: 3;
    bottom: 0;
  }
}

</style>
