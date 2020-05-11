<template>
<v-card class="mb-8">
  <v-card-text>
    <v-row no-gutters>
      <v-col cols="8 pr-5">
        <v-text-field
          label="What's your next adventure?"
          placeholder="ex. Exploring Prehistoric at Utah"
          filled
          v-model="trip.name"
        />
      </v-col>

      <v-col cols="4">
        <v-text-field
          label="Where?"
          placeholder="ex. Las Vegas, Hollywood, St. George, etc"
          filled
          v-model="trip.location"
        />
      </v-col>
    </v-row>
  </v-card-text>


  <v-card-actions>
    <v-btn color="primary" nuxt @click="addTrip">
      +
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      trip: {
        id: uuidv4(),
        name: '',
        location: '',
        notes: '',
        date_start: '',
        date_end: '',
        day_trips: [],
        night_trips: []
      }
    }
  },

  methods: {
    addTrip() {
      if (this.trip.name === '') return

      this.$emit('triggerAddTrip', this.trip)

      // NOTE: before removing content
      // check if value has been saved
      //this.trip.name = ''
      //this.trip.location = ''
    }
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
