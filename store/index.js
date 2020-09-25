export const state = () => ({
  authUser: null,
  claims: null,
})

export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', { authUser })

    authUser.getIdTokenResult().then((idTokenResult) => {
      commit('SET_AUTH_USER_CLAIMS', idTokenResult.claims)
    })
  },
}

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
}

export const mutations = {
  RESET_STORE: (state) => {
    state.authUser = null
    state.claims = null
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
    }
  },

  SET_AUTH_USER_CLAIMS(state, claims) {
    state.claims = claims
  },
}
