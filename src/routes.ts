import HomePage from './views/HomePage.vue'
import About from './views/About.vue'
import ProductPage from './views/ProductPage.vue'
import NotFound from './views/NotFound.vue'
import BlogPage from './views/BlogPage.vue'

export const routes = [
  { path: '/', component: HomePage, meta: { title: 'Home' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/product', component: ProductPage, meta: { title: 'Our Product' }},
  { path: '/blog', component: BlogPage, meta: { title: 'Blog' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]