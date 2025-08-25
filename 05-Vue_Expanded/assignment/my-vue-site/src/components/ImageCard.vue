<template>
  <!-- Click to toggle border; v-elevate.lg adds hover elevation (extra-credit) -->
  <figure class="card h-100" @click="toggleBorder" v-elevate.lg>
    <img
      class="card-img-top img-fluid"
      :src="src"
      :alt="alt"
      :title="title"
      :class="imageBorderClass"
    />
    <figcaption class="card-body">
      <h5 class="card-title">{{ title }}</h5>

      <!-- optional caption slot with default -->
      <slot name="caption">
        <p class="card-text text-muted mb-0">Click the image to toggle a border.</p>
      </slot>
    </figcaption>
  </figure>
</template>

<script>
import toggleBorder from '@/mixins/toggleBorder'

export default {
  name: 'ImageCard',
  mixins: [toggleBorder],
  props: {
    src:   { type: String, required: true },
    alt:   { type: String, required: true },
    title: { type: String, required: true }
  }
}
</script>

<style scoped>
.card { cursor: pointer; }
</style>