<template>
<div>
<v-row v-if="dataCopy" no-gutters>
  <v-col cols="10">
    <v-text-field class="title"
      label="Name" solo
      v-model="dataCopy.name"
    />
  </v-col>

  <v-col cols="2" class="text-right">
    <price-picker
      @triggerSetPrice="(v) => dataCopy.price = v" />
  </v-col>

  <v-col cols="12">
    <v-icon class="float-left" color="grey" size="0.9em">
      mdi-map-marker
    </v-icon>

    <location-search :val="dataCopy.location"
      @triggerSetLocation="setLocation" />
  </v-col>

  <v-col cols="11" class="pl-3">
    <v-textarea :auto-grow="true" rows="2" solo
      label="Any other info?" v-model="dataCopy.notes">
    </v-textarea>
  </v-col>

  <v-col cols="1">
    <v-icon color="red" class="float-right"
      @click="deleteTripDetail()">
      mdi-delete
    </v-icon>
  </v-col>
</v-row>
</div>
</template>

<script>
import LocationSearch from '~/components/LocationSearch'
import PricePicker from '~/components/PricePicker'

export default {
  props: ['data'],
  components: {
    LocationSearch,
    PricePicker
  },

  data() {
    return {
      dataCopy: null,
    }
  },

  mounted() {
    this.dataCopy = JSON.parse(JSON.stringify(this.data));
  },

  watch: {
    "dataCopy.name"() {
      this.$emit('triggerUpdateTripDetail', this.dataCopy)
    },
    "dataCopy.price"() {
      this.$emit('triggerUpdateTripDetail', this.dataCopy)
    },
    "dataCopy.notes"() {
      this.$emit('triggerUpdateTripDetail', this.dataCopy)
    },
    "dataCopy.location"() {
      this.$emit('triggerUpdateTripDetail', this.dataCopy)
    },
  },

  methods: {
    setLocation(v) {
      this.dataCopy.location = v.label;
      if (!this.dataCopy.__embedded) this.dataCopy.__embedded = {};
      this.dataCopy.__embedded.location = v;
    },

    deleteTripDetail() {
      this.$emit('triggerDeleteTripDetail', this.dataCopy);
    }
  }
}
</script>

<style>

</style>
