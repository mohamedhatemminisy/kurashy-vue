<template>
  <!--single services-->
  <section class="single-service">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-8" v-if="single_service.single_service">
            <div class="service-box">
              <div class="image">
                <img
                  class="img-fluid"
                  :src="single_service.single_service.image"
                  :alt="single_service.single_service.title"
                />
              </div>
              <div class="details">
                <div class="title">
                  <h3>
                    {{ single_service.single_service.title }}
                  </h3>
                </div>
                <div class="text">
                  <p v-html="single_service.single_service.description"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="side-widget">
              <div class="other-services">
                <div class="title">
                  <h4>{{$t("Services") }}</h4>
                </div>
                <ul v-if="single_service.services">
                  <li
                    v-for="service in single_service.services"
                    :key="service.id"
                  >
                    <router-link :to="`/single-service/${service.id}`">{{
                      service.title
                    }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="help" v-if="single_service.contact">
                <div class="title">
                  <h4>{{ single_service.contact.title }}</h4>
                </div>
                <p v-html="single_service.contact.description"></p>
                <router-link class="btn" :to="{ name: 'Contact' }">{{
                  $t("Contact")
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--single services   -->
</template>

<script>
import axios from "axios";

export default {
  name: "SingleService",
  data() {
    return {
      single_service: null,
      locale: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
    };
  },
  methods: {
    async initData() {
      this.$store.state.loading = true;
      await axios
        .get(`single-service?id=${this.$route.params.id}`, {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": this.locale,
          },
        })
        .then((result) => {
          this.single_service = result.data.data;
          this.$store.state.loading = false;
        });
    },
  },
  async created() {
    this.initData();
    this.$watch(
      () => this.$route.params,
      async () => {
        this.initData();
      }
    );
  },
};
</script>

<style>
</style>