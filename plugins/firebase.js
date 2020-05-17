import Vue from 'vue';
import * as firebase from 'firebase/app';

import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDXF9OEyFBZ9nf_lr9d9YTKtfF8RfSJoD8",
  authDomain: "thexplorr.firebaseapp.com",
  databaseURL: "https://thexplorr.firebaseio.com",
  projectId: "thexplorr",
  storageBucket: "thexplorr.appspot.com",
  messagingSenderId: "111747924030",
  appId: "1:111747924030:web:751732adde0b012159d16f",
  measurementId: "G-YDGQTVBX08"
};

firebase.initializeApp(firebaseConfig)


Vue.prototype.$leaflet = {
  core: firebase,
};
