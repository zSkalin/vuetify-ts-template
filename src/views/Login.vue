<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <transition appear name="slide-fade">
        <v-row align="center" justify="center">
          <v-col sm="8" md="4">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="username"
                  label="Username"
                  outlined
                  rounded
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  rounded
                  dense
                  type="password"
                  v-on:keyup.enter="login"
                ></v-text-field>
                <v-btn
                  id="login-button"
                  @click="login"
                  :loading="isLoggingIn"
                  rounded
                  large
                  block
                  color="primary"
                  >Login</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </transition>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {
  private processing = false;
  private username = '';
  private password = '';
}
</script>

<style lang="scss"></style>
