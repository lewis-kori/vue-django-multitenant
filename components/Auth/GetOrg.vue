<template>
  <b-form method="post" @submit.prevent="getOrganization(organizationId)">
    <b-card-text>Enter your organization id.</b-card-text>
    <b-row>
      <b-col cols="5" class="mx-auto">
        <b-form-group id="input-group-1">
          <b-form-input
            id="organization-id-input"
            v-model="organizationId"
            required
            placeholder="Enter your organization ID..."
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button class="col-5 btn btn-md" type="submit" variant="primary">
          Next
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'GetOrg',
  data() {
    return {
      organizationId: '',
    }
  },
  methods: {
    ...mapActions(['getOrganization']),
  },
}
</script>
