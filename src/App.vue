<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="indigo"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Hydrantenkontrolle</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        theme="dark"
        permanent
        :width="300"
      >
        <v-list v-if="user.userId" nav>
          <v-list-item prepend-icon="mdi-home" to="/" title="Willkommen" value="welcome"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" to="/dashboard" title="Übersicht" value="Übersicht"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" to="/profile" title="Profil" value="Profil"></v-list-item>
        </v-list>
        <v-list v-else nav>
          <v-list-item prepend-icon="mdi-home" to="/" title="Willkommen" value="welcome"></v-list-item>
          <v-list-item prepend-icon="mdi-email" to="/signup" title="Registrieren" value="Registrieren"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" to="/login" title="Login" value="Login"></v-list-item>
        </v-list>
      
        <template v-slot:append v-if="user.userId" >
          <div class="pa-2">
            <v-btn block
            @click.prevent="handleLogout"
            :disabled="isLoggedOut">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="min-height: 100vh">
        <v-container max-width="1200">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Userfront from "@userfront/toolkit/vue";

export default {
  computed: {
    user() {
      return Userfront.user;
    },
    isLoggedOut() {
      return !Userfront.accessToken();
    }
  },
  methods: {
    // Log out with Userfront.logout()
    handleLogout() {
      Userfront.logout();
    }
  },
  data: () => ({
    drawer: true,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
