<template>
<div class="bg-white pt-16 pb-8 sm:pt-20 sm:pb-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600"><slot name="eyebrow"></slot></h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="header"></slot></p>
        <p class="mt-6 text-lg leading-8 text-gray-600"><slot name="subtitle"></slot></p>
      </div>
    </div>
  </div>
</template>
