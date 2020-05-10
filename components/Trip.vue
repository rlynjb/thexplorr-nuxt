<template>
<div class="mb-8">
  <v-row no-gutters>
    <v-col cols="12">
      <v-text-field
        class="card-title"
        solo
        label="What's your next adventure?"
        :value="data && data.name ? data.name : ''"
      />
      <v-text-field
        solo
        label="Where?"
        :value="data && data.location ? data.location : ''"
      />

      <v-row no-gutters>
        <v-col cols="6" class="pr-3">
          <v-text-field
            label="When?"
            solo
            :value="data && data.date_start ? data.date_start : ''"
          />
        </v-col>

        <v-col cols="6" class="pl-3">
          <v-text-field
            label="Until"
            solo
            :value="data && data.date_end ? data.date_end : ''"
          />
        </v-col>
      </v-row>

      <v-textarea
        auto-grow
        solo
        label="What are the main awesome things to experience?"
        :value="data && data.notes ? data.notes : ''"
      >
      </v-textarea>
    </v-col>
  </v-row>


  <h5>Day time</h5>
  <v-list v-if="data && data.day_trips">
    <v-list-item v-for="(item, i) in data.day_trips" :key="item.id">
      <TripDetail :data="item" />
    </v-list-item>

    <v-list-item><TripDetailForm /></v-list-item>
  </v-list>


  <h5>Night time</h5>
  <v-list v-if="data && data.night_trips">
    <v-list-item v-for="(item, i) in data.night_trips" :key="item.id">
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

<style>
.v-text-field__details {
  display: none;
}

.card-title {
  font-size: 1.5em;
}
</style>
