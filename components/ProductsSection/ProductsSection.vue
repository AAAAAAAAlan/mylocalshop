<template lang="pug">
  .products-section
    .container
      .products-header
        hr 
        h1 Товары
        p Они ненастоящие, это тестовый сайт
</template>

<script>
export default {
  name: 'ProductsSection',
}
</script>

<style lang="stylus" scoped>
.products-section
  width 100%
  height 400px
  margin-top 100px
  background #101010
  position absolute
  left 0
  .products-header
    margin-top 100px
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
</style>
