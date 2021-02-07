<template>
  <svg
      :class="$props.class"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="svgPath" fill="currentColor"/>
  </svg>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from "vue";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import {IconPrefix, IconName} from "@fortawesome/fontawesome-common-types"

export default defineComponent({
  name: "FontAwesomeIcon",
  props: {
    icon: {
      type: String as PropType<IconName>,
      required: true
    },
    type: {
      type: String as PropType<IconPrefix>,
      default: "fas",
      required: false
    },
    class: String
  },
  setup(props) {
    const definition = computed(() =>
        findIconDefinition({
          prefix: props.type,
          iconName: props.icon
        })
    );
    const width = computed(() => definition.value?.icon[0] ?? 0);
    const height = computed(() => definition.value?.icon[1] ?? 0);
    const svgPath = computed(() => definition.value?.icon[4] ?? '');
    return {width, height, svgPath};
  }
});
</script>
