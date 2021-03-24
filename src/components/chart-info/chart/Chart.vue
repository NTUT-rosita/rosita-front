<template>
  <div class="circle__container relative overflow-y-hidden flex justify-center items-center">
    <div class="circle relative h-0">
      <div class="circle__outer">
        <div class="circle__inner"/>
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