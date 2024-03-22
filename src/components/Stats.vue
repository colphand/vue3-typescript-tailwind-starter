<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <HeaderSmall>
          <template #header>
        The ContactMonkey effect
      </template>
      <template #subtitle>
        It’s time for an internal comms upgrade!
      </template>
        </HeaderSmall>
        <dl class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-gray-400/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-600">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderSmall from './HeaderSmall.vue'

const stats = [
  { id: 1, name: 'Lift in open rates after adoption', value: '33%' },
  { id: 2, name: 'Boost in employee engagement', value: '70%' },
  { id: 3, name: 'Days saved annually', value: '25' },
  { id: 4, name: 'Read time for newsletters', value: '9 seconds' },
]
</script>