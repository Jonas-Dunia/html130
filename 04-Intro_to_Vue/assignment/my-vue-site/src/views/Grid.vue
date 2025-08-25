<!-- src/views/Grid.vue -->
<template>
  <div>
    <h2>Grid System Example</h2>
    <b-img src="/img/grid.jpg" alt="Grid illustration" class="demo-img my-3" fluid />

    <b-row class="mt-3">
      <b-col v-for="(col, i) in row1" :key="`r1c${i}`" :cols="12" :sm="6" :lg="3" :class="col.classes">
        {{ col.text }}
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col :cols="12" :md="8" class="bg-success text-white p-3 border">{{ row2.main }}</b-col>
      <b-col :cols="12" :md="4" class="bg-danger text-white p-3 border">{{ row2.sidebar }}</b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'GridPage',
  data: () => ({
    row1: [
      { text: 'Column 1', classes: 'bg-light p-3 border' },
      { text: 'Column 2', classes: 'bg-secondary text-white p-3 border' },
      { text: 'Column 3', classes: 'bg-info text-white p-3 border' },
      { text: 'Column 4', classes: 'bg-warning p-3 border' }
    ],
    row2: {
      main: 'Main Content (col-md-8)',
      sidebar: 'Sidebar (col-md-4)'
    }
  })
}
</script>

<style scoped>
</style>