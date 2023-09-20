<script>
import { store } from "../../data/store";
import {buildImgPath} from '../../utils/img'

import btn from "../general/btn.vue";
// import  from "./components/main/.vue";
import SectionWelcome from "./welcome/SectionWelcome.vue";
import SectionPresentation from "./presentation/SectionPresentation.vue";
import SectionCardSlider from "./card_slider/SectionCardSlider.vue";
import SectionArtistCoaching from "./artist_coaching/SectionArtistCoaching.vue";
import SectionArticlesAndTips from "./articles_and_tips/SectionArticlesAndTips.vue";
import SectionUpcomingEvents from "./upcoming_events/SectionUpcomingEvents.vue";

export default {
  data() {
    return {
      title: "Hello i`m AppMain.vue"
    }
  },
  components: {
    btn,SectionWelcome,SectionPresentation,SectionCardSlider,SectionArtistCoaching,SectionArticlesAndTips,SectionUpcomingEvents
  },
};
</script>

<template>
  <SectionWelcome />
  <SectionPresentation />
  <SectionCardSlider />
  <SectionArtistCoaching />
  <SectionArticlesAndTips />
  <SectionUpcomingEvents />
</template>

<style lang="scss" scoped></style>