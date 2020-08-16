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


  <v-snackbar v-model="overlayAlert"
    timeout="5000"
    bottom="true"
    centered="true"
    color="primary"
  >
    <h5>Successfully created a Trip</h5>
  </v-snackbar>


  <v-overlay :value="overlay"
    opacity="0.9"
    color="black"
  >
    <div class="text-center">
      <h3>
        Sorry, This feature is not available yet for public.
      </h3>
      <h2>Stay tune tho. :)</h2>
    </div>

    <div class="text-right">
      <a @click="overlay = false">Cool?</a>
    </div>
  </v-overlay>
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
      overlay: false,
      overlayAlert: false,
      displayLocation: false,
      trip: {
        id: '',
        name: '',
        location: '',
        notes: '',
        date: [],
        day_trips: [],
        night_trips: [],
        status: 'private',
        __embedded: {}
      },
    }
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
  },

  methods: {
    setLocation(v) {
      this.trip.location = v.label
      this.trip.__embedded.location = v
    },

    async addTrip() {
      if (!this.authenticated) {
        // tell non member users about its not available
        this.overlay = true;
      }


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
            this.displayLocation = false;
            this.overlayAlert = true;

            this.$refs.locationSearch.clearLocationField();
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
