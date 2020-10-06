<template lang="pug">
  .products-section
    .container
      .products-header
        hr 
        h1 Товары
        p Они ненастоящие, это тестовый сайт
      .products
        ProductCard(v-for='product in products' :key='product.id' :product='product')
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '~/components/ProductsSection/ProductCard'

export default {
  name: 'ProductsSection',
  components: {
    ProductCard,
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
}
</script>

<style lang="stylus" scoped>
.products-section
  width 100%
  margin-top 100px
  background #101010
  position absolute
  left 0
  padding-bottom 100px
  .products-header
    margin 100px 0
    hr
      width 40px
      background #E91F4F
      margin 0
      margin-bottom 2px
      border-top: 1px solid #E91F4F
    h1
      font-size 36px
      font-weight 800
    p
      margin-top 10px
      font-weight 800
      font-size 12px
      color #E91F4F
      text-transform uppercase
  .products
    display grid
    grid-template-columns repeat(2, auto)
    gap 190px
    row-gap 100px

@media (max-width: 1145px)
  .products-section
    margin-top 40px
    .products-header
      margin 40px 0
    .products
      margin-top 20px
      display flex !important
      flex-direction column
      align-items center
      row-gap 50px
</style>
