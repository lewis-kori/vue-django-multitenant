<template>
  <b-card class="text-center">
    <b-card-body>
      <b-form method="post" @submit.prevent="completeExpense">
        <b-row>
          <b-col cols="12" md="5" class="mx-auto">
            <b-form-group id="input-group-1" description="Source of funds">
              <b-form-select
                v-model="form.budget"
                :options="budgetOptions"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-2" description="Amount">
              <b-form-input
                id="amount-input"
                v-model="form.amount"
                required
                placeholder="Amount"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" description="Date of expense">
              <b-form-datepicker
                id="datepicker"
                v-model="form.date"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
            <b-form-group id="input-group-4" description="Use">
              <b-form-textarea
                id="textarea"
                v-model="form.use"
                placeholder="Expense description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              class="col-12 col-md-5 btn btn-md"
              type="submit"
              variant="primary"
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
  name: 'ExpenseForm',
  data() {
    return {
      form: {
        budget: '',
        amount: '',
        date: '',
        use: '',
      },
    }
  },
  computed: {
    ...mapGetters({ budgets: 'core/budgets' }),
    budgetOptions() {
      const budgetOptions = [
        { value: null, text: 'Please select a budget to credit' },
      ]
      if (this.budgets.length > 0) {
        this.budgets.forEach((budget) => {
          const budgetInfo = {
            value: budget.id,
            text: `${budget.month}'s budget for ${budget.department.name} balance is $${budget.amount}`,
          }
          budgetOptions.push(budgetInfo)
        })
      }
      return budgetOptions
    },
  },
  mounted() {
    this.getBudgets()
  },
  methods: {
    ...mapActions({
      getBudgets: 'core/getBudgets',
      newExpense: 'core/newExpense',
    }),
    completeExpense() {
      const data = {
        budget: parseInt(this.form.budget),
        amount: parseInt(this.form.amount),
        date: this.form.date,
        use: this.form.use,
      }
      this.newExpense(data)
    },
  },
}
</script>
