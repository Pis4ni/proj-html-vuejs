<script>


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
    <h3>
        <i>
            {{headerInfo.title}}
        </i>
    </h3>
    <h2>
        {{headerInfo.subtitle}}
    </h2>
  </div>
</template>

<style lang="scss" scoped>


</style>