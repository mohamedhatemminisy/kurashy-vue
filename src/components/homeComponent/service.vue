<template>
  <!--services-->
  <section class="services">
    <div class="container">
      <div class="main-title">
        <h2>{{ $t("Services") }}</h2>
      </div>
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
                    >{{ service.title}}</router-link
                  >
                </div>
                <p v-html="service.description.substring(0, 100)"></p>
                <div class="btns">
                  <router-link
                    class="details-btn"
                    :to="`/single-service/${service.id}`"
                    aria-label="service link"
                  >
                    <i class="bi bi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services-btn">
          <div class="outer-btn">
            <router-link class="btn" :to="{ name: 'Services' }"
              ><span>{{ $t("ServicesMore") }}</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--services-->
</template>

<script>
export default {
  props: {
    serviceData: Array,
  },
};
</script>

<style>
</style>