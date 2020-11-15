export const state = () => ({
  products: null,
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    try {
      const productCategories = await app.$axios.get(
        'http://mylocalshop-backend.herokuapp.com/products'
      )
      commit('SET_PRODUCTS', productCategories.data)
    } catch (error) {
      console.log(error)
    }
  },
}
