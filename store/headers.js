export const state = () => ({
  head: {title: '', meta: []}
});

export const mutations = {
  aplicaHead(state, attr) {
    state.head.title = attr.title;
    state.head.meta.splice(0, state.head.meta.length);
    state.head.meta.push({charset: 'utf-8'});
    state.head.meta.push({hid: 'author', name: 'author', content: attr.author });
    state.head.meta.push({hid: 'description', name: 'description', content: attr.description});
  }
};
