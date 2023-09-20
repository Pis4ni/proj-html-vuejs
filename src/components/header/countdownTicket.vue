<script>
// import  from "./components/.vue";
import btn from "../general/btn.vue";
import { DateTime } from 'luxon';

export default {
  data() {
    return {
      title: "Hello i`m countowdnTicket.vue",
      counter: 0,
      targetDateTime:  DateTime.fromFormat('22/09/2023 00:00:00', 'dd/MM/yyyy HH:mm:ss'),
      countdown: '00:00:00',
  
    }
  },
  components: {
    btn
  },

  props: {
    'countdownTicketObj':Object
  },

  methods:{
    btnDebugger(){
        this.counter ++ 
        console.log(' click ricevuto con successo!! ')
        console.log('questo è il: ' + this.counter + ' click!');
        console.log(this.countdownTicketObj);
    },
    updateCountdown() {
      const currentTime = DateTime.now();
      const timeDifference = this.targetDateTime.diff(currentTime, ['hours', 'minutes', 'seconds', ]);

      // Formatta il tempo rimanente come HH:MM:SS
      this.countdown = timeDifference.toFormat('dd:hh:mm:ss');

      // Verifica se il countdown è scaduto
      if (timeDifference.seconds <= 0) {
        clearInterval(this.countdownInterval); // Interrompi l'intervallo se il countdown è scaduto
        this.countdown = '00:00:00'; // Imposta il countdown a zero o a un valore appropriato
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
};
</script>

<template>
    <div class="d-flex justify-content-between align-items-center size-container">

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
          <btn :innterTxt="countdownTicketObj.btnTitle" @hasClicked="btnDebugger"/>

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