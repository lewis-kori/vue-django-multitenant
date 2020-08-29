<template>
  <div class="container">
    <ExpenseForm />
  </div>
</template>

<script>
import ExpenseForm from '../../components/Main/Expenses/ExpenseForm'
export default {
  middleware: 'auth',
  components: { ExpenseForm },
}
</script>
