import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      trips: [
        {
          id: '123asd',
          name: 'LGBTQ Culture in Sunset Blvd',
          location: 'Sunset Blvd, Ca',
          notes: 'i wanna see the new hip town',
          date: [],
          day_trips: [
            {
              id: 'hello123lkjahdf',
              name: 'Setting of the L Word',
              location: '8555 w 8th st. sunset blvd, Ca, 89123, US',
              price: 2,
              notes: 'asesome possum stuff',
              time: 'day',
              __embedded: {},
            }
          ],
          night_trips: [
            {
              id: 'hello123lkjahdf',
              name: 'Club cafe',
              location: '8555 w 8th st. sunset blvd, Ca, 89123, US',
              price: 2,
              notes: 'asesome possum stuff',
              time: 'night',
              __embedded: {},
            }
          ],
          __embedded: {},
        }
      ]
    }),

    mutations: {
      addTrips(state, arr) {
        state.trips = arr
      },
      addTrip (state, obj) {
        state.trips.unshift(obj)
      },

      updateTrip (state, obj) {
        //
      },

      deleteTrip (state, obj) {
        //
      },
    },

  })
}

export default createStore
