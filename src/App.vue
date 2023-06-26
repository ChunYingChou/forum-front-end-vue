<template>
  <div id="course-forum">
    <Navbar />
    <!-- <p>-------------------以下是router-view-------------------</p> -->
    <main class="mt-5 bg-white">
    <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
