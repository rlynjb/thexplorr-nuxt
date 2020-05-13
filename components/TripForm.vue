<template>
<div class="mb-8 pa-5 grey darken-4">
  <v-row no-gutters>
    <v-col cols="11">
      <v-text-field
        label="What's your next adventure?"
        solo :hide-details="true"
        v-model="trip.name"
      />
    </v-col>

    <v-col cols="1" class="text-center">
      <v-icon v-if="!displayLocation"
        large
        color="primary" @click="attachLocation">
        mdi-map-marker-plus
      </v-icon>
      <v-icon v-else
        large
        color="primary">
        mdi-map-marker
      </v-icon>

      <!--
      <v-icon>mdi-crosshairs-gps</v-icon>
      <v-icon>mdi-crosshairs</v-icon>
      -->
    </v-col>

    <v-col cols="12" v-if="displayLocation">
      <v-icon class="float-right"
        @click="displayLocation = false">
        mdi-close
      </v-icon>

      <v-text-field
        label="Where?"
        placeholder="ex. Las Vegas, Hollywood, St. George, etc"
        filled
        v-model="trip.location"
      />

      <v-geosearch :options="geosearchOptions"></v-geosearch>
    </v-col>

    <v-col cols="12" class="mt-5 text-right">
      <v-btn color="primary"
        nuxt @click="addTrip">
        Create
      </v-btn>
    </v-col>
  </v-row>

</div>
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
      },
    }
  },

  async mounted() {
    const provider = new this.$leaflet.OpenStreetMapProvider()
    const results = await provider.search({ query: 'Las Vegas' })

    console.log(results)
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
