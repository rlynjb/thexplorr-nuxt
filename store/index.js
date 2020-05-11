import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
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
      ]
    }),

    mutations: {
      addTrip (state, obj) {
        state.trips.unshift(obj)
      },

      updateTrip (state, obj) {
        //
      },

      updateTripDetail (state, obj) {
        //
      },

      deleteTrip (state, obj) {
        //
      },

      deleteTripDetail (state, obj) {
        //
      },

    },

  })
}

export default createStore
