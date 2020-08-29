<template>
  <div class="container">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '../components/Auth/SignUp'
export default {
  middleware: 'guest',
  components: { SignUp },
}
</script>
