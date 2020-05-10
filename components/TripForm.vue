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


    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>More</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-col cols="12">
              <v-textarea
                auto-grow
                filled
                name="input-7-4"
                label="What are the main awesome things to experience?"
                :value="data && data.notes ? data.notes : ''"
              >
              </v-textarea>
            </v-col>

            <v-col cols="6" class="pr-3">
              <v-text-field
                label="When?"
                placeholder="ex. this weekend, next month, June 29, 2020 (Friday)"
                filled
                :value="data && data.date_start ? data.date_start : ''"
              />
            </v-col>

            <v-col cols="6" class="pl-3">
              <v-text-field
                label="Until"
                placeholder="ex. July 04, 2020 (Sunday)"
                filled
                :value="data && data.date_end ? data.date_end : ''"
              />
            </v-col>
          </v-row>

        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header>Day time</v-expansion-panel-header>
        <v-expansion-panel-content v-if="data && data.day_trips">
          <TripDetail />

          <TripDetail
            v-for="(item, i) in data.day_trips" :key="item.id"
            :data="item"
          />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else>
          <TripDetail />
        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header>Night time</v-expansion-panel-header>
        <v-expansion-panel-content v-if="data && data.night_trips">
          <TripDetail />

          <TripDetail
            v-for="(item, i) in data.night_trips" :key="item.id"
            :data="item"
          />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else>
          <TripDetail />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-card-text>


  <v-card-actions>
    <v-btn v-if="data" color="primary" nuxt to="/inspire">
      Update
    </v-btn>

    <v-btn v-else color="primary" nuxt to="/inspire">
      Share
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
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
