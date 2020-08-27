<template>
  <b-card class="text-center">
    <b-card-body>
      <b-form
        method="post"
        @submit.prevent="
          newAccount({ name: form.name, amount: parseInt(form.amount) })
        "
      >
        <b-row>
          <b-col cols="12" md="5" class="mx-auto">
            <b-form-group id="input-group-1" description="Name of account">
              <b-form-input
                id="name-input"
                v-model="form.name"
                required
                placeholder="Account name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" description="Amount in account">
              <b-form-input
                id="amount-input"
                v-model="form.amount"
                required
                placeholder="Amount"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              class="col-12 col-md-5 btn btn-md"
              variant="primary"
              type="submit"
            >
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AccountForm',
  data() {
    return {
      form: {
        name: '',
        amount: '',
      },
    }
  },
  methods: {
    ...mapActions({ newAccount: 'core/newAccount' }),
  },
}
</script>
