<template>
  <b-card class="text-center">
    <b-card-body>
      <b-form
        method="post"
        @submit.prevent="newDepartment({ name: form.name })"
      >
        <b-row>
          <b-col cols="12" md="5" class="mx-auto">
            <b-form-group id="input-group-1" description="Name of a department">
              <b-form-input
                id="name-input"
                v-model="form.name"
                required
                placeholder="Department name"
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
  name: 'Form',
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  methods: {
    ...mapActions({ newDepartment: 'core/newDepartment' }),
  },
}
</script>
