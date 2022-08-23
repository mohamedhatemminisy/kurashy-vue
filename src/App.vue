<template>
  <meta
    name="description"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore nobis illum. Harum a voluptates in eius tenetur quidem Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <meta property="og:title" content="Hokm Aladalah" />
  <meta property="og:type" content="The type" />
  <meta property="og:url" content="http://url.com/" />
  <meta property="og:image" content="http://image.jpg" />
  <meta name="keywords" content="" />

  <Loading v-if="this.$store.state.loading" />

  <Header :headerData="settingsData" :headerFixed="headerFixedVal" />

  <Breadcrumb v-if="!isHome" />

  <router-view />

  <!--to top-->
  <div id="toTop"  v-if="showToTopBtn" @click="toTop">
    <button><i class="bi bi-chevron-double-up"></i></button>
  </div>
  <!--to top-->
  <Footer :footerData="settingsData" />
</template>


<script>
import Loading from "@/components/global/Loading.vue";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { mapState } from "vuex";
import AOS from "aos";

export default {
  components: {
    Breadcrumb,
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      isLoaded: false,
      headerData: [],
      footerData: [],
      isHome: null,
      showToTopBtn: null,
      headerFixedVal: null,
    };
  },
  computed: {
    ...mapState(["settingsData"]),
  },
  created() {
    this.$store.dispatch("getSettingsData");
  },
	methods: {
		toTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
		async install() {
			this.deferredPrompt.prompt();
		}
	},
  mounted() {
    document.onreadystatechange = () => {
      window.onscroll = () => {
        let offsetTop = window.pageYOffset;

        if (offsetTop > 500) {
          this.showToTopBtn = true;
        } else {
          this.showToTopBtn = null;
        }

        if (offsetTop > 200) {
          this.headerFixedVal = "fixed";
        } else {
          this.headerFixedVal = "";
        }
      };

      AOS.init({
        duration: 1000,
        offset: 10,
      });
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.name == "HomeView") {
          this.isHome = true;
        } else {
          this.isHome = null;
        }
      },
    },
  },
};
</script>
