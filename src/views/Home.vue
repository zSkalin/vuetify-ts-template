<template>
  <v-app>
    <v-scale-transition>
      <v-container v-if="loading">
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-scale-transition>

    <v-expand-transition>
      <v-navigation-drawer
        v-if="!loading"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        width="200"
      >
        <v-list nav shaped dense>
          <v-list-item-group color="primary">
            <v-list-item v-for="(navItem, i) in navItems" :key="i" exact :to="navItem.link">
              <v-list-item-icon>
                <v-icon v-text="navItem.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="navItem.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-expand-transition>

    <v-scale-transition>
      <v-app-bar
        v-if="!loading"
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span class="hidden-sm-and-down">Sample</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <Notifications />

        <v-menu transition="slide-y-transition" bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon large v-on="on">
              <v-avatar size="32px" item>
                <v-icon>mdi-user</v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-list rounded>
            <v-list-item @click="onLogout">
              <v-list-item-icon>
                <v-icon>mdi-sign-out</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-scale-transition>

    <v-scale-transition>
      <v-content v-if="!loading">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-scale-transition>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthStore } from '../store/modules/auth.store';

@Component
export default class HomeView extends Vue {
  private loading = true;
  private isOnline = true;
  private drawer = false;
  private navItems = [
    {
      text: 'Link',
      link: '/',
      icon: 'mdi-user',
    },
  ];

  created(): void {
    this.loading = false;
  }

  onNavigate(link: string): void {
    this.$router.push(link);
  }

  onLogout(): void {
    AuthStore.logout();
    this.$router.push('login');
  }
}
</script>
