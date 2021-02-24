<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/app/Footer.vue'
import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
})
</script>
