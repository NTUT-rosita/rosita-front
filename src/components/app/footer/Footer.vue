<template>
  <footer class="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 text-lg">
    <div class="mx-10 pt-4 pb-2 border-b-2 border-gray-300 flex flex-wrap">
      <div
        v-for="(cardContent, index) in cardContents"
        :key="`cardItem-${index}`"
        class="h-auto my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4 flex flex-col"
      >
        <div class="py-2 border-4 border-black dark:border-gray-100 rounded-3xl">
          {{ cardContent.title }}
        </div>
        <div class="mt-4 p-4 flex flex-auto justify-center items-center border-4 border-black dark:border-gray-200 rounded-3xl" v-html="cardContent.content">
        </div>
      </div>

      <div
        class="my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center overflow-hidden"
      >
        <h5
          v-for="legalLink in legalLinks"
          :key="legalLink"
          class="my-2 text-gray-500 dark:text-gray-200"
        >
          <a class="border-b-2 hover:border-black" :href="legalLink.url">{{ legalLink.title }}</a>
        </h5>
        <div class="my-2">
          <a
            v-for="communityMediaIcon in communityMediaIcons"
            :key="communityMediaIcon"
            :href="communityMediaIcon.url"
          >
            <Icon
              class="mx-4 inline-block"
              :icon="communityMediaIcon.name"
              :type="communityMediaIcon.type"
              width="30"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="py-2 text-center text-gray-500 dark:text-gray-200">Copyright © 2021 NTUT Rosita</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardContent, LegalLink, CommunityMediaIcon } from "./footer";

export default defineComponent({
  name: "Footer",
  props: {
    cardContents: {
      type: Array as PropType<Array<CardContent>>,
      required: true
    },
    legalLinks: {
      type: Array as PropType<Array<LegalLink>>,
      required: true
    },
    communityMediaIcons: {
      type: Array as PropType<Array<CommunityMediaIcon>>,
      required: true
    }
  }
});
</script>
