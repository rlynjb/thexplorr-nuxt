<template>
<div class="trip-card mb-8">
  <v-row no-gutters>
    <v-col cols="12">
      <v-text-field
        class="display-2"
        solo
        label="What's your next adventure?"
        :value="data && data.name ? data.name : ''"
      />
      <v-text-field
        class="subtitle-1"
        solo
        label="Where?"
        :value="data && data.location ? data.location : ''"
      />
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="auto" class="pr-3">
      <v-text-field
        class="subtitle-1"
        label="When?"
        solo
        :value="data && data.date_start ? data.date_start : ''"
      />
    </v-col>

    <v-col cols="auto" class="pl-3">
      <v-text-field
        class="subtitle-1"
        label="Until"
        solo
        :value="data && data.date_end ? data.date_end : ''"
      />
    </v-col>
  </v-row>

  <v-textarea
    rows="1"
    :auto-grow="true"
    solo
    label="What are the main awesome things to experience?"
    :value="data && data.notes ? data.notes : ''"
  >
  </v-textarea>

  <h5 class="text-uppercase mt-10 ml-3">Day time</h5>
  <v-list v-if="data && data.day_trips">
    <v-list-item
      class="mb-5 tripDetalItem"
      v-for="(item, i) in data.day_trips" :key="item.id">
      <TripDetail :data="item" />
    </v-list-item>

    <v-list-item><TripDetailForm /></v-list-item>
  </v-list>


  <h5 class="text-uppercase mt-10 ml-3">Night time</h5>
  <v-list v-if="data && data.night_trips">
    <v-list-item class="mb-5 tripDetalItem"
      v-for="(item, i) in data.night_trips" :key="item.id">
      <TripDetail :data="item" />
    </v-list-item>

    <v-list-item><TripDetailForm /></v-list-item>
  </v-list>


  <v-btn v-if="data" color="primary" nuxt to="/inspire">
    Update
  </v-btn>
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
