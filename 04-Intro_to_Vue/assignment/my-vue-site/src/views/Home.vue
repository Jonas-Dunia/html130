<!-- src/views/Home.vue -->
<template>
  <div>
    <!-- Jumbotron-like hero (BootstrapVue provides <b-jumbotron> for Bootstrap 4) -->
    <b-jumbotron header="Welcome to My Site" lead="This is a simple landing page with Bootstrap." class="mb-4">
      <!-- Tooltip demo: v-b-tooltip is provided by BootstrapVue -->
      <b-button variant="secondary" v-b-tooltip.hover title="Tooltip text" class="mt-2">
        Hover for Tooltip
      </b-button>
    </b-jumbotron>

    <!-- Toggle between Carousel vs Grid to satisfy v-if / v-else requirement -->
    <div class="d-flex align-items-center mb-3">
      <b-badge variant="info" class="mr-2">View Mode:</b-badge>
      <b-button size="sm" variant="primary" @click="showCarousel = !showCarousel">
        Switch to {{ showCarousel ? 'Grid' : 'Carousel' }}
      </b-button>
    </div>

    <!-- v-if / v-else flips UI -->
    <div v-if="showCarousel" aria-label="image carousel section">
      <b-carousel
        id="home-carousel"
        controls
        indicators
        background="#ababab"
        :interval="3000"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- v-for: build slides from data, NOT hard-coded -->
        <b-carousel-slide
          v-for="(img, i) in images"
          :key="`slide-${i}`"
          :img-src="img.src"
          :caption="img.alt"
        />
      </b-carousel>
      <!-- Bootstrap classes explained:
           .controls/.indicators show prev/next + dots; we map images via v-for -->
    </div>
    <div v-else class="text-center">
      <div class="d-flex justify-content-center flex-wrap">
        <!-- v-for grid of small images (replicates your 20% width sizing) -->
        <b-img
          v-for="(img, i) in images"
          :key="`grid-${i}`"
          :src="img.src"
          :alt="img.alt"
          class="demo-img m-2"
          fluid
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      showCarousel: true, // v-if / v-else switch
      // Repeated content lives here instead of hard-coding in template
      images: [
        { src: '/img/grid.jpg',       alt: 'Grid sample image' },
        { src: '/img/Thumbnail.jpg',  alt: 'Thumbnail sample image' },
        { src: '/img/Responsive.jpg', alt: 'Responsive sample image' }
      ]
    }
  }
}
</script>

<style scoped>
/* Scoped styles specific to Home page (optional) */
</style>