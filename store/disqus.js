export const state = () => ({
  urlBlog: 'https://vitormarcal.com.br/blog',
  shortName: 'vitormarcal'
});

export const mutations = {
  aplicaUrlPost(state, attr) {
    state.urlPost = `${state.urlBlog}/${attr.name}/`
  }
};

