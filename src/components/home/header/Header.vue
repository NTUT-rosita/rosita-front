<template>
  <div class="header-container">
    <header id="header" class="header relative">
      <NavBar :hide-badge="true" class="absolute z-20"
              style="background-color: transparent;"/>
      <NavBar class="hidden fixed"/>
      <div class="header__bg bg-cover bg-center bg-no-repeat"/>
      <span class="absolute max-w-md w-3/4 sm:w-4/6 md:w-1/2 center">
        <LazyImg d-alt="NTUT-badge" d-src="/images/ntut-badge.webp" @imgLoaded="showSecondBadge"/>
        <SvgIcon id="second-badge" name="rosita-second-badge" class="second-badge pt-4 px-12 sm:px-14 md:px-20 opacity-0 relative max-w-full" viewBox="0 0 470.21 77.68" aria-hidden="true"/>
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, nextTick } from 'vue'
import '@/assets/scss/components/home/header.scss'
import NavBar from '@/components/app/Navbar/NavBar.vue'
import SvgIcon from '@/components/app/SvgIcon.vue'

export default defineComponent({
  name: 'Header',
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/app/LazyImg.vue')),
    NavBar,
    SvgIcon
  },
  setup () {
    const showSecondBadge = () => {
      const secondBadge = document.querySelector('#second-badge') as HTMLElement
      secondBadge.classList.remove('opacity-0')
      secondBadge.classList.add('show')
    }

    const useNavBarObserverService = () => {
      const navBar = document.querySelector('.nav-bar.fixed') as HTMLElement

      // prevent browser show the navbar before detect.
      navBar.classList.add('opacity-0')
      navBar.classList.remove('hidden')

      const header = document.getElementById('header') as HTMLElement
      const observer = new IntersectionObserver(
        async ([e]) => {
          // wait a while for better performance.
          await new Promise<void>(resolve => setTimeout(() => resolve(), 50))
          navBar.classList.toggle('opacity-0', e.intersectionRatio > 0)
        },
        {
          threshold: [...((): Array<number> => {
            const points = []
            let amount = 100 // the percentage of header's height
            while (amount >= 0) {
              points.push(amount-- / 100)
            }
            return points
          })()]
        }
      )
      observer.observe(header)
    }

    const setHeaderBackgroundImageHeight = () => {
      const headerBg = document.querySelector('.header__bg') as HTMLDivElement
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      headerBg.style.height = viewportHeight.toString() + 'px'
    }

    onMounted(async () => {
      setHeaderBackgroundImageHeight()
      await nextTick()
      useNavBarObserverService()
    })

    return {
      showSecondBadge
    }
  }
})
</script>
