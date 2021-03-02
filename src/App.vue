<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer :card-items="cardItems" :other-info-items="otherInfoItems" :icon-items="iconItems"></Footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Footer from '@/components/app/Footer.vue'
import '@/assets/scss/app.scss'
import footerData from '@/assets/json/footer-data.json'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  },
  setup() {
    interface CardItem {
      title: string;
      content: string;
      url: string;
    }

    interface OtherInfoItem {
      title: string;
      url: string;
    }

    interface IconItem {
      name: string;
      type: string;
      url: string;
    }

    return {
      cardItems: ref<Array<CardItem>>(footerData.cardItems),
      otherInfoItems: ref<Array<OtherInfoItem>>(footerData.otherInfoItems),
      iconItems: ref<Array<IconItem>>(footerData.iconItems)
    }
  }
})
</script>
