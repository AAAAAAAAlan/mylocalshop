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
        'http://localhost:1337/products'
      )
      commit('SET_PRODUCTS', productCategories.data)
    } catch (error) {
      console.log(error)
    }
  },
}
