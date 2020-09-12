<template>
<div>
  <h1 class="text-white">
    Map here
  </h1>

  <div id="map">
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    console.log('KIRBY: ', this.$leaflet.leaflet)

    const map = this.$leaflet.leaflet
      .map('map')
      .setView([51.505, -0.09], 13);

    this.$leaflet.leaflet
      .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      )
      .addTo(map);

      this.$leaflet.leaflet
        .marker([51.5, -0.09])
        .addTo(map)
        .openPopup();
  }
}
</script>

<style lang="scss">

</style>
