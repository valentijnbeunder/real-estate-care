
export default {
    namespaced: true, // Zorg dat de module een namespace heeft
    state: () => ({
      theme: 'light', // Default theme
    }),
    mutations: {
      setTheme(state, theme) {
        state.theme = theme;
      },
    },
    actions: {
      toggleTheme({ commit, state }) {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        commit('setTheme', newTheme);
      },
    },
    getters: {
      currentTheme: (state) => state.theme,
    },
  };
  