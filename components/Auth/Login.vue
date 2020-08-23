<template>
  <div>
    <b-card class="text-center">
      <b-card-body>
        <b-form v-if="visibleForm === 'organization id'">
          <b-card-text>Enter your organization id.</b-card-text>
          <b-row>
            <b-col cols="5" class="mx-auto">
              <b-form-group id="input-group-1">
                <b-form-input
                  id="organization-id-input"
                  v-model="form.organizationId"
                  required
                  placeholder="Enter your organization ID..."
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button
                class="col-5 btn btn-md"
                variant="primary"
                @click="getOrganization"
              >
                Next
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <div v-else-if="visibleForm === 'login'" class="container">
          <b-form method="post" @submit.prevent="loginUser">
            <b-card-text>{{ organization.name }}.</b-card-text>
            <b-row>
              <b-col cols="5" class="mx-auto">
                <b-form-group id="email-input-1">
                  <b-form-input
                    id="email-input"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="User Email"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="5" class="mx-auto">
                <b-form-group>
                  <b-form-input
                    id="text-password"
                    v-model="form.password"
                    required
                    type="password"
                    placeholder="Password"
                  ></b-form-input>
                </b-form-group>
                <div class="row text-white my-2">
                  <p class="col-6 float-left hoverable" @click="clearOrgData">
                    <u> Not part of {{ organization.name }}?</u>
                  </p>
                  <p class="col-6 float-right hoverable">
                    <u>Forgot password?</u>
                  </p>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button
                  class="col-5 btn btn-md"
                  type="submit"
                  variant="primary"
                >
                  login
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        organizationId: '',
        email: '',
        password: '',
      },
      visibleForm: 'organization id',
    }
  },
  computed: {
    ...mapGetters(['organization']),
  },
  created() {
    this.getVisibleForm()
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setOrganization']),
    getVisibleForm() {
      if (this.organization.name) {
        this.visibleForm = 'login'
      }
    },
    clearOrgData() {
      this.visibleForm = 'organization id'
      this.setOrganization()
    },
    loginUser() {
      this.login({ email: this.form.email, password: this.form.password })
    },
    async getOrganization() {
      try {
        await this.$axios
          .post('v1/tenants/info/', {
            tenant_id: this.form.organizationId,
          })
          .then((response) => {
            if (response.status === 200) {
              const orgData = {
                name: response.data.name,
                subdomain: `http://${response.data.subdomain}:8000/api/`,
              }
              this.setOrganization(orgData)
              this.visibleForm = 'login'
            }
          })
      } catch {}
    },
  },
}
</script>
