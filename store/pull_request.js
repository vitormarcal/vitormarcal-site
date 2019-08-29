const baseUrl = 'https://github.com/vitormarcal/vitormarcal/';
const blog = 'blob/master/content/blog/';

export const state = () => ({
  href: baseUrl
});

export const mutations = {
  hrefBlog(state, uri) {
    state.href = baseUrl + uri;
  },
};

export const actions = {
  definirUrlBlog({commit}, name) {
    let uri = blog + name + '.md';
    commit('hrefBlog', uri)
  }
};
