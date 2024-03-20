<template>
  <div>
    <HelloWorld />
    <LogoCloud />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'
import LogoCloud from '../components/LogoCloud.vue'

export default defineComponent({
  components: {
    HelloWorld,
    LogoCloud,
  },
})
</script>
