<template>
  <div>
    <b-jumbotron
      class="full-jumbotron"
      text-variant="white"
      border-variant="dark"
      fluid
    >
      <template v-slot:header>Best Budgeting</template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <div class="row mx-auto">
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
export default {
  name: 'Jumbotron',
}
</script>
