<template>
  <div class="container mx-auto grid grid-cols-1 xl:grid-cols-2">
    <div v-for="cardItem in cardItems" :key="`home-rectangle-card-${cardItem.title}`" class="my-8 card-item grid grid-cols-1 lg:grid-cols-2 bg-black border-4 dark:border-gray-200 text-white rounded-3xl mx-8">
        <div class="px-20">
          <h1 class="mt-20 mb-10 text-4xl">{{ cardItem.title }}</h1>
          <div>{{ cardItem.content }}</div>
        </div>
        <div class="border-white border-t-2 lg:border-0 lg:border-l-2 flex items-center justify-center">
          <div>img</div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RectangleCard',
  setup() {
    interface CardItem {
      title: string,
      content: string,
      href: string
    }

    const cardItems = ref<Array<CardItem>>([
      { title: "校務資訊，你所不知道的消息", content: "你可以在「校務資訊」取得你想要的訊息。", href: "" },
      { title: "研究", content: "待推出！", href: "" },
      { title: "各校比較資訊", content: "待推出！", href: "" },
      { title: "線上分析工具", content: "待推出！", href: "" }
    ])

    return {
      cardItems
    }
  }
})
</script>

<style lang="scss" scoped>
.card-item {
  min-height: 500px;
}
</style>
