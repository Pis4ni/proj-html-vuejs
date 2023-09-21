<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  props: {
    listObj: Object,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="list-container">
    <h4>
      {{ listObj.title }}
    </h4>
    <ul class="m-0 p-0">
      <li v-for="element in listObj.list">
        <a :href="element.path" class="text-warning">
          {{ element.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    margin: 1rem 0;
    a {
      text-decoration: none;
      text-wrap: none;
    }
  }
}
</style>
