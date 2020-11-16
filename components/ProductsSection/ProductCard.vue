<template lang="pug">
  .product-card.flex(@click='$router.push(`/product/${product.id}`)')
    img.cursor-pointer(:src="'https://www.km20.ru/upload/resize_cache/iblock/089/1800_1800_1/089b2817feabafe8a65690bcd0cf398b.jpg'")
    .product-description.cursor-pointer
      p.type {{ productCategory }}
      p.title {{ product.name }}
      p.price {{ `${product.price} ₽` }}
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productCategory() {
      const category = []

      for (let i = 0; i < this.product.categories.length; i++) {
        category.push(this.product.categories[i].name)
      }
      return category.join(', ')
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-card
  img
    height 300px
  .product-description
    text-transform uppercase
    padding 30px
    max-width 300px
    width 100%
    .type
       font-size 14px
    .title
      font-size 30px
      font-weight 600
      max-width 300px
      margin 10px 0
      margin-right auto
  &:hover
    text-decoration underline

@media (max-width: 600px)
  .product-card
    img
      height 150px
    .product-description
      text-transform uppercase
      padding 10px
      .type
        font-size 10px
      .title
        font-size: 17px;
        font-weight: 600;
        max-width: 130px;
        margin: 10px 0;
        margin-right: auto;
    &:hover
      text-decoration underline

@media (max-width: 1145px)
  .product-card
    // margin-bottom -150px
</style>
