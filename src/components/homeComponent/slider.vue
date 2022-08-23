<template>
  <section class="main-slider">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="main-slider-carousel"
    >
      <swiper-slide class="item" v-for="slider in sliderData" :key="slider.id">
        <img class="img-fluid" :src="slider.image" :alt="slider.title" />
        <div class="item-details">
          <div class="container">
            <div class="item-text">
              <h1 class="title">
                {{ slider.title }}
              </h1>
              <p v-html="slider.description"></p>
              <div class="item-btn">
                <div class="outer-btn">
                  <router-link class="btn" :to="{ name: 'About' }"
                    ><span>{{ $t("Started") }}</span></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "./style.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default {
  name: "Slider",
  props: {
    sliderData: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style>
</style>