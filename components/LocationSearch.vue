<template>
<div class="full-width">
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        placeholder="Where?"
        solo
        v-model="location"
        @input="getLocationResults"
        v-on="on"
      />
    </template>

    <v-list class="pa-0">
      <v-list-item
        v-for="(item, i) in locationResults" :key="item.raw.place_id">
        <v-btn depressed @click="setLocation(item)">
          {{ item.label }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      location: '',
      locationResults: null,
    }
  },

  methods: {
    async getLocationResults(val) {
      this.locationResults = null

      const provider = new this.$leaflet.OpenStreetMapProvider()
      const results = await provider.search({
        query: val
      })

      this.locationResults = results
    },

    setLocation(v) {
      this.location = v.label
      this.$emit('triggerSetLocation', v)
    },
  }
}
</script>

<style lang="scss">

</style>
