/* eslint-disable */
const state = () => ({
    headerTitle: '',
  });
  const mutations = {
    setHeaderTitle(state, headerTitle) {
        state.headerTitle = headerTitle;
    },
  };
  const actions = {
    updateheaderTitle({ state, commit }, headerTitle) {
      commit('setHeaderTitle', headerTitle);
    },
  };
  const getters = {
    getHeaderTitle: (state, getters) => {
      return state.headerTitle;
    },
  };
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };