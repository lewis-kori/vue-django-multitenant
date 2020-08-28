<template>
  <div class="container">
    <div class="container-fluid">
      <Expenses :expenses="expenses" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Expenses from '../../../components/Main/Expenses/Expenses'
export default {
  middleware: 'auth',
  components: { Expenses },
  computed: {
    ...mapGetters({ expenses: 'core/expenses' }),
  },
  mounted() {
    this.getExpenses({ department_id: this.$route.params.id })
  },
  methods: {
    ...mapActions({
      getExpenses: 'core/getExpenses',
    }),
  },
}
</script>
