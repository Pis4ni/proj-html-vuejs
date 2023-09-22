<script>

export default {
  data() {
    return {
      title: "Get ticket"
    }
  },
  methods: {
    submit (event){
        console.log('ciao! mi hanno premuto, per allacciare l` evento usa un listener, come ad esempio:  ' + '@hasClicked="console.log("click ricevuto")"' + '   sul contenitore padre');
        this.$emit('hasClicked')
    }
  },
  props: {
    'innterTxt':String,
    'color':String,
  }
};
</script>

<template>
  <button :class="'btn btn-primary ' + color" @click="this.submit">{{ innterTxt }}</button>
</template>

<style lang="scss" scoped>
.color-b{
  
  background-color: #ffc8978e;
  border: 1px solid #ef6f31;
  color: #ef6f31;
  
  &:hover{
    color: #ffffff;
    background-color: #6ac5f1;
  }

}
button{
    color: #ffffff;
    padding: .5rem 2rem;
    &:hover{
      color: #ffffff;
      background-color: #ff993f8e;
    }
}
</style>