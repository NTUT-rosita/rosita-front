<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Footer: defineAsyncComponent({
      loader: () => import('@/components/app/Footer.vue'),
      delay: 50
    })
  }
})
</script>
