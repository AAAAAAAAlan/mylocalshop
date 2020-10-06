<template lang="pug">
  .navbar.flex.justify-between.items-center
    h1.font-bold.text-lg My Local Shop.
    .links-container.flex
      nuxt-link.link.font-bold.cursor-pointer(v-for='(link, index) in links' :key='index' :to='link.url') {{ link.name }}
      //- nuxt-link.link.font-bold.cursor-pointer(v-if='claims.admin' to='/admin') Админпанель
      a.link.font-bold.cursor-pointer(v-if='$strapi.user' @click='signOut') Выйти
      nuxt-link.link.font-bold.cursor-pointer(v-else to='/login') Войти
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

  methods: {
    async signOut() {
      try {
        await this.$strapi.logout()
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.navbar
  transition .5s ease-in-out
  h1
  .links-container
    .link
      &:not(:last-of-type)
        padding 0 10px
      &:last-of-type
        padding-left 10px

@media (max-width: 600px)
  .navbar
    margin-top 20px
    display block
    text-align center
    h1
      margin 0
    .links-container
      padding 5px
      margin-top 20px
      background #101010
      justify-content center
      flex-direction column
      border 1px solid white
      .link
        margin 3px 0
</style>
