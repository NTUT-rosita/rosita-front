<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer :card-contents="footerCardContents" :community-media-icons="footerCommunityMediaIcons"
          :legel-links="footerLegalLinks"/>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import {
  getFooterCardContents,
  getFooterLegalLinks,
  getFooterCommunityMediaIcons
} from '@/components/app/footer/getFooterData'
import '@/assets/scss/app.scss'

export default defineComponent({
  name: 'App',
  components: {
    Footer: defineAsyncComponent(() => import('@/components/app/footer/Footer.vue'))
  },
  setup() {
    return {
      footerCardContents: getFooterCardContents(),
      footerLegalLinks: getFooterLegalLinks(),
      footerCommunityMediaIcons: getFooterCommunityMediaIcons()
    }
  }
})
</script>
