<template>
<v-row no-gutters>
  <v-col cols="10">
    <v-text-field class="title"
      label="Name" solo
      v-model="data.name"
    />
  </v-col>

  <v-col cols="2" class="text-right">
    <v-icon color="primary" size="1.2em">
      mdi-currency-usd
    </v-icon>
  </v-col>

  <v-col cols="12">
    <v-icon class="float-left" color="grey" size="0.9em">
      mdi-map-marker
    </v-icon>

    <location-search @triggerSetLocation="setLocation" />
  </v-col>

  <v-col cols="11" class="pl-3">
    <v-textarea :auto-grow="true" rows="2" solo
      label="Any other info?" v-model="data.notes">
    </v-textarea>
  </v-col>

  <v-col cols="1">
    <v-icon color="red" class="float-right"
      @click="deleteTripDetail()">
      mdi-delete
    </v-icon>
  </v-col>
</v-row>
</template>

<script>
import LocationSearch from '~/components/LocationSearch'

export default {
  props: ['data'],

  components: {
    LocationSearch
  },

  methods: {
    setLocation(v) {
      this.data.location = v.label
      this.data.__embedded.location = v
    },

    deleteTripDetail() {
      this.$emit('triggerDeleteTripDetail', this.data)
    }
  }
}
</script>

<style>

</style>
