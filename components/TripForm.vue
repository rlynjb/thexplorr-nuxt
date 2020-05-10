<template>
<v-card class="mb-8">
  <v-card-text>

    <v-row no-gutters>
      <v-col cols="8 pr-5">
        <v-text-field
          label="What's your next adventure?"
          placeholder="ex. Exploring Prehistoric at Utah"
          filled
          :value="data && data.name ? data.name : ''"
        />
      </v-col>

      <v-col cols="4">
        <v-text-field
          label="Where?"
          placeholder="ex. Las Vegas, Hollywood, St. George, etc"
          filled
          :value="data && data.location ? data.location : ''"
        />
      </v-col>
    </v-row>
  </v-card-text>


  <v-card-actions>
    <v-btn color="primary" nuxt @click="addTrip">
      +
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import TripDetail from '~/components/TripDetail.vue'

export default {
  props: ['data'],
  components: {
    TripDetail
  },
  methods: {
    addTrip() {
      this.$emit('triggerAddTrip')
    }
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
