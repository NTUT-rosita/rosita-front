<template>
  <div class="bg-gray-10te0 dark:bg-gray-800 dark:text-gray-200">
    <div class="mx-10 pt-4 pb-2 border-b-2 border-gray-300 flex flex-wrap overflow-hidden">
      <div
        v-for="(cardContent, index) in cardContents"
        :key="`cardItem-${index}`"
        class="my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4"
      >
        <div class="py-2 border-4 border-black dark:border-gray-100 rounded-3xl">
          {{ cardContent.title }}
        </div>
        <div class="card-content-container h-auto mt-4 p-4 card-content border-4 border-black dark:border-gray-200 rounded-3xl" v-html="cardContent.content">
        </div>
      </div>

      <div
        class="my-4 px-4 text-center w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center overflow-hidden"
      >
        <h5
          v-for="legelLink in legelLinks"
          :key="legelLink"
          class="my-2 text-gray-500 dark:text-gray-200"
        >
          <a class="border-b-2 hover:border-black" :href="legelLink.url">{{ legelLink.title }}</a>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardContent, LegelLink, CommunityMediaIcon } from "./footer";

export default defineComponent({
  name: "Footer",
  props: {
    cardContents: {
      type: Array as PropType<Array<CardContent>>,
      required: true
    },
    legelLinks: {
      type: Array as PropType<Array<LegelLink>>,
      required: true
    },
    communityMediaIcons: {
      type: Array as PropType<Array<CommunityMediaIcon>>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.card-content-container {
    display: inline-block;
    height: fit-content;
    position: relative;
    width: 100%;
}

.card-content {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>