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
                <b-dropdown-item
                  v-for="department in departments"
                  :key="department.id"
                  >{{ department.name }}</b-dropdown-item
                >
                <hr />
                <b-dropdown-item
                  ><nuxt-link :to="{ name: 'departments-new' }"
                    >New Department</nuxt-link
                  ></b-dropdown-item
                >
              </b-nav-item-dropdown>

              <b-nav-item></b-nav-item>
              <b-nav-item
                ><nuxt-link :to="{ name: 'accounts-new' }"
                  >New Account</nuxt-link
                ></b-nav-item
              >
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SideNav',
  computed: {
    ...mapGetters({
      loggedInUser: 'loggedInUser',
      departments: 'core/departments',
    }),
  },
  mounted() {
    this.getDepartments()
  },
  methods: {
    ...mapActions({ getDepartments: 'core/getDepartments' }),
  },
}
</script>
