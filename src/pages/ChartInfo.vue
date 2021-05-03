<template>
  <NavBar class="fixed"/>
  <main id="chart-info" class="page-container min-h-screen h-screen">
    <div class="pt-14 lg:pt-20 h-full flex justify-center items-center">
      <ChartMenu/>
      <Chart/>
      <FilterBox/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/app/Navbar/NavBar.vue'
import Chart from '@/components/chart-info/chart/Chart.vue'
import ChartMenu from '@/components/chart-info/menu/ChartMenu.vue'
import FilterBox from '@/components/chart-info/filter-box/FilterBox.vue'
import '@/assets/scss/pages/chart-info.scss'

export default defineComponent({
  name: 'ChartInfo',
  components: {
    NavBar,
    Chart,
    ChartMenu,
    FilterBox
  }
})
</script>
