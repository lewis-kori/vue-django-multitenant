<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      style="background-color: var(--black);"
    >
      <b-navbar-brand>
        <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="isAuthenticated" class="ml-auto">
          <b-nav-item v-b-toggle.sidebar>
            {{ organization.name }} Menu
          </b-nav-item>
          <b-nav-item>{{ loggedInUser.first_name }}</b-nav-item>
          <b-nav-item @click="logout"
            ><b-button variant="primary" size="sm"
              >Log out</b-button
            ></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto">
          <b-nav-item
            ><nuxt-link :to="{ name: 'login' }">login</nuxt-link></b-nav-item
          >
          <b-nav-item
            ><nuxt-link class="btn btn-sm btn-primary" :to="{ name: 'signup' }"
              >Sign up</nuxt-link
            ></b-nav-item
          ></b-navbar-nav
        >
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'organization']),
  },
  methods: {
    ...mapMutations(['setOrganization']),
    async logout() {
      // call nuxt auth method to destroy jwts from cookie
      await this.$auth.logout()
      // clear org data from local storage
      this.setOrganization()
    },
  },
}
</script>
