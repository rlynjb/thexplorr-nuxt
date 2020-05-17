<template>
<v-row no-gutters class="grey darken-4">
  <v-col cols="11">
    <v-text-field class="title pa-3" label="Add something fun to do"
      solo
      v-model="tripDetail.name"
    />
  </v-col>

  <v-col cols="1" class="text-center">
    <v-icon color="primary" large
      class="pt-2"
      @click="addTripDetail">
      mdi-plus-thick
    </v-icon>
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
        id: '',
        tripID: '',
        time: '',
        name: '',
        location: '',
        notes: '',
        price: 0,
        __embedded: {},
      }
    }
  },
  methods: {
    addTripDetail() {
      if (this.tripDetail.name === '') return

      this.tripDetail.id = uuidv4()
      this.tripDetail.time = this.time
      this.tripDetail.tripID = this.tripID
      this.$emit('triggerAddTripDetail', this.tripDetail)
    },

    clearTripDetailName() {
      this.tripDetail.name = '';
    },
  }
}
</script>

<style>

</style>
