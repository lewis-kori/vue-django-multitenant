<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from '../components/Auth/Login'
export default {
  middleware: 'guest',
  components: { Login },
}
</script>
