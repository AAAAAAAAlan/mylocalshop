<template lang="pug">
  ProductCard(:product='products[productId]')
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '~/components/ProductsSection/ProductCard'

export default {
  components: {
    ProductCard,
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
