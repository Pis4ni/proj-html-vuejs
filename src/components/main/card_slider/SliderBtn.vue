<script>

export default {
  data() {
    return {
    }

  },
  methods: {
    submit (event){
        // console.log('index');
        const wantedIndex = this.indexSlider
        console.log(wantedIndex, this.indexSlider);
        this.$emit('pushedBtn', wantedIndex)
    }
  },
  props: {
    'indexSlider':Number
  }
};
</script>

<template>
    <div class="slider-btn"  @click="this.submit(indexSlider)" ></div>
</template>

<style lang="scss" scoped>
.slider-btn{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #333333;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
}
</style>