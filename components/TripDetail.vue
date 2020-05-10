<template>
<v-row no-gutters>
  <v-col cols="12">
    <v-text-field label="Name"
      solo
      :value="data && data.name ? data.name : ''"
    />

      <v-text-field label="Where?"
        solo
        :value="data && data.location ? data.location : ''"
      />
      <v-text-field label="Price"
        solo
        :value="data && data.price ? data.price : ''"
      />
      <v-textarea auto-grow solo
        label="Any other info?"
        :value="data && data.notes ? data.notes : ''"
      >
      </v-textarea>
  </v-col>

</v-row>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style>

</style>
