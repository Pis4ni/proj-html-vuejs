<script>
// Supports weights 400-700
import '@fontsource-variable/dancing-script';

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  props:{
    'headerInfo':Object
  }

};
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center my-5">
    <h3 class="text-secondary">
      {{headerInfo.title}}
    </h3>
    <h2>
        {{headerInfo.subtitle}}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
h2{
  max-width: 500px;
}
h3{
  font-family: 'Dancing Script Variable', sans-serif;
  font-size: 3rem;
  font-weight: 700;
}

</style>