<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img :src="post.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </div>
        </article>
        
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 2,
    title: 'The Art of Productive Remote Work',
    href: '#',
    description:
      'Cupiditate ipsam quo. Cumque doloribus autem est voluptatum eius. Ut voluptatem ipsam aut veritatis tempora deleniti.',
    imageUrl:
      'https://source.unsplash.com/random/?meeting,office',
    date: 'Mar 24, 2020',
    datetime: '2020-03-24',
    category: { title: 'Productivity', href: '#' },
    author: {
      name: 'Emily Reynolds',
      role: 'Senior Product Manager',
      href: '#',
      imageUrl:
        'https://source.unsplash.com/random/?face,person',
    },
  },
  {
    id: 3,
    title: 'Mastering the Basics of Graphic Design',
    href: '#',
    description:
      'Sit necessitatibus magni repellendus et quam consequuntur. Quia qui et est ut incidunt. Atque eos ut excepturi rem est et molestiae. Consequatur qui aut est.',
    imageUrl:
      'https://source.unsplash.com/random/?corporate,meeting',
    date: 'Apr 2, 2020',
    datetime: '2020-04-02',
    category: { title: 'Design', href: '#' },
    author: {
      name: 'Ethan Peterson',
      role: 'Lead Designer',
      href: '#',
      imageUrl:
        'https://source.unsplash.com/random/?person,face',
    },
  },
  // More posts...
]
</script>