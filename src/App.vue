<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer :card-contents="footerCardContents"
          :community-media-icons="footerCommunityMediaIcons"
          :legal-links="footerLegalLinks"/>
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
    Footer: defineAsyncComponent({
      loader: () => import('@/components/app/footer/Footer.vue'),
      delay: 50
    })
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
