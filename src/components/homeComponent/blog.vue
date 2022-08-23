<template>
  <!--blogs-->
  <section class="blogs">
    <div class="container">
      <div class="main-title">
        <h2>{{ $t("Blogs") }}</h2>
      </div>
      <div class="content">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 box"
            v-for="blog in blogData"
            :key="blog.id"
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
                    <i class="bi bi-calendar"></i>{{blog.creationDate}}
                  </li>
                </ul>
                <div class="title">
                  <router-link :to="`/single-blog/${blog.id}`">
                    {{ blog.title }}</router-link
                  >
                </div>
                <p v-html="blog.description.substring(0, 200)"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="blogs-btn">
          <div class="outer-btn">
            <router-link class="btn" :to="{ name: 'Blogs' }"
              ><span>{{ $t("BlogsMore") }}</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--blogs-->
</template>

<script>
export default {
  props: {
    blogData: Array,
  },
};
</script>

<style>
</style>