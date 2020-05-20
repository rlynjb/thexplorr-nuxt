<template>
<div>
  <div class="full-width" @click="increaseVal">
    <p class="no-padding no-margin">
      {{ getPriceRange(val) }}
    </p>
    <v-icon v-if="val === 0"
      color="grey" size="1.2em">
      mdi-currency-usd
    </v-icon>

    <v-icon v-else v-for="n in val"
      color="primary" size="1.2em">
      mdi-currency-usd
    </v-icon>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      val: 2,
    }
  },

  watch: {
    val() {
      this.$emit('triggerSetPrice', this.val)
    },
  },

  methods: {
    increaseVal() {
      if (this.val <= 4) {
        this.val++
        return
      }

      this.val = 0
    },

    getPriceRange(v) {
      let priceText = ''

      switch(v) {
        case 0:
          priceText = 'Free'
          break;
        case 1:
          priceText = '$1 - $20'
          break;
        case 2:
          priceText = '$20 - $40'
          break;
        case 3:
          priceText = '$40 - $60'
          break;
        case 4:
          priceText = '$60 - 80'
          break;
        default:
          priceText = '$80++'
      }

      return priceText
    }
  }
}
</script>

<style lang="scss">

</style>
