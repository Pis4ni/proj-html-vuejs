<script>
// import  from "./.vue";
import SectionHeader from "../../general/SectionHeader.vue";
import CardQuotes from "./CardQuotes.vue";
import SliderBtn from "./SliderBtn.vue";

export default {
  data() {
    return {
      title: "Hello world",
      cardsData:[
        [
          {
            headingTxt:'it`s a choice of quality for people with special needs',
            contentTxt:'i`m a very strict person so i require everything to be organized and neat. Then, i`ll be able to make things right and shine. MaxCoach guys just got me.',
            imgName:'artist-testimonial-avatar-02.jpg',
            author:'Florence Themes',
            occupation:'Multimedia Admin'
          },
          {
            headingTxt:'High leve of efficiency and scientific teaching methods',
            contentTxt:'i am free to learn at my own peace, follow my own schedule and choose the subject i wanto to learn from the syllabus. Great study portal for p[eople like me.]',
            imgName:'artist-testimonial-avatar-04.jpg',
            author:'Mina Hollace',
            occupation:'Freelancer'
          },
          {
            headingTxt:'Professional team of specialists and passionate mentors at reach',
            contentTxt:'i need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
            imgName:'artist-testimonial-avatar-03.jpg',
            author:'Madley Pondor',
            occupation:'IT Specialist'
          },
        ],
        [

          {
            headingTxt:'it`s a ',
            contentTxt:'i`m neat. Then, i`ll be able to make things right and shine. MaxCoach guys just got me.',
            imgName:'artist-testimonial-avatar-02.jpg',
            author:'Florence Themes',
            occupation:'Multimedia Admin'
          },
          {
            headingTxt:'High efficiency and scientific teaching methods',
            contentTxt:'i am free to learn at my own peace, follow my own schedule and choose the subject i wanto to learn from the syllabus. Great study portal for p[eople like me.]',
            imgName:'artist-testimonial-avatar-04.jpg',
            author:'Mina Hollace',
            occupation:'Freelancer'
          },
          {
            headingTxt:'Professional team at reach',
            contentTxt:'i need to get a certification for English. Their tutors are smart and professional when dealing with students.',
            imgName:'artist-testimonial-avatar-03.jpg',
            author:'Madley Pondor',
            occupation:'IT Specialist'
          },
        ],
        [

          {
            headingTxt:'it`s a choice of quality for needs',
            contentTxt:'i`m a very strict person so i require everything to be organized and neat. Then, i`ll be. MaxCoach guys just got me.',
            imgName:'artist-testimonial-avatar-02.jpg',
            author:'Florence Themes',
            occupation:'Multimedia Admin'
          },
          {
            headingTxt:'High leve of efficiency and scientific teaching methods',
            contentTxt:'i am free to learn at my own peace, follow the subject i wanto to learn from the syllabus. Great study portal for p[eople like me.]',
            imgName:'artist-testimonial-avatar-04.jpg',
            author:'Mina Hollace',
            occupation:'Freelancer'
          },
          {
            headingTxt:'Professional of specialists and passionate ',
            contentTxt:'i need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart  students.',
            imgName:'artist-testimonial-avatar-03.jpg',
            author:'Madley Pondor',
            occupation:'IT Specialist'
          },
        ],
      ],
      sliderIndex:0,
      headerTxt:{
        title:'Testimonials',
        subtitle:'Why do people love me?'
      }
    }
  },
  methods: {
    updateIndex (index){
      console.log(index);
      this.sliderIndex = index
    }
  },
  components: {
    CardQuotes,SectionHeader,SliderBtn
  },
};
</script>

<template>
  <!-- < /> -->
  <div class="container">

    <SectionHeader :headerInfo="this.headerTxt"/>
    <div class="slider-wrapper">
      <div class="d-flex justify-content-evenly">
    
        <CardQuotes v-for="(card,index)  in this.cardsData[this.sliderIndex]" key="index" :cardObj="card"/>
      </div>
      <div class="d-flex justify-content-center align-items-center">

        <SliderBtn v-for="(element,index) in this.cardsData" :indexSlider="index" @pushedBtn="updateIndex(index)" class="slider-btn m-4" />
        <!-- <div v-for="element in this.cardsData" class="slider-btn m-4"> -->
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-btn{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #333333;
  &:hover{
    scale: 1.1;
  }
}
</style>