<template>
  <div>
    <div v-if="signUpVisible">
      <b-card class="text-center">
        <b-card-text>{{ formText }}</b-card-text>
        <div>
          <b-badge pill variant="success">Step 1</b-badge>
          <b-badge v-if="visibleForm === 'stepTwo'" pill variant="success"
            >Step 2</b-badge
          >
          <b-badge v-else pill variant="secondary">Step 2</b-badge>
        </div>
        <b-card-body>
          <b-form method="post" @submit.prevent="completeSignUp">
            <div v-if="visibleForm === 'stepOne'">
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group
                    id="input-group-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="business-email-input"
                      v-model="form.businessEmail"
                      type="email"
                      required
                      placeholder="Business email address"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group
                    description="Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji."
                  >
                    <b-form-input
                      id="text-password"
                      v-model="form.password"
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button
                    v-if="form.password && form.businessEmail"
                    class="col-5 btn btn-md"
                    variant="primary"
                    @click="stepTwo"
                  >
                    Next
                  </b-button>
                  <b-button v-else disabled class="col-5 btn btn-md">
                    Next
                  </b-button>
                </b-col>
              </b-row>
            </div>
            <div v-else>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group id="first-name-input-1">
                    <b-form-input
                      id="first-name-input"
                      v-model="form.firstName"
                      required
                      placeholder="First Name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group id="last-name-input-1">
                    <b-form-input
                      id="last-name-input"
                      v-model="form.lastName"
                      required
                      placeholder="Last Name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group>
                    <b-form-input
                      id="phone-number"
                      v-model="form.phone"
                      placeholder="Phone Number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group id="company-name-input-1">
                    <b-form-input
                      id="company-name-input"
                      v-model="form.companyName"
                      required
                      placeholder="Company Name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5" class="mx-auto">
                  <b-form-group
                    id="personal-email-input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="personal-email-input"
                      v-model="form.personalEmail"
                      type="email"
                      required
                      placeholder="User Email"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button
                    class="col-5 btn btn-md"
                    type="submit"
                    variant="primary"
                  >
                    Complete Sign up
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </div>
    <div v-else class="my-5">
      <b-card class="text-center">
        <b-spinner
          type="grow"
          label="Loading..."
          style="color: var(--dark-beige); width: 4rem; height: 4rem;"
        ></b-spinner>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        businessEmail: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        companyName: '',
        personalEmail: '',
      },
      visibleForm: 'stepOne',
      signUpVisible: true,
      formText: 'Improve your workday with Smart budgeter.',
      business: {
        id: '',
        subdomain: '',
      },
    }
  },
  computed: {
    ...mapGetters(['registrationError']),
  },
  methods: {
    ...mapActions(['createOrganization']),
    stepTwo() {
      this.visibleForm = 'stepTwo'
      this.formText = 'One step away from the budgetter of your dreams!'
    },
    completeSignUp() {
      // this.registrat = false
      const userRegistrationData = {
        email: this.form.personalEmail,
        first_name: this.form.firstName,
        last_name: this.form.lastName,
        organization: 1,
        role: 'Admin',
        password: this.form.password,
      }
      const organizationData = {
        name: this.form.companyName,
        business_email: this.form.businessEmail,
        business_phone_number: this.form.phone,
      }
      const createOrgPayload = {
        organization: organizationData,
        user: userRegistrationData,
      }
      this.createOrganization(createOrgPayload)
    },
  },
}
</script>
