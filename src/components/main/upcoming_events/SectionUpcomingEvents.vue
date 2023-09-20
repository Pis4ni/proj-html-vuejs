<script>
// import MyComponent from "./components/MyComponent.vue";
import SectionHeader from "../../general/SectionHeader.vue";
import EventCard from "./EventCard.vue";

export default {
  data() {
    return {
      headerTxt:{
        title:'Upcoming Events',
        subtitle:'Let`s Work Together'
      },
      eventsCardsData:[
        {
          imgName:'artist-event-04-250x300.jpg',
          dataA:'Storytelling Workshop',
          dataB:'NOV 22, 2020',
          dataC:'Texas, US',
          modificatorA:'fa-location-dot',
          modificatorB:'start',
          
        },
        {
          imgName:'artist-event-03-250x300.jpg',
          dataA:'Painting Art Contest 2020',
          dataB:'OCT 10, 2020',
          dataC:'New York, US',
          modificatorA:'fa-location-dot',
          modificatorB:'',
          modificatorC:'start',

          
        },
        {
          imgName:'artist-event-02-250x300.jpg',
          dataA:'International Art Fair 2020',
          dataB:'NOV 23, 2020',
          dataC:'Hamburg. Germany',
          modificatorA:'fa-location-dot',
          modificatorB:'flex-row-reverse',
          modificatorC:'end',


  
        },
        {
          imgName:'artist-event-01-250x300.jpg',
          dataA:'Street Performance: Call for Artist',
          dataB:'DEC 15, 2020',
          dataC:'Illinois, US',
          modificatorA:'fa-location-dot',
          modificatorB:'flex-row-reverse',
          modificatorC:'end',


  
        },

      ]
      
    }
  },
  components: {
    SectionHeader,EventCard
  },
};
</script>

<template>
    <div class="container">

        <SectionHeader :headerInfo="this.headerTxt"/>

      <div class="d-flex event-cards justify-content-evenly">
        <EventCard v-for="(card, index) in this.eventsCardsData" key="index" :cardObj="card"/>

      </div>

    </div>

</template>

<style lang="scss" scoped>

.event-cards{
  flex-wrap: wrap;
}
</style>