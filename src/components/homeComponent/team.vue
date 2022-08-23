<template>
  <!--team-->
  <section class="team" v-if="teamData">
    <div class="container">
      <div class="main-title">
        <h2>{{ $t("team") }} </h2>
      </div>
      <div class="content">
        <div class="team-slider owl-theme">
          <swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :navigation="navigation"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="team in teamData" :key="team.id">
              <div class="team-box" data-aos="fade-up">
                <div class="image">
                  <img class="img-fluid" :src="team.image" :alt="team.name" />
                </div>
                <div class="details">
                  <p class="job-title">{{ team.name }}</p>
                  <div class="name">
                    <a href="javascript:void(0)">{{ team.description }} </a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
  <!--team-->
</template>

<script>
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default {
  props: {
    teamData: Array,
  },
  data() {
    return {
      navigation: {
        nextEl: ".nav-owl",
        // prevEl: ".nav-owl",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
};
</script>

<style>
</style>