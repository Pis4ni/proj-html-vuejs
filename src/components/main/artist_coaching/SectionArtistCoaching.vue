<script>
// import MyComponent from "./components/MyComponent.vue";
import SectionHeader from "../../general/SectionHeader.vue";
import CardA from "../../general/CardA.vue";

export default {
  data() {
    return {
      headerTxt:{
        title:'Artist coaching',
        subtitle:'Latest Online Courses'
      },
      coursesCardsData:[
        {
            imgName:'artist-course-08-480x480.jpg',
            dataA:'$18.00',
            title:'The Acrylic Painting Accademy',
            dataB:'4 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-07-480x480.jpg',
            dataA:'$21.00',
            title:'Drawing and shading: Complete Course',
            dataB:14,
            dataC:50,
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-06-480x480.jpg',
            dataA:'$19.00',
            title:'The Color Theory for Digital Artist',
            dataB:'7 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-05-480x480.jpg',
            dataA:'$35.00',
            title:'Ultimate Guide to Digital Sketching for Beginner',
            dataB:'14 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-04-480x480.jpg',
            dataA:'$19.00',
            title:'Portrait Drawing The Smart Way',
            dataB:'2 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-03-480x480.jpg',
            dataA:'$19.00',
            title:'Mastering Watercolor Painting from Beginner',
            dataB:'9 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-02-480x480.jpg',
            dataA:'$25.00',
            title:'The Art & Science of Drawing',
            dataB:'4 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
        {
            imgName:'artist-course-01-480x480.jpg',
            dataA:'$22.00',
            title:'The Colored Pencil Drawing Course',
            dataB:'6 Lezioni',
            dataC:'50 Studenti',
            modificatorA:'fa-file-lines',
            modificatorB:'fa-user',
            modificatorC:'',
            modificatorD:'primary',
        },
      ]
    
    }
  },
  components: {
    SectionHeader,CardA
  },
};
</script>

<template>
    <div class="container">
        
        <SectionHeader :headerInfo="this.headerTxt"/>
        <div class="d-flex justify-content-evenly align-items-evenly flex-wrap">
        <cardA v-for="(card, index) in this.coursesCardsData" key="index" :cardObj="card"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>