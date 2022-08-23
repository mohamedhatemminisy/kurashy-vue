<template>
  <!--services-->
  <section class="services-in-page" v-if="serviceData">
    <div class="container">
      <div class="content">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 box"
            v-for="service in serviceData"
            :key="service.id"
          >
            <div class="service-box" data-aos="fade-up">
              <div class="image">
                <router-link :to="`/single-service/${service.id}`">
                  <img
                    class="img-fluid"
                    :src="service.image"
                    :alt="service.title"
                /></router-link>
              </div>
              <div class="details">
                <div class="title">
                  <router-link :to="`/single-service/${service.id}`"
                    >{{ service.title }}</router-link
                  >
                </div>
                <p v-html="service.description.substring(0, 150)"></p>
                <div class="btns">
                  <router-link
                    class="details-btn"
                    aria-label="service link"
                    :to="`/single-service/${service.id}`"
                    ><i class="bi bi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--services-->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ServicesView",
  computed: {
    ...mapState(["serviceData"]),
  },
  created() {
    this.$store.dispatch("getServiceData");
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "en") {
          document.title = to.meta.title || "Al-qurashi  | Services";
        } else {
          document.title = to.meta.title || " القرشي | الخدمات";
        }
      },
    },
  },
};
</script>

<style>
</style>