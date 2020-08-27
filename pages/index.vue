<template>
  <div>
    <Jumbotron />
  </div>
</template>

<script>
import Jumbotron from '../components/HomePage/Jumbotron'
export default {
  middleware: 'guest',
  components: { Jumbotron },
}
</script>
