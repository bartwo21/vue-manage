<script lang="ts" setup>
import Avatar from 'primevue/avatar'
</script>

<template>
  <div class="relative md:py-20 py-10 px-4 md:px-10">
    <div class="absolute inset-0 bg-[#F5F6F3] bg-grid-pattern"></div>
    <div class="absolute inset-0 bg-radial-gradient"></div>
    <div class="absolute inset-x-0 top-0 h-2 bg-[#F5F6F3] z-10"></div>
    <div class="relative flex flex-col items-center justify-center md:gap-10 gap-7 z-20">
      <button class="text-xs bg-white text-primary font-bold p-3 rounded-2xl z-30">
        <i class="pi pi-bolt"></i>
        CREATE FOR FAST
      </button>
      <h1 class="text-4xl md:text-6xl text-primary font-bold text-center tracking-wide z-30">
        One tool to
        <span class="inline-block underline decoration-secondary"> manage </span>
        <br />
        contracts and agreements
      </h1>
      <p class="text-center text-gray-600 z-30 text-sm md:text-base">
        Ecola helps legal teams to manage contracts and agreements in one place. <br />It's a simple
        and easy-to-use tool for everyone.
      </p>
      <div class="flex md:flex-row items-center gap-5 z-30">
        <button class="bg-primary py-4 px-5 rounded-lg text-sm text-secondary mb-12 md:mb-0">
          Start for Free
        </button>
        <button
          class="bg-white text-primary py-4 px-6 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
        >
          Get a Demo
        </button>
      </div>
      <div class="z-30 flex flex-col md:flex-row items-center gap-16 md:mt-8 mt-0 text-center">
        <p class="text-primary font-bold">
          More than 100+ <br />
          companies partner
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <img src="/Dropbox.png" class="w-32 opacity-40" />
          <img src="/Dropbox.png" class="w-32 opacity-40" />
          <img src="/Dropbox.png" class="w-32 opacity-40" />
          <img src="/Dropbox.png" class="w-32 opacity-40" />
        </div>
      </div>

      <div class="absolute inset-0 z-20 hidden md:block">
        <div class="absolute top-10 left-40">
          <i
            class="pi pi-play border-8 border-white text-black absolute left-20 -bottom-6 rotate-45"
          ></i>
          <Avatar
            image="/avatar1.jpg"
            class="max-w-20 border-8 border-white"
            size="xlarge"
            shape="circle"
          />
        </div>
        <div class="absolute bottom-0 left-72">
          <i
            class="pi pi-play border-8 border-white text-black absolute left-20 -top-6 -rotate-45"
          ></i>
          <Avatar
            image="/avatar2.jpg"
            class="max-w-20 border-8 border-white"
            size="xlarge"
            shape="circle"
          />
        </div>
        <div class="absolute bottom-10 right-80">
          <i
            class="pi pi-play border-8 border-white text-black absolute right-20 -top-3 rotate-[215deg]"
          ></i>
          <Avatar
            image="/avatar3.jpg"
            class="max-w-20 border-8 border-white"
            size="xlarge"
            shape="circle"
          />
        </div>
        <div class="absolute top-0 right-52">
          <i
            class="pi pi-play border-8 border-white text-black absolute right-16 -bottom-6 rotate-[135deg]"
          ></i>
          <Avatar
            image="/avatar4.jpg"
            class="max-w-20 border-8 border-white"
            size="xlarge"
            shape="circle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(226, 232, 240, 0.5) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 2px, transparent 2px);
  background-size: 90px 90px;
}

.bg-radial-gradient {
  background: radial-gradient(circle, rgba(245, 246, 243, 0) 30%, #f5f6f3 100%);
}
</style>
