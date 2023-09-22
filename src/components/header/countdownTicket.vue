<script>
// import  from "./components/.vue";
import btn from "../general/btn.vue";
import { DateTime } from 'luxon';

export default {
  data() {
    return {
      counter: 0,
      
      countdown: '00:00:00',
      
      txtContent: "Starts TOMORROW Our biggest event of the year...",
      btnTitle: "Get ticket",
      end:'',
      targetDateTime:  DateTime.fromFormat('00/00/2024 00:00:00', 'dd/MM/yyyy HH:mm:ss'),
    }
  },
  components: {
    btn
  },

  props: {
    'countdownTicketObj':Object
  },

  methods:{
/*     btnDebugger(){
        this.counter ++ 
        console.log(' click ricevuto con successo!! ')
        console.log('questo è il: ' + this.counter + ' click!');
        console.log(this.countdownTicketObj);
    }, */
    updateCountdown() {

      const currentTime = DateTime.now();

      const timeDifference = this.targetDateTime.diff(currentTime, ['hours', 'minutes', 'seconds', ]);

      // Formatto il tempo rimanente come HH:MM:SS
      this.countdown = timeDifference.toFormat('dd:hh:mm:ss');

      // Verifico se il countdown è scaduto
      if (timeDifference.seconds <= 0) {
        
        // Interrompo l'intervallo se il countdown è scaduto
        clearInterval(this.countdownInterval);

        // Imposta il countdown a 00:00:00
        this.countdown = '00:00:00'; 

      }
    },
    beforeDestroy() {
    // Pulisci l'intervallo quando il componente viene distrutto
    clearInterval(this.countdownInterval);
    },
  },

  mounted() {
    // Calcola il countdown iniziale e imposta un intervallo per aggiornarlo
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  created() {
    this.end = this.countdownTicketObj.countdownEnd;
    console.log(this.end);
    this.targetDateTime =  DateTime.fromFormat(this.end, 'dd/MM/yyyy HH:mm:ss')

  }
};
</script>

<template>
    <div class="d-flex justify-content-between align-items-center size-container my-3">

        <span class="txt-content text-tertiary">
          {{ countdownTicketObj.txtContent }}
        </span>
        <div class="countdown-cointainer">
          
          <font-awesome-icon icon="fa-regular fa-clock" size="lg" />
          <span class="countdown ms-2">
              {{countdown}}
          </span>
        </div>
        <div class="btn-container">
          
          <btn :innterTxt="countdownTicketObj.btnTitle"/>

        </div>
    </div>
  <!-- < /> -->
</template>

<style lang="scss" scoped>
.size-container{
  max-width: 800px ;
  *{
    margin: 0 .5rem;
  }
  .txt-content{
    color: #707070;
  }
  .countdown-cointainer{
    .countdown{
      letter-spacing: .3rem;
      font-weight: 500;
      font-size: 1.2rem;

    }
  }
}
</style>