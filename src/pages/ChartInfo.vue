<template>
  <NavBar class="fixed"/>
  <main id="chart-info" class="page-container">
    <div class="mt-14 lg:mt-20">
      123
      <br>
      <br><br><br><br><br><br><br>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "@/components/app/Navbar/NavBar.vue";
import '@/assets/scss/pages/chart-info.scss'

export default defineComponent({
  name: "ChartInfo",
  components: {
    NavBar
  }
})
</script>