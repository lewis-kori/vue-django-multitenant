<template>
  <div>
    <b-card class="text-center">
      <b-card-text>Improve your workday with Smart budgeter.</b-card-text>
      <div>
        <b-badge pill variant="success">Step 1</b-badge>
        <b-badge pill variant="success">Step 2</b-badge>
      </div>
      <b-card-body>
        <b-form>
          <b-row>
            <b-col cols="5" class="mx-auto">
              <b-form-group
                id="input-group-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="business-email-input"
                  v-model="form.business_email"
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
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        business_email: '',
        password: '',
      },
    }
  },
}
</script>
