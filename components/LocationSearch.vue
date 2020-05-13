<template>
<div class="full-width">
  <v-text-field
    placeholder="Where?"
    solo
    v-model="location"
    @input="getLocationResults"
  />

  <v-list>
    <v-list-item v-for="(item, i) in locationResults" :key="item.raw.place_id">
      <v-btn @click="setLocation(item)">{{ item.label }}</v-btn>
    </v-list-item>
  </v-list>
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
      const provider = new this.$leaflet.OpenStreetMapProvider()

      const results = await provider.search({
        query: val
      })

      this.locationResults = results
    },

    setLocation(v) {
      this.$emit('triggerSetLocation', v)
      this.locationResults = null
    },
  }
}
</script>

<style lang="scss">

</style>
