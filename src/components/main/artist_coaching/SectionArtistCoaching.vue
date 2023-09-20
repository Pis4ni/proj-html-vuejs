<script>
// import MyComponent from "./components/MyComponent.vue";
import SectionHeader from "../../general/SectionHeader.vue";
import CoursesCard from "./CoursesCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
      headerTxt:{
        title:'Artist coaching',
        subtitle:'Latest Online Courses'
      },
      coursesCardsData:[
        {
            imgName:'artist-course-08-480x480.jpg',
            price:'$18.00',
            title:'The Acrylic Painting Accademy',
            lessons:4,
            students:50,
        },
        {
            imgName:'artist-course-07-480x480.jpg',
            price:'$21.00',
            title:'Drawing and shading: Complete Course',
            lessons:14,
            students:50,
        },
        {
            imgName:'artist-course-06-480x480.jpg',
            price:'$19.00',
            title:'The Color Theory for Digital Artist',
            lessons:7,
            students:50,
        },
        {
            imgName:'artist-course-05-480x480.jpg',
            price:'$35.00',
            title:'Ultimate Guide to Digital Sketching for Beginner',
            lessons:14,
            students:50,
        },
        {
            imgName:'artist-course-04-480x480.jpg',
            price:'$19.00',
            title:'Portrait Drawing The Smart Way',
            lessons:2,
            students:50,
        },
        {
            imgName:'artist-course-03-480x480.jpg',
            price:'$19.00',
            title:'Mastering Watercolor Painting from Beginner',
            lessons:9,
            students:50,
        },
        {
            imgName:'artist-course-02-480x480.jpg',
            price:'$25.00',
            title:'The Art & Science of Drawing',
            lessons:4,
            students:50,
        },
        {
            imgName:'artist-course-01-480x480.jpg',
            price:'$22.00',
            title:'The Colored Pencil Drawing Course',
            lessons:6,
            students:50,
        },
      ]
    
    }
  },
  components: {
    SectionHeader,CoursesCard
  },
};
</script>

<template>
    <div class="container">
        
        <SectionHeader :headerInfo="this.headerTxt"/>
        <div class="d-flex justify-content-between align-items-center flex-wrap">
        <CoursesCard v-for="(card, index) in this.coursesCardsData" key="index" :cardObj="card"/>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>