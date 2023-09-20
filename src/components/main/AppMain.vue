<script>
import { store } from "../../data/store";
import {buildImgPath} from '../../utils/img'

import btn from "../general/btn.vue";
// import  from "./components/main/.vue";
import SectionWelcome from "./welcome/SectionWelcome.vue";
import SectionPresentation from "./presentation/SectionPresentation.vue";
import SectionCardSlider from "./card_slider/SectionCardSlider.vue";
import SectionArtistCoaching from "./artist_coaching/SectionArtistCoaching.vue";

export default {
  data() {
    return {
      title: "Hello i`m AppMain.vue"
    }
  },
  components: {
    btn,SectionWelcome,SectionPresentation,SectionCardSlider,SectionArtistCoaching
  },
};
</script>

<template>
  <SectionWelcome />
  <SectionPresentation />
  <SectionCardSlider />
  <SectionArtistCoaching />
</template>

<style lang="scss" scoped></style>