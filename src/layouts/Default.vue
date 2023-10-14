<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
