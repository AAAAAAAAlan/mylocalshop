<template lang="pug">
  .container
    InfoBar
    ProductsSection
</template>

<script>
import InfoBar from '~/components/InfoBar'
import ProductsSection from '~/components/ProductsSection/ProductsSection'

export default {
  components: {
    InfoBar,
    ProductsSection,
  },
}
</script>
