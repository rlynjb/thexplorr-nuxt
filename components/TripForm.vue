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
        color="primary" @click="displayLocation = true">
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

    <v-col cols="11" v-if="displayLocation">
      <v-icon class="float-right"
        @click="displayLocation = false">
        mdi-close
      </v-icon>

      <location-search ref="locationSearch" :val="null" @triggerSetLocation="setLocation" />
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
import LocationSearch from '~/components/LocationSearch'

export default {
  components: {
    LocationSearch
  },

  data () {
    return {
      displayLocation: false,
      trip: {
        id: '',
        name: '',
        location: '',
        notes: '',
        date: [],
        day_trips: [],
        night_trips: [],
        __embedded: {}
      },
    }
  },

  methods: {
    setLocation(v) {
      this.trip.location = v.label
      this.trip.__embedded.location = v
    },

    async addTrip() {
      if (this.trip.name === '') return

      this.trip.id = uuidv4();

      // create trip
      let res = await this.$firebase.database
        .ref('trips/' + this.trip.id)
        .set(this.trip)
        .then((err) => {
          if (err) {
            console.log('Write ERROR: ', err)
          } else {
            console.log('Success!')
            this.trip.name = '';
            this.$refs.locationSearch.clearLocationField();
            this.displayLocation = false;
          }
        });
    },
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
