<template>
  <div class="container">
    <BudgetForm />
  </div>
</template>

<script>
import BudgetForm from '../../../components/Main/Accounts/Budgets/BudgetForm'
export default {
  components: { BudgetForm },
  middleware: 'auth',
}
</script>
