<template>
<v-row no-gutters>
  <v-col cols="10">
    <v-text-field label="Name"
      placeholder="ex. Original Starbucks coffee shop"
      filled
      :value="data && data.name ? data.name : ''"
    />
  </v-col>

  <v-col cols="2">
    <v-btn color="primary" nuxt to="/inspire">+</v-btn>
  </v-col>

  <!--
  <v-col cols="10">
    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>More</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-col cols="10" class="pr-4">
              <v-text-field label="Where?"
                placeholder="8555 N. 4th st. Las Vegas, NV 89101, US"
                filled
                :value="data && data.location ? data.location : ''"
              />
            </v-col>
            <v-col cols="2">
              <v-text-field label="Price"
                placeholder="5.00"
                filled
                :value="data && data.price ? data.price : ''"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea auto-grow filled name="input-7-4"
                label="Any other info?"
                :value="data && data.notes ? data.notes : ''"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
  -->
</v-row>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style>

</style>
