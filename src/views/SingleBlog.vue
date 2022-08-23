<template>
  <section class="single-blog">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-8" v-if="single_blog.blogDetails">
            <div class="blog-box">
              <div class="image">
                <img
                  class="img-fluid"
                  :src="single_blog.blogDetails.image"
                  :alt="single_blog.blogDetails.title"
                />
              </div>
              <div class="details">
                <div class="title">
                  <h3>
                    {{ single_blog.blogDetails.title }}
                  </h3>
                </div>
                <div class="text">
                  <p
                    class="justify-center"
                    v-html="single_blog.blogDetails.description"
                  ></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="side-widget">
              <div class="other-blogs">
                <div class="title">
                  <h4>{{$t("Blogs")}}</h4>
                </div>
                <ul>
                  <li v-for="blog in single_blog.blogs" :key="blog.id">
                    <router-link :to="`/single-blog/${blog.id}`">{{
                      blog.title
                    }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="help">
                <div class="title">
                  <h4>{{ single_blog.contact.title }}</h4>
                </div>
                <p v-html="single_blog.contact.description"></p>
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
</template>

<script>
import axios from "axios";

export default {
  name: "SingleBlog",

  data() {
    return {
      single_blog: null,
      locale: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
    };
  },
  methods: {
    async initData() {
      this.$store.state.loading = true;
      await axios
        .get(`single-blog?id=${this.$route.params.id}`, {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": this.locale,
          },
        })
        .then((result) => {
          this.single_blog = result.data.data;
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