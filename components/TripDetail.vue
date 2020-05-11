<template>
<v-row no-gutters>
  <v-col cols="10">
    <v-text-field class="title"
      label="Name"
      solo
      v-model="data.name"
    />
  </v-col>

  <v-col cols="2">
    <v-text-field label="Price"
      solo
      v-model="data.price"
    />
  </v-col>

  <v-col cols="12">
    <v-text-field
      class="caption text-capitalize"
      label="Where?"
      solo
      v-model="data.location"
    />

    <v-textarea :auto-grow="true" rows="1"
      solo
      label="Any other info?"
      v-model="data.notes"
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
