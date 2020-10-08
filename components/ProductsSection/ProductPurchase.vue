<template lang="pug">
  .product-purchase.flex.justify-center.items-center.cursor-pointer
    p 
      | Купить за 
      span 2881 рублей
</template>

<style lang="stylus" scoped>
.product-purchase
  margin-top 100px
  height 80px
  border 1px solid #e91f4f
  padding 0 32px
  text-transform uppercase
  p
    font-size 25px
    span
      color #e91f4f
  &:hover
    border 1px solid white
</style>
