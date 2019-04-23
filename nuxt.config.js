import pkg from './package'

const fs = require("fs");

const files = fs.readdirSync('./static/articles');
function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`
}

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'Content-Language', content: 'pt-br' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'country', content: 'Brazil' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'revisit-after', content: '7 days' },
      { hid: 'author', name: 'author', content: pkg.author },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ],
  styleResources: {
    scss: '@/assets/css/*.scss'
  },
  generate: {
    routes: () => files.map(getSlugs)
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
