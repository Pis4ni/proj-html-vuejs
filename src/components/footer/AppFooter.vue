<script>
// import MyComponent from "./components/MyComponent.vue";
import NewsletterBanner from "./NewsletterBanner.vue";
import MapList from "./MapList.vue";
import InstagramWidget from "./InstagramWidget.vue";
// listObj
export default {
  data() {
    return {
      title: "Hello i`m AppFooter.vue",
      map: [
        {
          title: "Address",
          list: [
            {
              title: "382 NE 191st # 87394 Miami, FL 33179-3899",
              path: "#",
            },
            {
              title: "+1 (305) 547-9909 (9am - 5pm EST, Monday - friday)",
              path: "#",
            },
            {
              title: "support@maxcoach.com",
              path: "#",
            },
            {
              title: ``,
              path: "#",
            },
            // {
            //   title:``,
            //   path:'#'
            // },
          ],
        },
        {
          title: "Explore",
          list: [
            {
              title: "Start here",
              path: "#",
            },
            {
              title: "Success story",
              path: "#",
            },
            {
              title: "Blog",
              path: "#",
            },
            {
              title: "Courses",
              path: "#",
            },
            {
              title: "Contact us",
              path: "#",
            },
            // {
            //   title:``,
            //   path:'#'
            // },
          ],
        },
        {
          title: "Information",
          list: [
            {
              title: "Membership",
              path: "#",
            },
            {
              title: "Purchase guide",
              path: "#",
            },
            {
              title: "Privacy policy",
              path: "#",
            },
            {
              title: "Terms of services",
              path: "#",
            },
          ],
        },
        {
          title: "Information",
          profile: "@maxcoach",
          profilePath: "#",
          list: [
            {
              title: "120084500_197897808368764_8114555493043279565_n.jpg",
              path: "#",
            },
            {
              title: "120012142_177596140500760_8623485824101406058_n.jpg",
              path: "#",
            },
            {
              title: "120099363_364334431619755_7198812647386067017_n.jpg",
              path: "#",
            },
          ],
        },
      ],
      copyrights:'© 2020 Maxcoach. All Rights Reserved'
    };
  },

  components: {
    NewsletterBanner,
    MapList,InstagramWidget
  },
};
</script>

<template>
  <NewsletterBanner />
  <div class="wrapper">
    <div class="container py-5">
      <div class="d-flex align-items-start justify-content-between">
        
        <MapList :listObj="this.map[0]" />
        <MapList :listObj="this.map[1]" />
        <MapList :listObj="this.map[2]" />

        <InstagramWidget :listObj="this.map[3]" />

      </div>
      <div class="copyrights text-center text-warning mt-5">
        {{ this.copyrights }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
