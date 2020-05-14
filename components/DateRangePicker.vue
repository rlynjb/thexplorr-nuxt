<template>
<v-menu
  ref="menu"
  v-model="menu"
  :close-on-content-click="false"
  transition="scale-transition"
  offset-y
  max-width="290px"
  min-width="290px"
  ref="menu"
>
  <template v-slot:activator="{ on }">
    <v-icon class="float-left"
      color="grey">
      mdi-calendar-range
    </v-icon>

    <v-text-field
      v-model="date"
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
export default {
  data () {
    return {
      menu: false,
      date: [],
    }
  },

  watch: {
    date(v) {
      if (v.length === 2) {
        this.$emit('triggerSetDate', v)
      }
    }
  },
}
</script>

<style lang="scss">

</style>

