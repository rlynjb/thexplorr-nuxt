<template>
<v-menu
  ref="menu"
  v-model="menu"
  :close-on-content-click="false"
  max-width="290px"
  min-width="290px"
>
  <template v-slot:activator="{ on }">
    <v-icon class="float-left"
      color="grey">
      mdi-calendar-range
    </v-icon>

    <v-text-field
      class="hidden-date-field"
      v-model="formatDate"
      readonly
      solo
      v-on="on"
      label="When?"
    ></v-text-field>
  </template>

  <v-date-picker v-model="date" range no-title scrollable>
    <v-spacer></v-spacer>

    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
  </v-date-picker>
</v-menu>
</template>

<script>
import moment from 'moment';

export default {
  props: ['val'],
  data () {
    return {
      menu: false,
      date: [],
    }
  },

  mounted() {
    if (this.val != null) {
      this.date = this.val;
    }
  },

  watch: {
    date(v) {
      if (v.length === 2) {
        this.$emit('triggerSetDate', v);
      }
    }
  },

  computed: {
    formatDate() {
      if (this.date.length === 0) {
        return ''
      }

      if (this.date.length === 1) {
        return moment(this.date[0]).format('dddd, MMMM Do YYYY')
      }

      if (this.date.length === 2) {
        return moment(this.date[0]).format('dddd, MMMM Do YYYY')
          + ' to ' + moment(this.date[1]).format('dddd, MMMM Do YYYY')
      }
    }
  },
}
</script>

<style lang="scss">

</style>

