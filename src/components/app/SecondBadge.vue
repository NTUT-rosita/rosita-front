<template>
  <router-link to="/" replace>
    <SvgIcon name="rosita-second-badge" class="second-badge relative max-w-full" viewBox="0 0 470.21 77.68" aria-hidden="true"/>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/app/SvgIcon.vue'

export default defineComponent({
  name: 'SecondBadge',
  components: { SvgIcon }
})
</script>

<style lang="scss" scoped>
.second-badge {
  transition: .5s ease;

  .show {
    opacity: 1;
    transition: .5s ease;
  }
}
</style>
