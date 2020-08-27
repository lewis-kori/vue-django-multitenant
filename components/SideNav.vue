<template>
  <div>
    <b-sidebar
      id="sidebar"
      aria-labelledby="sidebar"
      :backdrop-variant="'dark'"
      backdrop
      no-header
      shadow
      bg-variant="dark"
      text-variant="light"
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-title">Menu</h4>

          <p>
            welcome {{ loggedInUser.first_name }},<br />
            Defyn brings you the best organizational experience.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Users</b-nav-item>
              <b-nav-item-dropdown text="Departments" right>
                <b-dropdown-item href="#">Finance</b-dropdown-item>
                <b-dropdown-item href="#">HR</b-dropdown-item>
                <b-dropdown-item href="#">R&D</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
      <template v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto"
            ><a href="https://lewiskori.com/" target="__blank"
              >Lewis Kori</a
            ></strong
          >
          <b-button size="sm" variant="primary" @click="hide">Close</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideNav',
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>
