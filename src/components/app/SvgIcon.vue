<template>
  <svg preserveAspectRatio="xMinYMid meet"
       aria-hidden="true">
    <use :xlink:href="symbolId"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const symbolId = `#icon-${props.name}`
    return { symbolId }
  }
})
</script>
