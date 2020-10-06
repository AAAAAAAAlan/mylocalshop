<template lang="pug">
  form.login-form(@submit.prevent='signInUser' v-if='!$strapi.user')
    h1.cursor-pointer.select-none(@click='newAccount = !newAccount')
      transition(name='fade' mode='out-in')
        span(:key='newAccount') {{ newAccount ? 'У МЕНЯ УЖЕ ЕСТЬ АККАУНТ' : 'У МЕНЯ ЕЩЁ НЕТ АККАУНТА' }}
    input(required='' placeholder='EMAIL' v-model='username')
    input(required='' type='password' placeholder='PASSWORD' v-model='password')
    transition(name='slideX')
      input(v-if='newAccount' required='' type='password' placeholder='PASSWORD AGAIN' v-model='passwordConfirm')
    transition(name='slideY' mode='out-in')
      button(v-if='newAccount' type='submit' :disabled='disabledRegister' key='reg') ЗАРЕГИСТРИРОВАТЬСЯ
      button(v-else type='submit' key='log') ВОЙТИ
  //- Временное решение, затем реализовать личный кабинет.
  h1(v-else) {{ $strapi.user }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      newAccount: true,
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    disabledRegister() {
      if (this.password !== this.passwordConfirm) {
        return true
      }
      return false
    },
  },
  methods: {
    async signInUser() {
      if (this.newAccount === true) {
        try {
          await this.$strapi.register({
            email: this.username,
            username: this.username,
            password: this.password,
          })
        } catch (e) {
          alert(e)
        }
      } else
        try {
          await this.$strapi.login({
            identifier: this.username,
            password: this.password,
          })
        } catch (e) {
          alert(e)
        }
    },
  },
}
</script>

<style lang="stylus" scoped>
.login-form
  width 100%
  max-width 600px
  margin 0 auto
  margin-top 40px
  transition margin-left 4s 1s
  h1
    text-align center
    margin-bottom 7px
    span
      padding 5px
      border 1px solid white
  button
    color white
    width 100%
    height 46px
    background #1B1B1B
    text-align center
    margin-top 15px
    &:disabled
      border 1px #E91F4F solid
  input
    color white
    width 100%
    height 46px
    background #E91F4F
    text-align center
    margin-top 15px
    &::placeholder
      color white
      text-align center

/* slideX animation */
.slideX-enter-active
  transition all .3s ease

.slideX-leave-active
  transition all .3s ease

.slideX-enter, .slideX-leave-to
  transform translateX(10px)
  opacity 0

/* slideY animation */
.slideY-enter-active
  transition all .3s ease

.slideY-leave-active
  transition all .3s ease

.slideY-enter, .slideY-leave-to
  transform translateY(10px)
  opacity 0

/* fade animation */
.fade-enter-active, .fade-leave-active
  transition opacity .3s

.fade-enter, .fade-leave-to
  opacity 0
</style>
