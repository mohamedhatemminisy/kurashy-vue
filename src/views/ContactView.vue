<template>
  <section class="contact">
    <div class="container">
      <div class="info-area">
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <div class="info-box">
              <i class="bi bi-envelope"> </i>
              <h4>{{ $t("email") }}</h4>
              <a :href="`mailto:${settingsData.email}`">{{
                settingsData.email
              }}</a>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="info-box">
              <i class="bi bi-telephone"></i>
              <h4>{{ $t("phone") }}</h4>
              <a :href="`tel:${settingsData.phone}`">
                {{ settingsData.phone }}
              </a>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="info-box">
              <i class="bi bi-pin-map"></i>
              <h4>{{ $t("address") }}</h4>
              <span>{{ settingsData.address }}</span>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>

  <section class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564056191!2d31.22344491853406!3d30.059558098334296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1634654464669!5m2!1sen!2seg"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>
</template>

<script>
// @ is an alias to /src
import ContactForm from "@/components/ContactComponent/contactForm.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState(["settingsData"]),
  },
  created() {
    this.$store.dispatch("getContactData");
  },

  components: {
    ContactForm,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "en") {
          document.title = to.meta.title || "Al-qurashi  | Contact us";
        } else {
          document.title = to.meta.title || " القرشي | تواصل معنا";
        }
      },
    },
  },
};
</script>
