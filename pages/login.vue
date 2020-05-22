<template>
<div>
  <div id="firebaseui-auth-container">
  </div>
</div>
</template>

<script>
import "firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    let ui = new this.$firebase.firebaseui
      .auth.AuthUI( this.$firebase.core.auth() );

    if (!ui) {
      ui = new this.$firebase.firebaseui
        .auth.AuthUI( this.$firebase.core.auth() );
    }

    let uiConfig = {
      signInSuccessUrl: "/index",
      signInOptions: [
        this.$firebase.core.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  },
}
</script>

<style lang="scss">

</style>
