<script>
// import  from "./components/.vue";
import countowdnTicket from "./countdownTicket.vue";

export default {
  data() {
    return {
      title: "Hello i`m AppHeader.vue"
    }
  },
  components: {
    countowdnTicket
  },
};
</script>

<template>
    <!-- </> -->
    <countowdnTicket/>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>