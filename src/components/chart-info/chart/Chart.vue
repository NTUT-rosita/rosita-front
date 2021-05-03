<template>
  <div class="
    circle__container
    relative
    overflow-y-hidden
    flex
    justify-center
    items-center
  ">
    <div class="
      circle
      relative
      h-0
    ">
      <div class="
        circle__outer
        absolute
        top-0
        bottom-0
        right-0
        left-0
        m-auto
        h-full
        w-full
        bg-white
      ">
        <div ref="circleArea" class="
          circle__inner
          m-0
          relative
          h-full
          w-full
        ">
          <div class="
            circle__content
            absolute
            w-2/3
            h-2/3
          ">
            <canvas id="myChart" class="w-full h-full" width="0" :height="circleHeight"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, reactive, toRefs, nextTick } from 'vue'
import '@/assets/scss/components/chart-info/chart.scss'
import { createChart } from '@/charts'

export default defineComponent({
  name: 'Chart',
  setup () {
    const circleArea = ref<HTMLDivElement>({} as HTMLDivElement)

    const data = reactive({
      circleHeight: computed(() => circleArea.value.clientHeight / Math.sqrt(2)),
      circleWidth: computed(() => circleArea.value.clientWidth / Math.sqrt(2))
    })

    onMounted(async () => {
      const myChartCanvas = document.getElementById('myChart') as HTMLCanvasElement
      await nextTick()
      createChart(myChartCanvas)
    })

    return {
      circleArea,
      ...toRefs(data)
    }
  }
})
</script>
