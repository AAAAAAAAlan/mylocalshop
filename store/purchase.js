export const state = () => ({
  selectedProduct: 'test',
})

export const mutations = {
  SET_PRODUCTS(state, product) {
    state.selectedProduct = product
  },
}
