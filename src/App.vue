<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1">
      
  <router-view />
  </main>
  <Footer class="mt-auto flex-shrink-0 w-full pt-12" />
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  components: {
    Footer,
    NavBar,
  },
})
</script>
