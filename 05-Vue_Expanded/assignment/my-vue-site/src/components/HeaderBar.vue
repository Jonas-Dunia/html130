<!--
  HeaderBar.vue
  - Uses Bootstrap 4 classes: bg-dark/text-white/py-4 add a dark banner with padding
  - Demonstrates Vue named slots:
      * slot name="title"     -> page title (provides a default)
      * slot name="subtitle"  -> page subtitle (provides a default)
-->
<template>
  <header class="bg-dark text-white py-4 mb-4">
    <div class="container">
      <!-- Named slot "title" with default -->
      <h1 class="h3 mb-1">
        <slot name="title">My Project</slot>
      </h1>
      <!-- Named slot "subtitle" with default -->
      <p class="mb-0 text-white-50">
        <slot name="subtitle">Welcome to my Vue + Bootstrap site.</slot>
      </p>
    </div>
  </header>
</template>

<script>
export default { name: 'HeaderBar' }
</script>