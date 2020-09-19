<template lang="pug">
  .navbar.flex.justify-between.items-center
    h1.font-bold.text-lg.ml-4 My Local Shop.
    ul.flex
      nuxt-link.link.mr-4.font-bold.cursor-pointer(v-for="(link, index) in links" :key="index" :to="link.url") {{ link.name }}
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        { name: 'Главная', url: '/' },
        { name: 'Доставка', url: '/shipping' },
        { name: 'Контакты', url: '/information' },
        { name: 'Стать клиентом', url: '/partnership' },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
@media (max-width: 600px)
  .navbar
    margin-top 20px
    display block
    text-align center
    h1
      margin 0
    ul
      flex-direction column
      margin-top 20px
      text-align center
      .link
        margin-top 7px
</style>
