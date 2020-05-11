<template>
<v-row no-gutters>
  <v-col cols="10">
    <v-text-field label="Name"
      placeholder="ex. Original Starbucks coffee shop"
      filled
      v-model="tripDetail.name"
    />
  </v-col>

  <v-col cols="2">
    <v-btn color="primary" nuxt @click="addTripDetail">+</v-btn>
  </v-col>
</v-row>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: ['time', 'tripID'],
  data () {
    return {
      tripDetail: {
        id: uuidv4(),
        tripID: '',
        time: '',
        name: '',
        location: '',
        notes: '',
        price: 0
      }
    }
  },
  methods: {
    addTripDetail() {
      if (this.tripDetail.name === '') return

      this.tripDetail.time = this.time
      this.tripDetail.tripID = this.tripID
      this.$emit('triggerAddTripDetail', this.tripDetail)

      // NOTE: before removing content
      // check if value has been saved
      //this.tripDetail.name = ''
    }
  }
}
</script>

<style>

</style>
