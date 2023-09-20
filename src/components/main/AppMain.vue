<script>
import { store } from "../../data/store";
import {buildImgPath} from '../../utils/img'

import btn from "../general/btn.vue";
// import  from "./components/main/.vue";
import SectionWelcome from "./welcome/SectionWelcome.vue";

export default {
  data() {
    return {
      title: "Hello i`m AppMain.vue"
    }
  },
  components: {
    btn,SectionWelcome
  },
};
</script>

<template>
<SectionWelcome />
</template>

<style lang="scss" scoped></style>