<template>
  <div>
    <b-jumbotron
      class="jumbotron"
      text-variant="white"
      border-variant="dark"
      fluid
    >
      <template v-slot:header
        ><span class="d-flex justify-content-center"
          >Defyne tech</span
        ></template
      >

      <template v-slot:lead>
        <span class="d-flex justify-content-center"
          >This is a vue.js powered multitenant application.</span
        >
      </template>

      <p class="d-flex justify-content-center">
        It's powered by django and django restframework on the backend.
      </p>
      <p class="d-flex justify-content-center">
        Made with ❤️ by
        <a href="https://lewiskori.com" target="__blank">@Lewis Kori.</a>
      </p>
      <div v-if="!isAuthenticated" class="d-flex justify-content-center">
        <nuxt-link :to="{ name: 'signup' }" class="btn btn-lg btn-primary"
          >Sign up for free</nuxt-link
        >
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Jumbotron',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>
