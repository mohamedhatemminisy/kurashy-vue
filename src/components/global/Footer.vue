<template>
  <!--footer part-->
  <footer v-if="footerData">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="footer-box">
              <div class="text">
                <router-link class="footer-logo" :to="{ name: 'HomeView' }">
                  <img
                    class="img-fluid mb-4"
                    :src="footerData.logo"
                    :alt="footerData.website_title"
                /></router-link>
                <p v-html="footerData.footer_description"></p>
              </div>
              <div class="social-links">
                <h3>{{ $t("Follow") }}</h3>
                <div class="links">
                  <a
                    class="bi bi-facebook"
                    :href="footerData.facebook"
                    target="_blank"
                    aria-label="facebook"
                  ></a>

                  <a
                    class="bi bi-twitter"
                    :href="footerData.twitter"
                    target="_blank"
                    aria-label="twitter"
                  ></a
                  ><a
                    class="bi bi-instagram"
                    :href="footerData.instagram"
                    target="_blank"
                    aria-label="instagram"
                  ></a
                  ><a
                    class="bi bi-linkedin"
                    :href="footerData.linkedin"
                    target="_blank"
                    aria-label="linkedin"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box">
              <h3>{{ $t("links") }}</h3>
              <ul class="map-links">
                <li>
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    :to="{ name: 'HomeView' }"
                  >
                    {{ $t("home") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    :to="{ name: 'About' }"
                    >{{ $t("About") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    :to="{ name: 'Services' }"
                    >{{ $t("Services") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    :to="{ name: 'Blogs' }"
                    >{{ $t("Blogs") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    :to="{ name: 'Contact' }"
                    >{{ $t("Contact") }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer-box">
              <h3>{{ $t("Contact") }}</h3>
              <div class="contact">
                <p><i class="bi bi-pin-map"></i>{{ footerData.address }}</p>

                <p>
                  <i class="bi bi-telephone"></i>
                  <a :href="`tel:${footerData.phone}`">
                    {{ footerData.phone }}
                  </a>
                </p>
                <p>
                  <i class="bi bi-envelope"></i>
                  <a :href="`mailto:${footerData.email}`">{{
                    footerData.email
                  }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="copy-text">
          <p>
            <a target="_blank" href="https://marwan.tech/ar">{{
              footerData.copyrights
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!--footer part-->
</template>

<script>
export default {
  props: {
    footerData: Array,
  },
};
</script>

<style>
</style>