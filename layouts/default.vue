<template>
  <v-app dark>
    <!--
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <!--
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      -->

      <div class="row">
        <v-toolbar-title class="col-7" v-text="title" />

        <div class="col-5 text-right" v-if="authenticated">
          Welcome {{ authenticated.displayName }}

          <v-btn
            icon
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>

        <div class="col-5 text-right" v-else>
          <nuxt-link to="/login">
            Login
          </nuxt-link>
        </div>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <!--
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            Switch drawer
          </v-list-item-title>
        </v-list-item>
        -->

        <v-list-item v-if="authenticated">
          <v-btn @click="logout">Logout</v-btn>
        </v-list-item>
        <v-list-item>
          hello
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted() {
    // check if user is signed in
    this.$firebase.core.auth().onAuthStateChanged((user) => {
      if (user) this.$store.state.authenticated = user
    });
  },

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'thexplorr'
    }
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    }
  },

  methods: {
    logout() {
      this.$firebase.core.auth().signOut();
      this.rightDrawer = false;
    },
  },
}
</script>

<style lang="scss">
#__nuxt .v-application .primary {
  background-color: #00ACC1 !important;
  border-color: #00ACC1 !important;
}
</style>
