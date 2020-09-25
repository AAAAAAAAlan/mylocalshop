<template lang="pug">
  .info-bar
    h1 
      | Тестовый бренд одежды. 
      br
      | Сейчас его не существует, 
      br 
      | но возможно на его месте будет настоящий.
    button
      nuxt-link(to='/information') Узнать о нас больше.
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.info-bar
  margin-top 105px
  h1
    font-style normal
    font-weight 800
    font-size 26px
  button
    margin-top 24px
    padding 9px
    font-size 16px
    border 1px solid #E91F4F
    box-sizing border-box
</style>
