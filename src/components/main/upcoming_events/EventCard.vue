<script>
import { buildImgPath } from "../../../utils/img";


export default {
  data() {
    return {
    }
  },
  props: {
    'cardObj': Object,
  },
  methods:{
    buildImgPath
  }

};
</script>

<template>
<div class="card mb-5 w-50 styled" style="max-width: 540px;">
  <div :class="'row g-0 ' + cardObj.modificatorB">
    <div class="col-md-4">
      <img :src="buildImgPath(cardObj.imgName)" :class="'img-fluid rounded-'+ cardObj.modificatorC" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body d-flex flex-column justify-content-evenly align-items-start h-100">
          <p class="card-text">{{ cardObj.dataB }}</p>
          <h5 class="card-title">{{ cardObj.dataA }}</h5>
          <div class="card-footer-icons text-warning d-flex justify-content-evenly align-items-center">
                <font-awesome-icon :icon="'fa-solid ' + cardObj.modificatorA"  class="me-3"/>
                <p class="card-text"><small class="text-body-secondary">{{ cardObj.dataC }}</small></p>

          </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.styled{
  border: none;
}
</style>