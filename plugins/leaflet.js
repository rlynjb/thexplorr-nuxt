import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
import {
  OpenStreetMapProvider
} from 'leaflet-geosearch'



Vue.prototype.$leaflet = {
  Vue2Leaflet,
  OpenStreetMapProvider
}
