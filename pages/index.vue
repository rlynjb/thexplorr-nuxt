<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <v-row>
        <TripForm class="col-12" />

        <Trip class="col-12"
          v-for="(item, i) in trips" :key="item.id"
          :data="item" />
      </v-row>

    </v-flex>
  </v-layout>
</template>

<script>
import Trip from '~/components/Trip.vue'
import TripForm from '~/components/TripForm.vue'

export default {
  components: {
    Trip,
    TripForm
  },
  data () {
    return {
      trips: [
        {
          id: '123asd',
          name: 'Gay Culture in Sunset Blvd',
          location: 'Sunset Blvd, Ca',
          notes: 'i wanna see the new hip town',
          date_start: '04-11-2020',
          date_end: '04-20-2020',
          day_trips: [
            {
              id: 'hello123lkjahdf',
              name: 'Setting of the L Word',
              location: '8555 w 8th st. sunset blvd, Ca, 89123, US',
              price: 2,
              notes: 'asesome possum stuff'
            },
            {
              id: 'hello123lkjahdf',
              name: 'Setting of the L Word',
              location: '8555 w 8th st. sunset blvd, Ca, 89123, US',
              price: 2,
              notes: 'asesome possum stuff'
            }
          ],
          night_trips: [
            {
              id: 'hello123lkjahdf',
              name: 'Club cafe',
              location: '8555 w 8th st. sunset blvd, Ca, 89123, US',
              price: 2,
              notes: 'asesome possum stuff'
            }
          ]
        }
      ],
    }
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
