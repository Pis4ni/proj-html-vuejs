<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  props:{
    'videoSource': String
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <div class="video-player">
        <video :src="videoSource"></video>
    </div>
</template>

<style lang="scss" scoped></style>