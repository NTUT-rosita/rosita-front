<template>
  <div
      class="
      menu-card
      rounded-3xl
      bg-black
      dark:bg-white
      mx-4
      my-4
      text-white
      dark:text-black
      text-center
      inline-block
      relative">
    <InnerLink :to="link" class="hover:shadow-2xl">
      <div
          class="
          menu-card__top-text
          relative
          flex
          items-center
          justify-center">
        <p
            class="
            relative
            font-extrabold
            text-2xl">
          {{ title }}
        </p>
      </div>
      <div class="menu-card__img relative">
        <img :src="imgUrl" alt="" class="relative"/>
      </div>
    </InnerLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@/assets/scss/components/affairs-info/menu-card.scss'
import InnerLink from '@/components/app/links/InnerLink.vue'

export default defineComponent({
  name: 'MenuCard',
  components: {
    // LazyImg: defineAsyncComponent(() => import('@/components/app/LazyImg.vue')),
    InnerLink
  },
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
})

</script>
