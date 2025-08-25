<!-- src/App.vue -->
<template>
  <div :class="darkMode ? 'app-dark' : 'app-light'">
    <!-- BootstrapVue navbar; classes mirror your Bootstrap 4 navbar look -->
    <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-4">
      <!-- Brand -->
      <b-navbar-brand to="/" exact>MySite</b-navbar-brand>

      <!-- Mobile toggler -->
      <b-navbar-toggle target="main-nav" />

      <b-collapse id="main-nav" is-nav>
        <b-navbar-nav>
          <!-- Using 'to' turns these into router-links; the 'active-class' is handled by Vue Router -->
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/images">Images</b-nav-item>
          <b-nav-item to="/grid">Grid</b-nav-item>
          <b-nav-item to="/accordion">Accordion</b-nav-item>
        </b-navbar-nav>

        <!-- Right side: demo dark-mode toggle (Bonus: Vue changing CSS) -->
        <b-navbar-nav class="ml-auto">
          <b-button size="sm" variant="light" @click="darkMode = !darkMode">
            Toggle {{ darkMode ? 'Light' : 'Dark' }} Mode
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Lesson 05: named-slot header component -->
    <HeaderBar>
      <template v-slot:title>RuralNotes Gallery</template>
      <template v-slot:subtitle>Components, props, mixins &amp; slots (Lesson 08)</template>
    </HeaderBar>

    <!-- Routed pages render here -->
    <b-container class="pb-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  name: 'AppShell',
  components: { HeaderBar },
  data() {
    return { darkMode: false } // Bonus: Vue-driven CSS theme toggle
  }
}
</script>

<style scoped>
/* Keep App-specific tweaks here if needed */
</style>