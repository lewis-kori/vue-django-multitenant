<template>
  <div class="container">
    <AccountForm />
  </div>
</template>

<script>
import AccountForm from '../../components/Main/Accounts/AccountForm'
export default {
  components: { AccountForm },
  middleware: 'auth',
}
</script>
