<template>
  <!--header-->
  <header v-if="headerData" :class="headerFixed">
    <div class="top-part">
      <div class="container-fluid">
        <div class="content">
          <div class="some-info">
            <div class="info">
              <span class="icon"><i class="bi bi-telephone"> </i></span>
              <p>
                <a :href="`tel:${headerData.phone}`">
                  {{ headerData.phone }}
                </a>
              </p>
            </div>
            <div class="info">
              <span class="icon"><i class="bi bi-envelope"> </i></span>
              <p>
                <a :href="`mailto:${headerData.email}`">{{
                  headerData.email
                }}</a>
              </p>
            </div>
          </div>
          <div class="links">
            <a
              class="bi bi-facebook"
              :href="headerData.facebook"
              target="_blank"
              aria-label="facebook"
            ></a>

            <a
              class="bi bi-twitter"
              :href="headerData.twitter"
              target="_blank"
              aria-label="twitter"
            ></a
            ><a
              class="bi bi-instagram"
              :href="headerData.instagram"
              target="_blank"
              aria-label="instagram"
            ></a
            ><a
              class="bi bi-linkedin"
              :href="headerData.linkedin"
              target="_blank"
              aria-label="linkedin"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!--navbar desktop-->
    <nav class="navbar main-nav navbar-expand-lg">
      <div class="container-fluid">
        <div class="d-flex">
          <div class="navbar-brand">
            <router-link :to="{ name: 'HomeView' }">
              <img
                class="img-fluid"
                :src="headerData.logo"
                :alt="headerData.website_title"
            /></router-link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#side_menu"
            aria-controls="side_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="hamburger-menu">
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              class="nav-item"
              :class="{ active: $route.name === 'HomeView' }"
            >
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'HomeView' }"
              >
                {{ $t("home") }}</router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.name === 'About' }">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
                >{{ $t("About") }}</router-link
              >
            </li>

            <li
              class="nav-item"
              :class="{ active: $route.name === 'Services' }"
            >
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'Services' }"
                >{{ $t("Services") }}</router-link
              >
            </li>

            <li class="nav-item" :class="{ active: $route.name === 'Blogs' }">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'Blogs' }"
                >{{ $t("Blogs") }}</router-link
              >
            </li>

            <li class="nav-item" :class="{ active: $route.name === 'Contact' }">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'Contact' }"
                >{{ $t("Contact") }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="btn-area">
          <div class="dropdown">
            <button
              class="btn consultant dropdown-toggle"
              id="dropdownMenuButton1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("language") }}
            </button>
            <ul
              class="dropdown-menu languages"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a class="dropdown-item" @click="handleLangAr">{{
                  $t("Ar")
                }}</a>
              </li>
              <li>
                <a class="dropdown-item" @click="handleLangEn">{{
                  $t("En")
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!--navbar desktop-->

    <!--side menu in mobile only-->
    <div
      class="offcanvas offcanvas-start"
      id="side_menu"
      data-bs-scroll="true"
      tabindex="-1"
      aria-labelledby="side_menu_label"
    >
      <div class="offcanvas-header">
        <button
          class="btn-close btn-close-dark"
          type="button"
          data-bs-dismiss="offcanvas"
          data-bs-target="#side_menu"
          aria-controls="side_menu"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="navbar">
          <div class="collapsed navbar-collapse" id="navbarNavSide">
            <ul class="navbar-nav">
              <li
                class="nav-item"
                :class="{ active: $route.name === 'HomeView' }"
              >
                <router-link
                  class="nav-link"
                  aria-current="page"
                  :to="{ name: 'HomeView' }"
                >
                  {{ $t("home") }}</router-link
                >
              </li>

              <li class="nav-item" :class="{ active: $route.name === 'About' }">
                <router-link
                  class="nav-link"
                  aria-current="page"
                  :to="{ name: 'About' }"
                  >{{ $t("About") }}</router-link
                >
              </li>

              <li
                class="nav-item"
                :class="{ active: $route.name === 'Services' }"
              >
                <router-link
                  class="nav-link"
                  aria-current="page"
                  :to="{ name: 'Services' }"
                  >{{ $t("Services") }}</router-link
                >
              </li>

              <li class="nav-item" :class="{ active: $route.name === 'Blogs' }">
                <router-link
                  class="nav-link"
                  aria-current="page"
                  :to="{ name: 'Blogs' }"
                  >{{ $t("Blogs") }}</router-link
                >
              </li>

              <li
                class="nav-item"
                :class="{ active: $route.name === 'Contact' }"
              >
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
      </div>
    </div>
  </header>
  <!--header-->
</template>

<script>
export default {
  props: {
    headerData: Array,
    headerFixed: String,
  },

  methods: {
    handleLangAr() {
      window.location = window.location.href.replace("/en/", "/ar/");
    },
    handleLangEn() {
      window.location = window.location.href.replace("/ar/", "/en/");
    },
  },
  created() {
    if (this.$i18n.locale == "ar") {
      let htmlElement = document.querySelector("html");
      htmlElement.setAttribute("dir", "rtl");
      htmlElement.setAttribute("lang", "ar");
    } else {
      let htmlElement = document.querySelector("html");
      htmlElement.setAttribute("dir", "ltr");
      htmlElement.setAttribute("lang", "en");
    }
  },
  mounted() {
    let sideMenu = document.querySelector("#side_menu");
    sideMenu.addEventListener(
      "click",
      function (event) {
        const targetClasses = event.target.classList;
        if (
          (!targetClasses.contains("dropdown-toggle") &&
            targetClasses.contains("nav-link")) ||
          targetClasses.contains("dropdown-item")
        ) {
          sideMenu.classList.remove("show");
          let offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
          offcanvasBackdrop.classList.remove("show");
        }
      },
      { passive: true }
    );
  },
};
</script>

<style>
.languages a {
  cursor: pointer;
}
</style>