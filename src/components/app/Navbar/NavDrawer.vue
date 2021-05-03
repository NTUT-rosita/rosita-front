<template>
  <div ref="drawerContainer"
       :class="{
          ...(['absolute', 'right-0', 'inline-block', 'align-middle', 'm-auto']
            .reduce((a, v) => ({...a, [v]: hideBadge}), {})),
       }"
       class="drawer align-baseline my-auto sm:hidden flex justify-center overflow-hidden"
       role="navigation">
    <a ref="drawerToggle" aria-controls="menu"
       aria-expanded="false"
       class="drawer__toggle
       text-black dark:text-white
       inline-block relative p-0 border-0 bg-transparent outline-none cursor-pointer rounded-full"
       :class="{
          ...(['hover:bg-gray-200', 'focus:bg-gray-200',]
            .reduce((a, v) => ({...a, [v]: !hideBadge}), {})),
          ...(['dark:hover:bg-gray-900', 'dark:focus:bg-gray-900']
            .reduce((a, v) => ({...a, [v]: isMenuOpen || !hideBadge}), {})),
       }"
       rel="noreferrer noopener" role="button" @click.prevent.stop="toggleNavigationDrawer">
      <svg
          :class="{'text-black':hideBadge && !isMenuOpen}"
          class="menu-icon fill-current block cursor-pointer rotate-0"
          height="50" viewBox="0 0 50 50" width="50"
          xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="16.5" y2="16.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="32.5" y2="32.5"/>
          <circle class="menu-icon__circle stroke-current" cx="25" cy="25" r="23"/>
        </g>
        _
      </svg>
    </a>
    <ul ref="drawerMenu"
        class="drawer__menu p-0 fixed flex flex-col justify-start z-20 h-auto right-0 top-32 invisible m-0 list-none"
        hidden tabindex="-1">
      <li class="drawer__item opacity-0">
        <NavDrawerItem v-for="(navItem, key) in navItems" :key="key"
                       :external="navItem.external"
                       :link="navItem.link"
                       :name="navItem.name"/>
      </li>
    </ul>
    <div class="splash fixed right-0 top-0 h-px w-0">
      <div class="drawer__base bg-white dark:bg-gray-800 block fixed w-0 top-0 h-0 right-0">
        <div class="logo top-16 relative inline-block mx-4 max-w-prose">
          <SecondBadge class="fill-current"/>
        </div>
      </div>
    </div>
  </div>
  <div v-show="isMenuOpen" ref="drawerBottomLayer" class="bottom-layer fixed top-0 left-0 invisible"
       @click.prevent.stop="toggleBottomLayer"/>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import '@/assets/scss/components/app/nav-drawer.scss'
import { navItems } from '@/components/app/Navbar/navbar'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import SecondBadge from '@/components/app/SecondBadge.vue'
import NavDrawerItem from '@/components/app/Navbar/NavDrawerItem.vue'

export default defineComponent({
  name: 'NavDrawer',
  components: {
    SecondBadge,
    NavDrawerItem
  },
  props: {
    hideBadge: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup () {
    const drawerContainer = ref<HTMLDivElement>({} as HTMLDivElement)
    const drawerMenu = ref<HTMLUListElement>({} as HTMLUListElement)
    const drawerToggle = ref<HTMLLinkElement>({} as HTMLLinkElement)
    const drawerBottomLayer = ref<HTMLDivElement>({} as HTMLDivElement)

    const isMenuOpen = ref(false)

    const openDrawer = async () => {
      isMenuOpen.value = true
      await nextTick()
      await new Promise<void>(resolve => setTimeout(() => resolve(), 10))
      drawerToggle.value.setAttribute('aria-expanded', 'true')
      drawerMenu.value.hidden = false
      drawerContainer.value.classList.add('drawer--open')
      drawerBottomLayer.value.classList.add('bottom-layer--open')
      disableBodyScroll(drawerBottomLayer.value)
    }

    const closeDrawer = async () => {
      drawerToggle.value.setAttribute('aria-expanded', 'false')
      drawerMenu.value.hidden = true
      drawerContainer.value.classList.remove('drawer--open')
      drawerBottomLayer.value.classList.remove('bottom-layer--open')
      enableBodyScroll(drawerBottomLayer.value)
      await new Promise<void>(resolve => setTimeout(() => resolve(), 1000))
      isMenuOpen.value = false
    }

    const toggleNavigationDrawer = async () => {
      if (isMenuOpen.value) {
        await closeDrawer()
      } else {
        await openDrawer()
      }
    }

    const toggleBottomLayer = async () => {
      await closeDrawer()
    }

    return {
      navItems,
      drawerContainer,
      drawerMenu,
      drawerToggle,
      drawerBottomLayer,
      toggleNavigationDrawer,
      toggleBottomLayer,
      isMenuOpen
    }
  }
})
</script>
