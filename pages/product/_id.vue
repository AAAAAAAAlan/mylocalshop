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
      return this.$route.path.split('/')[2] - 1
    },
  },
}
</script>
