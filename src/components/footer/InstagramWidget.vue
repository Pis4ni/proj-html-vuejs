<script>
// import MyComponent from "./components/MyComponent.vue";
import {buildImgPath} from '../../utils/img'

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  props: {
    listObj: Object,
  },
  methods: {
    buildImgPath
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="list-container">
    <span class="h4">
      {{ listObj.title }}
    </span>
    <a :href="listObj.profilePath" class="h5 text-primary ms-2">
      {{ listObj.profile }}
    </a>
    <ul class="m-0 p-0 d-flex">
      <li v-for="element in listObj.list">
        <a :href="element.path" class="m-0 p-0">

            <img :src="buildImgPath(element.title)" :alt="element.title">

        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul {
  list-style: none;
  li {
      height: 120px;
      width: 120px;
    margin: 1rem;
    img{
      width:100% ;
      height:100%;
      object-fit: cover;

    }
  }
}
</style>
