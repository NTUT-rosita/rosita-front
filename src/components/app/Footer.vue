<template>
  <div class="bg-gray-100">
    <div class="mx-10 pt-4 pb-3 border-b-2 border-gray-300 flex flex-wrap overflow-hidden">
      <div
        v-for="(cardItem, index) in cardItems"
        :key="`cardItem-${index}`"
        class="my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4"
      >
        <div class="py-2 border-4 border-black rounded-3xl">
          {{ cardItem.title }}
        </div>
        <div class="test-container">
          <div
            class="mt-4 p-4 card-content border-4 border-black rounded-3xl"
            v-html="cardItem.content"
          ></div>
        </div>
      </div>

      <div
        class="my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center overflow-hidden"
      >
        <h5
          v-for="otherInfoItem in otherInfoItems"
          :key="otherInfoItem"
          class="my-2 text-gray-500"
        >
          <a class="border-b-2 hover:border-black" :href="otherInfoItem.href">{{ otherInfoItem.title }}</a>
        </h5>
        <div class="my-2">
          <a
            v-for="iconItem in iconItems"
            :key="iconItem"
            :href="iconItem.href"
          >
            <Icon
              class="mx-4 inline-block"
              :icon="iconItem.name"
              :type="iconItem.type"
              width="30"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="py-2 text-center text-gray-500">Copyright © 2021 NTUT Rosita</div>
  </div>

  <div id="testing">
    <Chart />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    interface CardItem {
      title: string;
      content: string;
      href: string;
    }

    interface OtherInfoItem {
      title: string;
      href: string;
    }

    interface IconItem {
      name: string;
      type: string;
      href: string;
    }

    const cardItems = ref<Array<CardItem>>([
      {
        title: "辦公時間",
        content:
          "<div class='my-auto'><h2 class='text-lg mb-2'>平日</h2>8:30 AM ~ 12:00 AM<br />13:30 PM ~ 17:00 PM</div>",
        href: "https://i.imgur.com/kcClJic.webp"
      },
      {
        title: "通訊地址",
        content: "<div>台北市大安區忠孝東路三段一號，台灣，地球</div>",
        href: "https://i.imgur.com/h0fR1wm.webp"
      },
      { title: "聯絡我們", content: "<div>None</div>", href: "https://i.imgur.com/2yEBf8o.webp" },
    ]);

    const otherInfoItems = ref<Array<OtherInfoItem>>([
      { title: "網站地圖", href: "#" },
      { title: "隱私權政策", href: "#" },
    ]);

    const iconItems = ref<Array<IconItem>>([
      { name: "instagram", type: "fab", href: "#" },
      { name: "facebook", type: "fab", href: "#" },
      { name: "github", type: "fab", href: "#" },
    ]);

    return {
      cardItems,
      otherInfoItems,
      iconItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-content {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0.1;
}

.test-container {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 100%;
}
</style>