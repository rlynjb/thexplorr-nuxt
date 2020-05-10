<template>
<v-row no-gutters>
  <v-col cols="10">
    <v-text-field label="Name"
      placeholder="ex. Original Starbucks coffee shop"
      filled
      :value="data && data.name ? data.name : ''"
    />
  </v-col>

  <v-col cols="2">
    <v-btn color="primary" nuxt @click="addTripDetail">+</v-btn>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    addTripDetail() {
      this.$emit('triggerAddTripDetail')
    }
  }
}
</script>

<style>

</style>
