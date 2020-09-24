<template>
<nav>
  <v-snackbar v-model="snackbar" :timeout="4000" top>
    <span>Awesome! You added a new project!</span>
    <v-btn depressed text @click="snackbar = false">Close</v-btn>
  </v-snackbar>

  <v-toolbar flat>
    <v-app-bar-nav-icon  color="grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Todo</span>
      <span>Ninga</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="grey--text" v-bind="attrs" v-on="on">
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn text color="grey">
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary app class="indigo">
    <v-layout column align-center>
      <v-flex class="mt-7">
        <v-avatar size="100">
          <img src="/avatar-1.png">
        </v-avatar>
        <p class="white--text subtitle-1 mt-3">
          The Net Ninja
        </p>
      </v-flex>
      <v-flex>
        <Popup @projectAdded="snackbar = true"/>
      </v-flex>
    </v-layout>
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
import Popup from "@/components/Popup.vue";

export default {
  components: { Popup },
  name: "Navbar",
  data() {
  return {
    drawer: false,
    links: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
      { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
      { icon: 'mdi-account-circle', text: 'Team', route: '/team' },
    ],
    snackbar: false,
  }
  },
}
</script>
