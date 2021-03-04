<template>
  <component :is="external?ExternalLink:InnerLink" :to="link"
             class="drawer__link text-black dark:text-white block text-left uppercase tracking-widest no-underline p-4 my-1.5 mx-4 rounded-xl
                   ease-in-out outline-none"
             rel="noreferrer noopener">&#9733;{{ name }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExternalLink from "@/components/app/links/ExternalLink.vue";
import InnerLink from "@/components/app/links/InnerLink.vue";

export default defineComponent({
  name: "NavDrawerItem",
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
