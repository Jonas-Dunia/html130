<!-- src/views/Images.vue -->
<template>
  <div>
    <h2 class="mb-3">Responsive Images</h2>
    <b-form-input v-model="query" placeholder="Type to filter images by description…" class="mb-3" />
    <div class="d-flex flex-wrap">
      <b-img v-for="(img, i) in filteredImages" :key="`img-${i}`" :src="img.src" :alt="img.alt" class="demo-img m-2" fluid />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesPage',
  data: () => ({
    query: '',
    images: [
      { src: '/img/Responsive.jpg', alt: 'Responsive image' },
      { src: '/img/Thumbnail.jpg',  alt: 'Thumbnail image' },
      { src: '/img/grid.jpg',       alt: 'Grid illustration' }
    ]
  }),
  computed: {
    filteredImages() {
      const q = this.query.trim().toLowerCase()
      return q ? this.images.filter(i => i.alt.toLowerCase().includes(q)) : this.images
    }
  }
}
</script>

<style scoped>
/* The .demo-img width comes from global SCSS; we add spacing here if needed */
</style>