<template lang="pug">
  ProductCardPage(:product='products[productId]')
</template>

<script>
import { mapState } from 'vuex'
import ProductCardPage from '~/components/ProductsSection/ProductCardPage'

export default {
  components: {
    ProductCardPage,
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    productId() {
      const id = this.$route.path.split('/')[2]
      return this.products.findIndex((obj) => obj.id === id)
    },
  },
}
</script>
