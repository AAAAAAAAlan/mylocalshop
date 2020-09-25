<template lang="pug">
  .navbar.flex.justify-between.items-center
    h1.font-bold.text-lg My Local Shop.
    .links-container.flex
      nuxt-link.link.font-bold.cursor-pointer(v-for='(link, index) in links' :key='index' :to='link.url') {{ link.name }}
      //- nuxt-link.link.font-bold.cursor-pointer(v-if='claims.admin' to='/admin') Админпанель
      a.link.font-bold.cursor-pointer(v-if='authUser' @click='signOut') Выйти
      nuxt-link.link.font-bold.cursor-pointer(v-else to='/login') Войти
</template>

<script>
import { mapState } from 'vuex'

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

  computed: {
    ...mapState({
      authUser: (state) => state.claims,
      claims: (state) => state.claims,
    }),
  },

  methods: {
    async signOut() {
      try {
        await this.$fireAuth.signOut()
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.navbar
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
      text-align center
      flex-direction column
      margin-top 20px
      .link
        margin-top 7px
</style>
