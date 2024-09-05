<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const props = defineProps({
  bg: {
    type: String,
    default: '#F5F6F3'
  }
})

const show = ref<'solutions' | 'customers' | null>(null)
const isMenuOpen = ref(false)

const router = useRouter()

const toggleDropdown = (type: 'solutions' | 'customers') => {
  show.value = show.value === type ? null : type
}

const closeDropdowns = () => {
  show.value = null
}

const handleClickOutside = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest('.dropdown-container')) {
    closeDropdowns()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  router.afterEach(closeDropdowns)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const backgroundColor = computed(() => {
  return router.currentRoute.value.path === '/' ? props.bg : '#FFFFFF'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header :style="{ backgroundColor: backgroundColor }" class="shadow-sm">
    <nav class="flex items-center justify-between px-4 md:px-24 py-5 gap-10">
      <div class="flex items-center gap-4 md:gap-10 md:w-auto w-full">
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-xl md:text-2xl font-semibold text-primary"
        >
          <img src="/green-technology.png" alt="" class="w-6 h-6 md:w-7 md:h-7" />
          Ecola
        </RouterLink>
        <button @click="toggleMenu" class="md:hidden flex items-center w-full justify-end">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div class="hidden md:flex md:items-center md:gap-4 mr-auto">
        <div class="relative dropdown-container">
          <button
            @click="toggleDropdown('solutions')"
            class="flex items-center gap-1 text-sm md:text-base"
          >
            Solutions<i class="pi pi-angle-down"></i>
          </button>
          <div
            v-show="show === 'solutions'"
            class="absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
          >
            <RouterLink to="/solution1" class="block px-4 py-2 text-sm hover:bg-gray-200"
              >Solution 1</RouterLink
            >
            <RouterLink to="/solution2" class="block px-4 py-2 text-sm hover:bg-gray-200"
              >Solution 2</RouterLink
            >
          </div>
        </div>
        <div class="relative dropdown-container">
          <button
            @click="toggleDropdown('customers')"
            class="flex items-center gap-1 text-sm md:text-base"
          >
            Customers<i class="pi pi-angle-down"></i>
          </button>
          <div
            v-show="show === 'customers'"
            class="absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
          >
            <RouterLink to="/customer1" class="block px-4 py-2 text-sm hover:bg-gray-200"
              >Customer 1</RouterLink
            >
            <RouterLink to="/customer2" class="block px-4 py-2 text-sm hover:bg-gray-200"
              >Customer 2</RouterLink
            >
          </div>
        </div>
        <RouterLink to="/pricing" class="text-sm md:text-base">Pricing</RouterLink>
      </div>

      <div class="hidden md:flex md:items-center gap-4">
        <button
          class="bg-white shadow-lg text-primary py-2 px-4 md:py-2 md:px-6 rounded-lg text-sm md:text-base hover:bg-primary hover:text-white transition-colors"
        >
          Log In
        </button>
        <button
          class="bg-primary py-2 px-4 md:py-2 md:px-5 rounded-lg text-sm md:text-base shadow-lg text-secondary"
        >
          Start Now
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white shadow-lg md:hidden flex flex-col items-center pt-6 z-50"
    >
      <button @click="toggleMenu" class="absolute top-4 right-4 text-primary">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <RouterLink to="/" class="text-lg font-semibold text-primary my-2">Home</RouterLink>
      <RouterLink to="/solution1" class="text-lg text-primary my-2">Solution 1</RouterLink>
      <RouterLink to="/solution2" class="text-lg text-primary my-2">Solution 2</RouterLink>
      <RouterLink to="/customer1" class="text-lg text-primary my-2">Customer 1</RouterLink>
      <RouterLink to="/customer2" class="text-lg text-primary my-2">Customer 2</RouterLink>
      <RouterLink to="/pricing" class="text-lg text-primary my-2">Pricing</RouterLink>
      <div class="flex items-center gap-5 mt-6">
        <button
          class="bg-white shadow-lg text-primary py-2 px-4 rounded-lg text-base hover:bg-primary hover:text-white transition-colors"
        >
          Log In
        </button>
        <button class="bg-primary py-2 px-4 rounded-lg text-base shadow-lg text-secondary">
          Start Now
        </button>
      </div>
    </div>
  </header>
</template>
