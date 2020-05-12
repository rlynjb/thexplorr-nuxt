<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <v-row>
        <TripForm class="col-12"
          @triggerAddTrip="addTrip"
        />

        <v-col cols="12" v-if="trips">
          <Trip class="mb-10"
            v-for="(item, i) in trips" :key="item.id"
            :data="item"
            @triggerDeleteTrip="deleteTrip"
          />
        </v-col>
      </v-row>

    </v-flex>
  </v-layout>
</template>

<script>
import Trip from '~/components/Trip.vue'
import TripForm from '~/components/TripForm.vue'

export default {
  components: {
    Trip,
    TripForm
  },

  computed: {
    trips: {
      get() {
        return this.$store.state.trips
      },
      set(v) {
        this.$store.commit('addTrip', v)
      }
    }
  },

  methods: {
    addTrip(v) {
      this.trips = v
    },

    deleteTrip(v) {
      // splice from trips
    },
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
