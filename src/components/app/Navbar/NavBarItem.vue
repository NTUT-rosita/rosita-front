<template>
  <component :is="external?ExternalLink:InnerLink" :to="link"
             class="self-center justify-center items-center hover:bg-gray-900">
    <div class="mx-2 text-base sm:text-sm lg:text-lg xl:text-xl">
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
