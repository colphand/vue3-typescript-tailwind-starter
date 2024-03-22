<template>
  <div>
    <Header>
      <template #eyebrow>
        Here might be a page title
      </template>
      <template #header>
        From the blog
      </template>
      <template #subtitle>
        Learn how to grow your business with our expert advice.
      </template>
    </Header>
    <BlogList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import BlogList from '../components/BlogList.vue'

export default defineComponent({
  components: {
    Header,
    BlogList,
  },
})
</script>
