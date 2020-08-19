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
        <b-navbar-nav class="ml-auto">
          <b-nav-item>login</b-nav-item>
          <b-nav-item
            ><nuxt-link class="btn btn-sm btn-primary" :to="{ name: 'signup' }"
              >Sign up</nuxt-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
