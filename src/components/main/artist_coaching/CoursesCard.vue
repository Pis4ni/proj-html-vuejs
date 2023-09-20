<script>
// import MyComponent from "./components/MyComponent.vue";
import { buildImgPath } from "../../../utils/img";

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

  <div class="card mb-5" style="width: 18rem">
    <img :src="buildImgPath(cardObj.imgName)" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-primary">{{ cardObj.price }}</h5>
      <p class="card-text h5">
            {{ cardObj.title }}
      </p>

      <div class="d-flex align-items-center ">
        <font-awesome-icon icon="fa-regular fa-file-lines" class="m-1" />
        <span class="m-1">{{cardObj.lessons}} </span><span>Lessons</span>
        <font-awesome-icon icon="fa-regular fa-file-lines" class="ms-2 m-1" />
        <span class="m-1">{{cardObj.students}} </span><span>Students</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
