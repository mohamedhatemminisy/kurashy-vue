<template>
  <!--about page-->
  <section class="about-in-page" v-if="aboutData">
    <div class="container">
      <div class="content">
        <div class="image">
          <img
            class="img-fluid"
            :src="aboutData.image"
            :alt="aboutData.title"
          />
        </div>
        <div class="text">
          <div class="main-title">
            <h2>{{ aboutData.title }}</h2>
            <p v-html="aboutData.description"></p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </section>
  <!--about page-->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AboutView",
  computed: {
    ...mapState(["aboutData"]),
  },
  created() {
    this.$store.dispatch("getAboutData");
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "en") {
          document.title = to.meta.title || "Al-qurashi  | About us";
        } else {
          document.title = to.meta.title || " القرشي | من نحن";
        }
      },
    },
  },
};
</script>

<style>
</style>