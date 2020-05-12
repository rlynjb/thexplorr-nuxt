import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
import VGeosearch from 'vue2-leaflet-geosearch'
import {
  OpenStreetMapProvider
} from 'leaflet-geosearch'


//Vue.use(Vue2Leaflet)


Vue.prototype.$leaflet = {
  Vue2Leaflet,
  VGeosearch,
  OpenStreetMapProvider
}
