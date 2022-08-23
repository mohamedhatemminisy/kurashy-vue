<template>
  <!--blogs page-->
  <section class="blogs-in-page" v-if="blogData">
    <div class="container">
      <div class="content">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 box"
            v-for="blog in blogData"
            :key="blog"
          >
            <div class="blogs-box" data-aos="fade-up">
              <router-link :to="`/single-blog/${blog.id}`">
                <div class="image">
                  <img
                    class="img-fluid"
                    :src="blog.image"
                    :alt="blog.title"
                  /></div
              ></router-link>
              <div class="details">
                <ul class="meta">
                  <li class="date">
                    <i class="bi bi-calendar"></i>{{ blog.creationDate }}
                  </li>
                </ul>
                <div class="title">
                  <router-link :to="`/single-blog/${blog.id}`">{{
                    blog.title
                  }}</router-link>
                </div>
                <p v-html="blog.description.substring(0, 200)"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--blogs page-->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BlogsView",
  computed: {
    ...mapState(["blogData"]),
  },
  created() {
    this.$store.dispatch("getBlogData");
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (this.$i18n.locale == "en") {
          document.title = to.meta.title || "Al-qurashi  | Blogs";
        } else {
          document.title = to.meta.title || " القرشي | المقالات";
        }
      },
    },
  },
};
</script>

<style>
</style>