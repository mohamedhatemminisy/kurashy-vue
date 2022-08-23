<template>
  <!--breadcrumb-->
  <nav
    class="main-breadcrumb"
    aria-label="breadcrumb"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/bgs/breadcrumb.jpg') + ')',
    }"
  >
    <div class="container">
      <div class="breadcrumb-title">
        <h2> {{ $t(`${pageTitle}`) }}</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'HomeView' }">
              {{ $t("home") }}</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page" v-if="pageTitle"> {{ $t(`${pageTitle}`) }}</li>

        </ol>
      </nav>
    </div>
  </nav>
  <!--breadcrumb-->
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      pageTitle: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.pageTitle = to.name;
      },
    },
  },
};
</script>

<style>
</style>