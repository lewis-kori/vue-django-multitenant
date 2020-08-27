<template>
  <div class="container">
    <div class="row">
      <div
        v-for="account in accounts"
        :key="account.id"
        class="col-xl-3 col-sm-6"
      >
        <AccountInfo :account="account" />
      </div>
    </div>
    <div class="container-fluid">
      <Expenses :expenses="expenses" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AccountInfo from '../components/Main/Accounts/AccountInfo'
import Expenses from '../components/Main/Expenses/Expenses'
export default {
  components: { AccountInfo, Expenses },
  middleware: 'auth',
  computed: {
    ...mapGetters({ accounts: 'core/accounts', expenses: 'core/expenses' }),
  },
  mounted() {
    this.getAccounts()
    this.getExpenses()
  },
  methods: {
    ...mapActions({
      getAccounts: 'core/getAccounts',
      getExpenses: 'core/getExpenses',
    }),
  },
}
</script>
