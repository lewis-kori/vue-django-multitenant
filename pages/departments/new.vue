<template>
  <div class="container">
    <Form />
  </div>
</template>

<script>
import Form from '../../components/Main/Department/Form'
export default {
  components: { Form },
  middleware: 'auth',
}
</script>
