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
  setProject({commit}) {
    getPortfolio()
      .then(payload => commit('SET_PROJECTS', payload))
  }
};


const baseUrl = 'https://raw.githubusercontent.com/vitormarcal/portfolio-store/master';

function getPortfolio() {
  const payloadUrl = `${baseUrl}/payload.json`;
  return fetch(payloadUrl)
    .then(r => r.json());
}

class Project {
  constructor(props) {
    this.name = props.name;
    this.img = `${baseUrl}${props.img}`;
    this.description = props.description;
    this.alt = props.alt;
    this.link = props.link;
  }
}
