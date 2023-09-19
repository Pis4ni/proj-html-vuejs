<script>

export default {
  data() {
    return {
      title: "Get ticket"
    }
  },
  methods: {
    submit (event){
        console.log('ciao! mi hanno premuto, per allacciare l evento usa un listener, come ad esempio:  ' + '@hasClicked="console.log("click ricevuto")"' + '   sul contenitore padre');
        this.$emit('hasClicked')
    }
  },
  props: {
    'innterTxt':String
  }
};
</script>

<template>
  <button class="btn btn-primary text-light" @click="this.submit">{{ innterTxt }}</button>
</template>

<style lang="scss" scoped>
button{
    padding: .5rem 2rem;
}
</style>