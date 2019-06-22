export const state = () => ({
  tags: {
    'java': {'background': '#01476e', 'color': '#ff8f8f','weight': 'bold'},
    'javascript': {'background': '#F7DF1E', 'color': 'black', 'weight': 'bold'},
    'opnião': {'background': '#390b0e', 'color': '#78ba79', 'weight': 'bold'},
    'none': {'background': '#d6d9e0', 'color': '#6c4070', 'weight': 'bold'}
  },
  tagColor: []
});

export const mutations = {
  color(state, tags) {
    tags.forEach( tag => {
      let estilo = state.tags.none;
      if (state.tags[tag] !== undefined) {
        estilo = state.tags[tag];
      }
      state.tagColor[tag] = `background-color:${estilo.background}; color:${estilo.color}; font-weight: ${estilo.weight}`
    })

  },
};
