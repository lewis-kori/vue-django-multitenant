<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from '../components/Auth/Login'
export default {
  components: { Login },
  middleware: 'guest',
}
</script>
