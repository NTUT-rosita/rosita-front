<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer :cardContents="footerCardContents" :legelLinks="footerLegelLinks" :communityMediaIcons="footerCommunityMediaIcons"></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/app/footer/Footer.vue'
import { getFooterCardContents, getFooterLegelLinks, getFooterCommunityMediaIcons  } from '@/components/app/footer/get-footer-data'
import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  },
  setup() {
    return {
      footerCardContents: getFooterCardContents(),
      footerLegelLinks: getFooterLegelLinks(),
      footerCommunityMediaIcons: getFooterCommunityMediaIcons()
    }
  }
})
</script>
