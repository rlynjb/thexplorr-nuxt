<template>
<div>
  <p>Not available yet.</p>
  <p>If you wished to have an account. Please let the owner know for an explusive access.</p>
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
      signInSuccessUrl: "/",
      signInOptions: [
        this.$firebase.core.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  },
}
</script>

<style lang="scss">

</style>
