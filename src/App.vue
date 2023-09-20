<script>
// import  from "./components/.vue";
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import AppFooter from "./components/footer/AppFooter.vue";

export default {
  data() {
    return {
      title: "Hello i`m App.vue"
    }
  },
  components: {
    AppHeader,AppMain,AppFooter
  },
};
</script>

<template>
  <!-- < /> -->
  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss"></style>