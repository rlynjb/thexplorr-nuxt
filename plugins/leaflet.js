import Vue from 'vue';
import {
  OpenStreetMapProvider
} from 'leaflet-geosearch';
import leaflet from 'leaflet';


Vue.prototype.$leaflet = {
  OpenStreetMapProvider,
  leaflet
};
