<template>
  <div class="container">
    <b-row v-if="budgets.length > 0" class="mb-5">
      <b-col v-for="budget in budgets" :key="budget.id" cols="6">
        <BudgetInfo :budget="budget" />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col class="text-white text-center">
        <p>
          This department has not been allocated funds at the moment.
        </p>
      </b-col>
    </b-row>
    <div class="container-fluid">
      <Expenses :expenses="expenses" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Expenses from '../../../components/Main/Expenses/Expenses'
import BudgetInfo from '../../../components/Main/Accounts/Budgets/BudgetInfo'
export default {
  middleware: 'auth',
  components: { Expenses, BudgetInfo },
  computed: {
    ...mapGetters({ expenses: 'core/expenses', budgets: 'core/budgets' }),
  },
  mounted() {
    this.getExpenses({ department_id: this.$route.params.id })
    this.getBudgets({ department_id: this.$route.params.id })
  },
  methods: {
    ...mapActions({
      getBudgets: 'core/getBudgets',
      getExpenses: 'core/getExpenses',
    }),
  },
}
</script>
