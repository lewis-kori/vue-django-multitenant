<template>
  <b-card class="text-center">
    <b-card-body>
      <b-form method="post" @submit.prevent="completeBudget">
        <b-row>
          <b-col cols="12" md="5" class="mx-auto">
            <b-form-group id="input-group-1" description="Source of funds">
              <b-form-select
                v-model="form.source"
                :options="accountOptions"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-2" description="Department">
              <b-form-select
                v-model="form.department"
                :options="departmentOptions"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-3" description="Month">
              <b-form-select
                v-model="form.month"
                :options="monthOptions"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-4" description="Year">
              <b-form-input
                id="year-input"
                v-model="form.year"
                required
                placeholder="Year"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" description="Amount allocation">
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BudgetForm',
  data() {
    return {
      form: {
        source: '',
        deparment: '',
        amount: '',
        month: '',
        year: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      accounts: 'core/accounts',
      departments: 'core/departments',
    }),
    accountOptions() {
      const accountOptions = [
        { value: null, text: 'Please select an account to credit' },
      ]
      if (this.accounts.length > 0) {
        this.accounts.forEach((account) => {
          const accountInfo = { value: account.id, text: account.name }
          accountOptions.push(accountInfo)
        })
      }
      return accountOptions
    },
    departmentOptions() {
      const departmentOptions = [
        { value: null, text: 'Please select department to allocate funds' },
      ]
      if (this.departments.length > 0) {
        this.departments.forEach((department) => {
          const departmentInfo = { value: department.id, text: department.name }
          departmentOptions.push(departmentInfo)
        })
      }
      return departmentOptions
    },
    monthOptions() {
      const months = [
        { value: null, text: 'Please select a month for the budget' },
        { value: 1, text: 'January' },
        { value: 2, text: 'February' },
        { value: 3, text: 'March' },
        { value: 4, text: 'April' },
        { value: 5, text: 'May' },
        { value: 6, text: 'June' },
        { value: 7, text: 'July' },
        { value: 8, text: 'August' },
        { value: 9, text: 'September' },
        { value: 10, text: 'October' },
        { value: 11, text: 'November' },
        { value: 12, text: 'December' },
      ]
      return months
    },
  },
  mounted() {
    this.getAccounts()
    this.getDepartments()
  },
  methods: {
    ...mapActions({
      getAccounts: 'core/getAccounts',
      getDepartments: 'core/getDepartments',
      newBudget: 'core/newBudget',
    }),
    completeBudget() {
      const data = {
        source: parseInt(this.form.source),
        department: parseInt(this.form.department),
        month: parseInt(this.form.month),
        year: parseInt(this.form.year),
        amount: parseInt(this.form.amount),
      }
      this.newBudget(data)
    },
  },
}
</script>
