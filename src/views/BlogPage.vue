<template>
    <Header>
      <template #eyebrow>
        Here might be a page title
      </template>
      <template #header>
        Here might be a page title
      </template>
      <template #subtitle>
        Here might be a page title
      </template>
    </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'

export default defineComponent({
  components: {
    Header,
  },
})
</script>
