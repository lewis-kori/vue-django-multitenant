<template>
  <div>
    <b-jumbotron
      class="full-jumbotron"
      text-variant="white"
      border-variant="dark"
      fluid
    >
      <template v-slot:header>Defyn tech</template>

      <template v-slot:lead>
        This is a vue.js powered multitenant application.
      </template>

      <hr class="my-4" />

      <p>
        It's powered by django and django restframework. Made with love by
        <a href="https://lewiskori.com" target="__blank">Lewis Kori.</a>
      </p>
      <div v-if="!isAuthenticated" class="row mx-auto">
        <div class="col">
          <nuxt-link :to="{ name: 'signup' }" class="btn btn-lg btn-primary"
            >Sign up for free</nuxt-link
          >
        </div>
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
