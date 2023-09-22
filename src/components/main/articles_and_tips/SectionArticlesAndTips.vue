<script>
// import MyComponent from "./components/MyComponent.vue";
import CardA from "../../general/CardA.vue";
import SectionHeader from "../../general/SectionHeader.vue";
import btn from "../../general/btn.vue";

export default {
  data() {
    return {

      title: "Hello world",
      headerTxt:{
        title:'Articles And Tips',
        subtitle:'Latest From The Blog'
      },
      ArtistsCardsData:[
      {
            imgName:'artist-blog-03-480x356.jpeg',
            dataA:'ARTIST',
            title:'BrushStrokes Energize Tree in paintings',
            dataB:'May 15, 2020',
            dataC:688,
            modificatorA:'fa-calendar',
            modificatorB:'fa-eye',
            modificatorC:'',
            modificatorD:'warning',
        },
      {
            imgName:'artist-blog-02-500x680.jpg',
            dataA:'ARTIST',
            title:'BrushStrokes Energize Tree in paintings',
            dataB:'May 15, 2020',
            dataC:688,
            modificatorA:'fa-calendar',
            modificatorB:'fa-eye',
            modificatorC:'big',
            modificatorD:'',
        },
      {
            imgName:'artist-blog-01-480x356.jpg',
            dataA:'ARTIST',
            title:'BrushStrokes Energize Tree in paintings',
            dataB:'May 15, 2020',
            dataC:688,
            modificatorA:'fa-calendar',
            modificatorB:'fa-eye',
            modificatorC:'',
            modificatorD:'warning',
        },
      ]
    }
  },

  components: {
    CardA,SectionHeader,btn
  },
};
</script>

<template>
    <div class="container">
        <SectionHeader :headerInfo="this.headerTxt"/>

        <div class="d-flex align-items-center justify-content-evenly card-sequence">
            <cardA v-for="(card, index) in this.ArtistsCardsData" key="index" :cardObj="card"/>

        </div>
        <div class="d-flex justify-content-center align-items-center w-100 my-2">
          
        </div>
    </div>
    <!-- <cardA :cardObj=""/> -->

</template>

<style lang="scss" scoped>
.card-sequence{
     div:nth-child(1){
        position: relative;
        top:50px
    }
     div:nth-child(3){
        position: relative;
        top:-80px
    }
}


</style>