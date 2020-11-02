class Project {
  constructor(props) {
    this.name = props.name;
    this.img = props.img;
    this.description = props.description;
    this.alt = props.alt;
    this.link = props.link;

  }

}

export const state = () => ({
  projects: []
});

export const mutations = {
  SET_PROJECTS(state, payload) {
    if (payload) {
      state.projects = payload.map(p => new Project(p));
    }
  },
};

export const actions = {
  setProject({commit}, payload) {
    commit('SET_PROJECTS', payload)
  }
};
