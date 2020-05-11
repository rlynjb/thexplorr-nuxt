<template>
<v-card class="mb-8">
  <v-card-text>
    <v-row no-gutters>
      <v-col cols="11">
        <v-text-field
          label="What's your next adventure?"
          placeholder="ex. Exploring Prehistoric at Utah"
          filled
          v-model="trip.name"
        />
      </v-col>

      <v-col cols="1">
        <v-icon v-if="!displayLocation" color="primary" @click="attachLocation">
          mdi-map-marker-plus
        </v-icon>
        <v-icon v-else>mdi-map-marker</v-icon>

        <!--
        <v-icon>mdi-crosshairs-gps</v-icon>
        <v-icon>mdi-crosshairs</v-icon>
        -->
      </v-col>

      <v-col cols="12" v-if="displayLocation">
        <v-icon class="float-right"
          @click="displayLocation = false">mdi-close</v-icon>
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
      Create
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      displayLocation: false,
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
    },

    attachLocation() {
      this.displayLocation = true
    },
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
