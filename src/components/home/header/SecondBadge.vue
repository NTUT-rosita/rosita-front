<template>
  <svg id="second-badge" class="pt-4 px-20 relative max-w-full" viewBox="0 0 470.21 77.68">
    <use xlink:href="#rosita-second-badge.svg"/>
  </svg>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import '@/assets/svg/rosita-second-badge.svg'

export default defineComponent({
  name: "SecondBadge"
})
</script>

<style lang="scss" scoped>
#second-badge {
  transition: .5s ease;
}

.show {
  opacity: 1;
  transition: .5s ease;
}
</style>
