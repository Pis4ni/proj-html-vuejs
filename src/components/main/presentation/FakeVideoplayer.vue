<script>
// import MyComponent from "./components/MyComponent.vue";
import {buildImgPath} from '../../../utils/img'


export default {
  data() {
    return {
      title: "Hello world",
      bgImg:[
        'maxcoach-shape-12.png',
        'maxcoach-shape-05.png',
        'maxcoach-shape-12.png',

      ],
      overlayImg:'icon-youtube-play.png'
    }
  },
  props:{
    'videoPath':String
  },
  methods:{
    buildImgPath
  }
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>

    <div class="overlay">
        <img class="left" :src="buildImgPath(this.bgImg[1])" alt="">
        <img class="right" :src="buildImgPath(this.bgImg[0])" alt="">
        <img class="left-under" :src="buildImgPath(this.bgImg[2])" alt="">
        <img class="over-center" :src="buildImgPath(this.overlayImg)" alt="">
        <div class="video-container">
            <img :src="videoPath" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay{
    max-width:1000px ;
    position: relative;
    .over-center{
        position: absolute;
        z-index: 4;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 60%);
        cursor: pointer;
    }

    .left{
        position: absolute;
        top: 80px;
        left: -100px;
        
    }
    .right{
        position: absolute;
        bottom: -80px;
        right: -100px;
        
    }

}
.video-container{
    position: relative;
    z-index: 3;
    max-width: 700px;
    img{
        width: 100%;
    }
}
</style>