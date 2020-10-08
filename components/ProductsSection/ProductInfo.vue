<template lang="pug">
  .product-info.flex.justify-between.items-center
    .icon
      img(src="https://img.icons8.com/windows/32/000000/washing-machine.png")
    p {{ info[0].washing }}
    p {{ info[0].drying }}
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-info
  margin-top 30px
  border 1px solid #e91f4f
  .icon
    background #e91f4f
  p
    padding 0 5px
</style>
