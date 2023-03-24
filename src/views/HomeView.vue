<template>
  <div class="home">
    <div class="mx-6">
      <div class="grid grid-cols-5 items-center">
        <div class="text-center col-span-3">
          <div
            class="font-bold bg-gradient-to-r from-sky-800 to-red-400 inline-block text-transparent bg-clip-text"
          >
            <h1 class="text-4xl">Accessible</h1>
            <h2 class="text-base">Every Where, Any time.</h2>
          </div>
          <div class="flex flex-row justify-around text-xs mt-2">
            <div class="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p>Reliable</p>
            </div>
            <div class="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p>Scientific proven methods</p>
            </div>
          </div>
          <button
            class="py-3 w-full bg-sky-900 text-white text-xs rounded mt-2 font-bold"
          >
            Let’s start
          </button>
        </div>
        <div class="col-span-2">
          <img src="../assets/Hero.png" alt="" />
        </div>
      </div>
      <h2
        class="text-xl font-bold uppercase mt-10 bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
      >
        How it works
      </h2>
      <div class="grid grid-cols-5 items-center my-2">
        <div class="text-left col-span-3">
          <h2
            class="text-xl uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            Get started
          </h2>
          <p class="text-xs">
            Simply answer a few questions to help us understand your mental
            condition and provide you with the best consultation possible.
          </p>
        </div>
        <div class="col-span-2">
          <img src="../assets/1.png" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-5 items-center my-4">
        <div class="text-left col-span-3">
          <h2
            class="text-xl uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            Therapist match
          </h2>
          <p class="text-xs">
            We will contact you to provide you with information about your
            health and to recommend the ideal candidate for a consulting
            session.
          </p>
        </div>
        <div class="col-span-2 order-first">
          <img src="../assets/2.png" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-5 items-center my-4">
        <div class="text-left col-span-3">
          <h2
            class="truncate text-xl uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            at your convenience
          </h2>
          <p class="text-xs">
            Feel cosy at your own place and have your session whenever you want.
          </p>
        </div>
        <div class="col-span-2">
          <img src="../assets/3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
