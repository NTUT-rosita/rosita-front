<template>
  <component :is="external?ExternalLink:InnerLink" :to="link"
             class="self-center justify-center items-center ease-in-out transition hover:bg-gray-200 dark:hover:bg-gray-700 h-full flex px-2 md:px-4">
    <div class="align-baseline text-base sm:text-sm lg:text-lg xl:text-xl font-black">
      {{ name }}
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExternalLink from "@/components/app/links/ExternalLink.vue";
import InnerLink from "@/components/app/links/InnerLink.vue";

export default defineComponent({
  name: "NavBarItem",
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    link: {
      type: String,
      default: '',
      required: true
    },
    external: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  setup() {
    return {
      ExternalLink,
      InnerLink
    }
  }
})
</script>
