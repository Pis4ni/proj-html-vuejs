<script>
import imgCard from "./imgCard.vue";
import txtImgCard from "./txtImgCard.vue";
import btn from "../../general/btn.vue";
import SectionHeader from "../../general/SectionHeader.vue";

export default {
  data() {
    return {
      title: "section welcome",
      bgImg:[
      ],
      cardsImg:[
        {
        path:'artist-hero-image-01.jpg',
        size:'sm'
        },
        {
        path:'artist-course-08-480x480.jpg',
        size:'m'
        },
        {
        path:'artist-hero-image-04.jpg',
        size:'m'
        }
      ],
      headerTxt:{
        title:'Hello, im Matin',
        subtitle:'Artist Coaching And Mentoring Might Be for You.'
      },
      headerTxtB:{
        title:'Artist coaching',
        subtitle:'I understand what it takes to create. I can help you with'
      },
      txtContentB:{
        title:'Artist coaching',
        content:'I understand what it takes to create. I can help you with'
      },
      btn:{
        txt:'Get started today',
        link:'#'
      },
      cardsImgTxt: [
        {
          img:'artist-box-image-01.png',
          heading:'Online Courses',
          content:'Online art coaching new offers you a very powerful way to redesign your artist mind.'
        },
        {
          img:'artist-box-image-02.png',
          heading:'One to One',
          content:'Getting the necessary clarity about the current state to help you improve your ability'
        },
        {
          img:'artist-box-image-03.png',
          heading:'Anywhere',
          content:'Access to valuable and portable program wich allow you to setup and live anywhere you want.'
        },
        {
          img:'artist-box-image-04.png',
          heading:'On Time',
          content:'Punctuality is our top priority because it`s an essetial criteria to assess a program quality'
        },
      ]
    }
  },
  components: {
    imgCard,txtImgCard,btn,SectionHeader
  },
};
</script>

<template>
  <div class="container">

    <div class="jumbo">
      <!-- < /> -->
      <div class="d-flex justify-content-evenly">
        <div class="cards-container-a">
          <imgCard class="down" :size="this.cardsImg[0].size" :cardsImg="this.cardsImg[0].path"/>
          <imgCard class="up" :size="this.cardsImg[1].size" :cardsImg="this.cardsImg[1].path"/>
        </div>
        <div class="content-container-a ">
          <SectionHeader :headerInfo="this.headerTxt"/>

  
          <btn :innterTxt="this.btn.txt"/>
        </div>
        <div class="cards-container-b">
          <div class="positioner">
            <imgCard :size="this.cardsImg[2].size" :cardsImg="this.cardsImg[2].path"/>
  
          </div>
  
          
        </div>
      </div>
      <div class="cards-txt-img-container">


        <div class="m-3">
          <SectionHeader :headerInfo="this.headerTxtB"/>
        </div>
  
        <div class="container my-5">
          <div class="d-flex justify-content-between">
            <txtImgCard v-for="(card,index) in this.cardsImgTxt" key="index" :img="card.img" :heading="card.heading" :txt="card.content" />
          </div>
        </div>
  
      </div>
  
    </div>
  </div>
</template>
<style lang="scss" scoped>
.jumbo{
  width: 100%;
  text-align: center;
  .cards-container-a{
    position: relative;
    width: 250px;
    .down{
      position: relative;
      bottom: -300px;
      left: 0;
      z-index: 2;
    }
    .up{
      position: relative;
      bottom: 200px;
      right: -130px;
      
    }  
    
  }
  .cards-container-b{
    position: relative;
    .positioner{
      position: relative;
      top: 100px;
      right: 100px;
    }
    
  }
  .content-container-a{
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  }
</style>