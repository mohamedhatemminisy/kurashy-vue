<template>
  <Slider :sliderData="homeData.slider" />
  <About :aboutData="homeData.about" />
  <Service
    :servicePageData="homeData.service_page"
    :serviceData="homeData.services"
  />
  <Team :teamData="homeData.team" />
  <Blog :blogData="homeData.blogs" />
</template>
<script>
// @ is an alias to /src
import Slider from "@/components/homeComponent/slider.vue";
import About from "@/components/homeComponent/about.vue";
import Service from "@/components/homeComponent/service.vue";
import Team from "@/components/homeComponent/team.vue";
import Blog from "@/components/homeComponent/blog.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    Slider,
    About,
    Service,
    Team,
    Blog,
  },

  data() {
    return {
      sliderData: [],
      aboutData: [],
      serviceData: [],
      servicePageData: [],
      teamData: [],
      blogData: [],
    };
  },
  computed: {
    ...mapState(["homeData"]),
  },
  created() {
    this.$store.dispatch("getHomeData");
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "en") {
          document.title = to.meta.title || "Al-qurashi  | Home";
        } else {
          document.title = to.meta.title || " القرشي | الرئيسية";
        }
      },
    },
  },
};
</script>
