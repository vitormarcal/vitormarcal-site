export const state = () => ({
  urlPost: 'https://vitormarcal.com.br/blog',
  shortName: 'vitormarcal'
});

export const mutations = {
  aplicaUrlPost(state, attr) {
    state.url = `´${state.url}/${attr.name}/`
  }
};

