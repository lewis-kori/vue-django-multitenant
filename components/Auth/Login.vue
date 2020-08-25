<template>
  <div>
    <b-card class="text-center">
      <b-card-body>
        <div v-if="!organization.name">
          <GetOrg />
        </div>
        <div v-else class="container">
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
import GetOrg from './GetOrg'
export default {
  name: 'Login',
  components: { GetOrg },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters(['organization']),
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setOrganization']),
    clearOrgData() {
      this.visibleForm = 'organization id'
      this.setOrganization()
    },
    loginUser() {
      this.login({ email: this.form.email, password: this.form.password })
    },
  },
}
</script>
