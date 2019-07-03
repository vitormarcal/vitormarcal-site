import pkg from './package'
import fs from 'fs';
import path from "path";
import frontmatter from "front-matter";

const files = fs.readdirSync('./content/blog');

const metas = files.map(getAttributes).filter(e => !!e.id);

fs.writeFileSync('./content/posts.js', 'export default ' + JSON.stringify(metas))

function getAttributes(post, index) {
  const content = fs.readFileSync(`./content/blog/${post}`, 'utf8');
  const att = frontmatter(content);
  return att.attributes
}

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
    title: pkg.title,
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {'http-equiv': 'Content-Language', content: 'pt-br'},
      {name: 'og:locale', content: 'pt_BR'},
      {name: 'country', content: 'Brazil'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'mobile-web-app-capable', content: 'yes'},
      {name: 'googlebot', content: 'index,follow'},
      {name: 'robots', content: 'index,follow,noodp'},
      {name: 'revisit-after', content: '7 days'},
      {hid: 'author', name: 'author', content: pkg.author},
      {hid: 'description', name: 'description', content: pkg.description},
      {hid: 'keywords', name: 'keywords', content: 'web development, programmer, Vítor Marçal'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'author', type: 'text/plain', href: '/humans.txt'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

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
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
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
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content/blog'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      })
    }
  }
}
