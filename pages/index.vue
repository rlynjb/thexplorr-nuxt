<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <v-row>
        <TripForm class="col-12" />

        <v-col cols="12" v-if="trips && authenticated">
          <Trip class="mb-10"
            v-for="(item, i) in trips" :key="item.id"
            :data="item"
            @triggerDeleteTrip="deleteTrip"
          />
        </v-col>

        <v-col cols="12" v-if="trips && !authenticated">
          <Trip class="mb-10"
            v-for="(item, i) in trips" :key="item.id"
            v-if="item.status === 'public'"
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

  mounted() {
    // get content
    this.$firebase.database
      .ref('trips/')
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          // convert object to an array
          let data = snapshot.val()
          let newArr = Object.keys(data).map(key => {
            return data[key];
          })

          this.trips = newArr
        }
      })
  },

  computed: {
    trips: {
      get() {
        return this.$store.state.trips
      },
      set(v) {
        this.$store.commit('addTrips', v)
      }
    },

    authenticated() {
      return this.$store.state.authenticated;
    },
  },
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
