<template>
  <img ref="img" :alt="dAlt" :d-alt="dAlt" :data-src="dSrc" :src="defaultImgUrl" class="lozad mask">
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watchEffect} from 'vue';
import lozad from 'lozad'

export default defineComponent({
  name: 'LazyImg',
  props: {
    dSrc: {
      type: String,
      required: true,
      default: ''
    },
    dAlt: {
      type: String,
      required: false,
      default: ''
    },
    forceLoad: {
      type: Boolean,
      default: false,
      required: false
    },
    needDefaultImg: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(props, {emit}) {
    const observer = lozad(
        '.lozad', {
          loaded: async (element: HTMLImageElement) => {
            await new Promise(resolve => {
              element.onload = resolve
            })
            element.classList.add('mask__completed')
            await new Promise<void>(resolve => setTimeout(() => resolve(), 300))
            emit('img-loaded')
          }
        }
    )
    const defaultImgUrl = (props.needDefaultImg && ref<string>('data:image/png;base64,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') || '')
    const img = ref<HTMLImageElement>({} as HTMLImageElement)
    onMounted(() => {
      observer.observe()
      forceLoadService()
    })
    const forceLoadService = () => {
      watchEffect(async () => {
        if (props['forceLoad']) {
          observer.triggerLoad(img.value)
        }
      })
    }
    return {
      defaultImgUrl,
      img
    }
  }
});
</script>

<style lang="scss" scoped>
.mask {
  opacity: 0;
  transition: 1s ease;

  &__completed {
    opacity: 1;
  }
}
</style>
