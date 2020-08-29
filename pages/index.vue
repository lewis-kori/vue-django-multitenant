<template>
  <div class="container">
    <Jumbotron />
    <About />
  </div>
</template>

<script>
import About from '../components/HomePage/About'
import Jumbotron from '../components/HomePage/Jumbotron'
export default {
  middleware: 'guest',
  components: { About, Jumbotron },
}
</script>
