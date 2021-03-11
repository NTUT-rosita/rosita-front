<template>
  <div class="circle__container relative h-full overflow-y-hidden">
    <div class="circle relative h-0">
      <div class="circle__outer">
        <div class="circle__inner"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import '@/assets/scss/components/chart-info/chart.scss'
export default defineComponent({
  name: "Chart"
})
</script>

<style scoped></style>