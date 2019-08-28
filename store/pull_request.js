const baseUrl = 'https://github.com/vitormarcal/vitormarcal/';
const blog = 'blob/master/content/blog/';

export const state = () => ({
  href: baseUrl
});

export const mutations = {
  hrefBlog(state, name) {
    let uri = baseUrl;
    if (name) {
      uri += blog + name + '.md';
    }
    state.href = uri;
    console.log(1)
    console.log(state.href)
    console.log(2)
  },
};
