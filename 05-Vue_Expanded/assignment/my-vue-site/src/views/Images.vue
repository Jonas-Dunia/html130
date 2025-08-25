<!-- src/views/Images.vue -->
<template>
  <main class="container py-4">
    <h2 class="mb-3">Responsive Images</h2>
    <b-form-input v-model="query" placeholder="Type to filter images by description…" class="mb-3" />
    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="img in filteredImages" :key="img.src">
        <ImageCard :src="img.src" :alt="img.alt" :title="img.title">
          <!-- optional named slot for per-image caption -->
          <template v-slot:caption>
            <p class="card-text">{{ img.caption || img.alt }}</p>
          </template>
        </ImageCard>
      </div>
    </div>
  </main>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'

export default {
  name: 'ImagesPage',
  components: { ImageCard },
  data: () => ({
    query: '',
    images: [
      { src: '/img/Responsive.jpg', alt: 'Responsive image', title: 'Responsive', caption: 'A responsive image example.' },
      { src: '/img/Thumbnail.jpg',  alt: 'Thumbnail image',  title: 'Thumbnail',  caption: 'A thumbnail image example.' },
      { src: '/img/grid.jpg',       alt: 'Grid illustration', title: 'Grid',      caption: 'A grid illustration.' }
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