<template>
<div>
  <div class="full-width" @click="increaseVal">
    <p class="no-padding no-margin">
      {{ getPriceRange(priceVal) }}
    </p>
    <v-icon v-if="priceVal === 0"
      color="grey" size="1.2em">
      mdi-currency-usd
    </v-icon>

    <v-icon v-else v-for="n in priceVal"
      color="primary" size="1.2em">
      mdi-currency-usd
    </v-icon>
  </div>
</div>
</template>

<script>
export default {
  props: ['val'],
  data() {
    return {
      priceVal: 2,
    }
  },

  mounted() {
    if (this.val === null) return;

    this.priceVal = this.val;
  },

  watch: {
    priceVal() {
      this.$emit('triggerSetPrice', this.priceVal)
    },
  },

  methods: {
    increaseVal() {
      if (this.priceVal <= 4) {
        this.priceVal++;
        return;
      }

      this.priceVal = 0;
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
