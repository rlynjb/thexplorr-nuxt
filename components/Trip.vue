<template>
<div class="trip-card mb-8">
  <v-row v-if="dataCopy" no-gutters
    :class="'pa-6 ' + (disabledUpdate ? '' : 'blue-grey darken-4')">
    <v-col cols="12">
      <v-text-field
        class="display-2"
        solo
        label="What's your next adventure?"
        v-model="dataCopy.name"
        :readonly="!authenticated"
      />

      <v-icon class="float-left" color="grey">
        mdi-map-marker
      </v-icon>

      <location-search :val="dataCopy.location"
        @triggerSetLocation="setLocation" />
    </v-col>

    <v-col cols="12">
      <date-range-picker :val="dataCopy.date"
        @triggerSetDate="setDate" />
    </v-col>

    <v-col cols="12">
      <v-textarea
        rows="1"
        :auto-grow="true"
        solo
        label="What are the main awesome things to experience?"
        v-model="dataCopy.notes"
        :readonly="!authenticated">
      </v-textarea>


      <h5 v-if="dataCopy.day_trips"
        class="text-uppercase mt-10 ml-3">
        Day time
      </h5>
      <v-list>
        <v-list-item class="mb-5 tripDetalItem"
          v-for="(item, i) in dataCopy.day_trips" :key="item.id">
          <TripDetail :data="item" :tripID="item.id"
            @triggerUpdateTripDetail="updateTripDetail"
            @triggerDeleteTripDetail="deleteTripDetail"
          />
        </v-list-item>

        <v-list-item v-if="authenticated">
          <TripDetailForm time="day"
            :tripID="dataCopy.id"
            @triggerAddTripDetail="addTripDetail"
          />
        </v-list-item>
      </v-list>


      <h5 v-if="dataCopy.night_trips"
        class="text-uppercase mt-10 ml-3">
        Night time
      </h5>
      <v-list>
        <v-list-item class="mb-5 tripDetalItem"
          v-for="(item, i) in dataCopy.night_trips" :key="item.id">
          <TripDetail :data="item" :tripID="item.id"
            @triggerUpdateTripDetail="updateTripDetail"
            @triggerDeleteTripDetail="deleteTripDetail"
          />
        </v-list-item>

        <v-list-item v-if="authenticated">
          <TripDetailForm time="night"
            :tripID="dataCopy.id"
            @triggerAddTripDetail="addTripDetail"
          />
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="6" class="mt-10"
      v-if="authenticated">
      <v-btn v-if="dataCopy.status"
        @click="toggleStatus">
        {{ dataCopy.status }}
      </v-btn>

      <v-btn v-else
        @click="setStatus">
        set status to Private or Public
      </v-btn>
    </v-col>

    <v-col cols="6" class="mt-10 text-right"
      v-if="authenticated">
      <v-btn :disabled="disabledUpdate"
        color="primary" nuxt @click="updateTrip()">
        Update
      </v-btn>

      <v-btn
        color="red" nuxt @click="deleteTrip()">
        Delete
      </v-btn>
    </v-col>

    <v-snackbar v-model="notificationMsg"
      timeout="5000"
      bottom="true"
      centered="true"
      color="primary"
    >
      <h4>Deleted a Trip</h4>
    </v-snackbar>

  </v-row>

</div>
</template>

<script>
import TripDetail from '~/components/TripDetail.vue'
import TripDetailForm from '~/components/TripDetailForm.vue'
import LocationSearch from '~/components/LocationSearch'
import DateRangePicker from '~/components/DateRangePicker'

export default {
  props: ['data'],
  components: {
    TripDetail,
    TripDetailForm,
    LocationSearch,
    DateRangePicker,
  },

  data () {
    return {
      dataCopy: null,
      disabledUpdate: true,
      notificationMsg: false,
    }
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
  },

  mounted() {
    this.dataCopy = JSON.parse(JSON.stringify(this.data))

    // set property if its required and needs to have a default value
    /*if (!this.dataCopy.status) {
      this.dataCopy.status = 'private';
    }*/
  },

  watch: {
    dataCopy: {
      handler (val, old) {
        // compare data here
        // and set Update btn to either active or inactive
        if (JSON.stringify(val) != JSON.stringify(this.data)) {
          // update internally in state
          this.disabledUpdate = false
          return
        }

        this.disabledUpdate = true
      },
      deep: true
    },
  },

  methods: {
    setStatus() {
      this.dataCopy.status = 'private';
      console.log('KIRBY', this.dataCopy)
    },
    toggleStatus() {
      this.dataCopy.status = this.dataCopy.status === 'private' ? 'public' : 'private';
    },

    compareData() {
      if (JSON.stringify(this.dataCopy) != JSON.stringify(this.data)) {
        // update internally in state
        this.disabledUpdate = false
        return
      }

      this.disabledUpdate = true
    },

    setLocation(v) {
      this.dataCopy.location = v.label
      this.dataCopy.__embedded.location = v
    },

    setDate(v) {
      this.dataCopy.date = v
      this.compareData()
    },

    addTripDetail(v) {
      switch (v.time) {
        case 'day':
          if (this.dataCopy.day_trips) {
            this.dataCopy.day_trips.push(v);
          } else {
            this.dataCopy.day_trips = [];
            this.dataCopy.day_trips.push(v);
          }
          break;

        case 'night':
          if (this.dataCopy.night_trips) {
            this.dataCopy.night_trips.push(v);
          } else {
            this.dataCopy.night_trips = [];
            this.dataCopy.night_trips.push(v);
          }
          break;

        default:
          //
      }

      this.compareData();
    },

    updateTripDetail(v) {
      let i = null
      switch (v.time) {
        case 'day':
          i = this.dataCopy.day_trips.findIndex(val => val.id === v.id)
          this.dataCopy.day_trips.splice(i, 1, v)
          break;
        case 'night':
          i = this.dataCopy.night_trips.findIndex(val => val.id === v.id)
          this.dataCopy.night_trips.splice(i, 1, v)
          break;
        default:
          //
      }

      i = null

      this.compareData();
    },

    deleteTripDetail(v) {
      let i = null
      switch (v.time) {
        case 'day':
          i = this.dataCopy.day_trips.findIndex(val => val.id === v.id)
          this.dataCopy.day_trips.splice(i, 1)
          break;
        case 'night':
          i = this.dataCopy.night_trips.findIndex(val => val.id === v.id)
          this.dataCopy.night_trips.splice(i, 1)
          break;
        default:
          //
      }

      i = null

      this.compareData();
    },

    updateTrip() {
      // update firebase
      this.$firebase.database
        .ref('trips/').child(this.dataCopy.id)
        .update(this.dataCopy)
        .then(res => {
          console.log('SUCCESS on update');
          this.disabledUpdate = true;
        })
        .catch(err => {
          console.log('ERROR on updating')
        })
    },

    async deleteTrip() {
      await this.$firebase.database
        .ref('trips/').child(this.dataCopy.id)
        .set(null)
        .then((err) => {
          if (err) {
            console.log('theres an error in deleting')
          } else {
            console.log('Delete Success :)');

            this.notificationMsg = true;
          }
        });
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
