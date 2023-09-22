<script>
// import MyComponent from "./components/MyComponent.vue";
import VideoPlayerComp from "./VideoPlayerComp.vue";
import FakeVideoplayer from "./FakeVideoplayer.vue";
import {buildImgPath} from '../../../utils/img'
import  btn  from '../../general/btn.vue'

export default {
  data() {
    return {
      title: "Hello world",
      quote:{
        imgName:'artist-quote-icon.png',
        heavyTxt:'I coach and mentor visual artists, like you, to Create Like You Meant it',
        fromWho:'Martin Garrix'
      },
      txtContent:'As a coach and mentor, my ultimato goal is to motivate visual artists toward inspired actions. i help you get you back on track to being the productive, creative, meaningful and authentic artis you truly want to be. I support artists in crafting and living a creative life as well as feeling good about themselves and their art.',
      txtContentB:'As an artist and an educator for nearly 30 Years, i understand what it takes to create.',
      btnTxt:'Get started today',
      vidSrc:'artist-video-poster.jpg'
    }
  },
  methods:{
    buildImgPath,
  },

  components: {
    btn,VideoPlayerComp,FakeVideoplayer
  },
};
</script>

<template>

    <div class="container">

        <div class="d-flex my-5 py-5">
            <div class="d-flex align-items-center justify-content-center flex-column w-50">
                <div class="quote">
                    <img :src="buildImgPath(this.quote.imgName)" alt="">
                </div>
                <span class="h1">
                    {{ quote.heavyTxt }}
                </span>
                <span>
                    {{ quote.fromWho }}
  
                </span>
            </div>
            <div class="txt-content w-50 p-3">
                <p>
                    {{ txtContent }}
                </p>
                <span>
                    {{ txtContentB }}
                </span>
                <div class="btn-container my-4">

                  <btn :innterTxt="btnTxt" @hasClicked=""/>
                </div>

            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center m-5">
            <FakeVideoplayer :videoPath="buildImgPath(vidSrc)" />

        </div>


        <!-- <VideoPlayerComp :videoSource="vidSrc" /> -->
    </div>
</template>

<!-- todo STAVI STILIZZANDO LA LUNGHEZZA MASSIMA DEGLI SPAN E DEI P DESTRI -->


<style lang="scss" scoped>
span{
  max-width: 450px;
}
/* .txt-content{
  span{
    display: block;
    max-width: 450px;
  }
  p{
    max-width: 450px;
  }
} */

</style>