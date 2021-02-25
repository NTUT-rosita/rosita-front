<template>
  <a :href="to" rel="noreferrer noopener" target="_blank">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ExternalLink",
  props: {
    to: {
      required: true,
      type: String
    }
  }
});
</script>
