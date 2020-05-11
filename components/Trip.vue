<template>
<div class="trip-card mb-8">
  <v-row v-if="dataCopy" no-gutters>
    <v-col cols="12">
      <v-text-field
        class="display-2"
        solo
        label="What's your next adventure?"
        v-model="dataCopy.name"
      />
      <v-text-field
        class="subtitle-1"
        solo
        label="Where?"
        v-model="dataCopy.location"
      />
    </v-col>

    <v-col cols="auto" class="pr-3">
      <v-text-field
        class="subtitle-1"
        label="When?"
        solo
        v-model="dataCopy.date_start"
      />
    </v-col>

    <v-col cols="auto" class="pl-3">
      <v-text-field
        class="subtitle-1"
        label="Until"
        solo
        v-model="dataCopy.date_end"
      />
    </v-col>

    <v-col cols="12">
      <v-textarea
        rows="1"
        :auto-grow="true"
        solo
        label="What are the main awesome things to experience?"
        v-model="dataCopy.notes"
      >
      </v-textarea>


      <h5 class="text-uppercase mt-10 ml-3">Day time</h5>
      <v-list>
        <v-list-item class="mb-5 tripDetalItem"
          v-for="(item, i) in dataCopy.day_trips" :key="item.id">
          <TripDetail :data="item" :tripID="item.id"
            @triggerDeleteTripDetail="deleteTripDetail"
          />
        </v-list-item>

        <v-list-item>
          <TripDetailForm time="day" :tripID="dataCopy.id"
            @triggerAddTripDetail="addTripDetail"
          />
        </v-list-item>
      </v-list>


      <h5 class="text-uppercase mt-10 ml-3">Night time</h5>
      <v-list>
        <v-list-item class="mb-5 tripDetalItem"
          v-for="(item, i) in dataCopy.night_trips" :key="item.id">
          <TripDetail :data="item" :tripID="item.id"
            @triggerDeleteTripDetail="deleteTripDetail"
          />
        </v-list-item>

        <v-list-item>
          <TripDetailForm time="night" :tripID="dataCopy.id"
            @triggerAddTripDetail="addTripDetail"
          />
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="12">
      <v-btn :disabled="disabledUpdate"
        color="primary" nuxt @click="updateTrip()">
        Update
      </v-btn>

      <v-btn 
        color="red" nuxt @click="deleteTrip()">
        Delete
      </v-btn>
    </v-col>
  </v-row>

</div>
</template>

<script>
import TripDetail from '~/components/TripDetail.vue'
import TripDetailForm from '~/components/TripDetailForm.vue'

export default {
  props: ['data'],
  components: {
    TripDetail,
    TripDetailForm
  },

  data () {
    return {
      dataCopy: null,
      disabledUpdate: true,
    }
  },

  mounted() {
    // NOTE:
    // created a copy to be used within component
    // coz we dont wanna alter data from store
    // and this is also to determine if when
    // to activate Update btn

    this.dataCopy = JSON.parse(JSON.stringify(this.data))
  },

  watch: {
    dataCopy: {
      handler (val, old) {
        // compare data here
        // and set Update btn to either active or inactive
        if (JSON.stringify(val) != JSON.stringify(this.data)) {
          console.log('THERES CHANGES')
          // update internally in state
          this.disabledUpdate = false
          return
        }

        console.log('NO CHANGES')
        this.disabledUpdate = true
      },
      deep: true
    }
  },

  methods: {
    addTripDetail(v) {
      if (v.time === 'day') {
        this.dataCopy.day_trips.push(v)
      }
      if (v.time === 'night') {
        this.dataCopy.night_trips.push(v)
      }
    },

    deleteTripDetail(v) {
      if (v.time === 'day') {
        let i = this.dataCopy.day_trips.findIndex(val => val.id === v.id)
        this.dataCopy.day_trips.splice(i, 1)
      }
      if (v.time === 'night') {
        let i = this.dataCopy.night_trips.findIndex(val => val.id === v.id)
        this.dataCopy.night_trips.splice(i, 1)
      }
    },

    updateTrip() {
      this.$store.commit('updateTrip', data.id)
    },

    deleteTrip() {
      //
    },
  }
}
</script>

<style lang="scss">
.trip-card .v-list {
  background: transparent;

  .tripDetalItem {
    border-left: 1px solid gray;
  }
}
.trip-card .v-text-field__details {
  display: none;
}
.trip-card .v-input__control {
  min-height: fit-content !important;
}
.trip-card .v-input__control .v-input__slot {
  background: transparent !important;
  min-height: unset;
  margin-bottom: 0;
  box-shadow: none !important;
}

.trip-card .v-input input {
  max-height: fit-content;
  padding: 0;
}

</style>
