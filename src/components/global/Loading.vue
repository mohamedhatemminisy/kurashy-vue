<template>
  <div class="loader">
    <video width="250" height="250" muted="" autoplay="" loop="">
      <source src="@/assets/video/loading.webm" type="video/webm" />
      <!-- <source src="@/assets/videos/video.ogg" type="video/ogg" /> -->
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    footerData: Array,
  },
};
</script>
