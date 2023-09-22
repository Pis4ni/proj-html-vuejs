<script>
// import  from "./components/.vue";
import countowdnTicket from "./countdownTicket.vue";
import { buildImgPath } from "../../utils/img";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      title: "Hello i`m AppHeader.vue",
      imgLogoName: "dark-logo.png",
      countdownTicket: {
        txtContent: "Starts TOMORROW Our biggest event of the year...",
        btnTitle: "Get ticket",
        countdownEnd: '23/09/2023 16:00:00'
      },
      linkList: [
        {
          nome: "home",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
        {
          nome: "pages",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
        {
          nome: "courses",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
        {
          nome: "features",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
        {
          nome: "blog",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
        {
          nome: "shop",
          sublistLink: [
            {
              linkName: "link 1",
              linkPath: "#",
            },
            {
              linkName: "link 2",
              linkPath: "#",
            },
          ],
        },
      ],

      iconPath: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    };
  },
  components: {
    countowdnTicket,
  },
  methods: {
    buildImgPath,
  },
};
</script>

<template>
  <!-- </> -->
  <div class="d-flex align-items-center justify-content-center transparent-container ">
   
    <countowdnTicket :countdownTicketObj="this.countdownTicket" />

  </div>

  <header class="py-2">
    <div class="container">
      <div class="d-flex align-items-center">

        <div class="d-flex my-3 justify-content-between w-100">
          <div class="logo-container">
            <img :src="buildImgPath(this.imgLogoName)" alt="[Max Coach Img]" />
          </div>

          <nav>
            <ul class="m-0 p-0 d-flex">
              <li
                class="mx-3"
                v-for="(link, index) in this.linkList"
                key="index"
              >
                {{ this.linkList[index].nome }}
                <font-awesome-icon
                  icon="fa-solid fa-chevron-down"
                  size="2xs"
                  class="dropdown-btn"
                />
              </li>
            </ul>
          </nav>

          <div class="find-us-icon">
            <a :href="this.iconPath.twitter" class="text-warning">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a :href="this.iconPath.facebook" class="text-warning">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a :href="this.iconPath.instagram" class="text-warning">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a :href="this.iconPath.linkedin" class="text-warning">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.transparent-container{
  background-color: transparent;
}
header {
  .logo-container {
    width: 170px;
    img {
      width: 100%;
    }
  }
  nav {
    ul {
      list-style: none;
      li {
        .dropdown-btn {
          cursor: pointer;
        }
      }
    }
  }
  .find-us-icon {
    * {
      margin: 0 0.3rem;
      cursor: pointer;
    }
  }
}
</style>
