<script>
// import  from "./components/.vue";
import countowdnTicket from "./countdownTicket.vue";
import { store } from "../../data/store";
import {buildImgPath} from '../../utils/img'


export default {
  data() {
    return {
      title: "Hello i`m AppHeader.vue",
      store
    }
  },
  components: {
    countowdnTicket
  },
  methods: {
    buildImgPath
  },
  
};
</script>

<template>
    <!-- </> -->
    <header class="py-2">
      <div class="container">
        <div class="d-flex flex-column align-items-center">

          <countowdnTicket :countdownTicketObj="store.header.countdownTicket" />

          <div class="d-flex my-3 justify-content-between w-100">
            <div class="logo-container">

              <img :src="buildImgPath(store.header.imgLogoName)" alt="[Max Coach Img]">
            </div>

            <nav>
              <ul class="m-0 p-0 d-flex">
                <li class="mx-3" v-for="(link,index) in store.header.linkList">{{ store.header.linkList[index].nome}} <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" class="dropdown-btn"/> </li>
              </ul>
            </nav>

            <div class="find-us-icon">
              <a :href="store.header.iconPath.twitter" class=" text-warning">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
              <a :href="store.header.iconPath.facebook" class=" text-warning">
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </a>
              <a :href="store.header.iconPath.instagram" class=" text-warning">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
              <a :href="store.header.iconPath.linkedin" class=" text-warning">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped>

header{
  .logo-container{
    width: 170px;
    img{
      width: 100%;
    }
  }
  nav{
    ul{
      list-style: none;
      li{ 
        .dropdown-btn{
          cursor: pointer;
        }
      }
    }
  }
  .find-us-icon{
    *{
      margin: 0 .3rem;
      cursor: pointer;
    }
  }

}
</style>