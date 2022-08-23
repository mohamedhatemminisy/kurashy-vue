<template>
  <!--about us-->
  <section class="about">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-4">
            <div class="about-image">
              <div class="image" data-aos="fade-up">
                <img
                  class="img-fluid"
                  :src="aboutData.image"
                  :alt="aboutData.title"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-7 d-flex flex-column justify-content-center">
            <div class="about-text" data-aos="fade-down">
              <div class="main-title" data-aos="fade-down">
                <span class="top-title">{{ $t("About") }}</span>
                <h2>{{ aboutData.title }}</h2>
              </div>
              <p
                data-aos="fade-down"
                data-aos-delay="100"
                v-html="aboutData.description"
              ></p>

              <div class="about-btn" data-aos="fade-down" data-aos-delay="200">
                <div class="outer-btn">
                  <router-link class="btn" :to="{ name: 'About' }"
                    ><span>{{ $t("About") }}</span></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--about us-->
</template>

<script>
export default {
  props: {
    aboutData: Array,
  },
};
</script>

<style>
</style>