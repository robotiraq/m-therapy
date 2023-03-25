<template>
  <div class="home bg-slate-100">
    <div class="mx-6">
      <div class="grid grid-cols-5 items-center pt-3">
        <div class="col-span-3">
          <div
            class="font-bold bg-gradient-to-r from-sky-800 to-red-400 inline-block text-transparent bg-clip-text"
          >
            <h1 class="">Accessible</h1>
            <h3 class="">Every Where, Any time.</h3>
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
            class="py-2 w-full bg-sky-900 text-white rounded mt-2 font-bold"
          >
            Let’s start
          </button>
        </div>
        <div class="col-span-2">
          <img src="../assets/Hero.png" alt="" />
        </div>
      </div>
      <h2
        class="font-bold uppercase mt-10 bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
      >
        How it works
      </h2>
      <div class="grid grid-cols-5 items-center my-2">
        <div class="text-left col-span-3">
          <h2
            class="uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            Get started
          </h2>
          <p class="">
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
            class="uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            Therapist match
          </h2>
          <p class="">
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
            class="uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            at your convenience
          </h2>
          <p class="">
            Feel cosy at your own place and have your session whenever you want.
          </p>
        </div>
        <div class="col-span-2">
          <img src="../assets/3.png" alt="" />
        </div>
      </div>
      <div
        class="flex flex-row py-3 my-10 bg-red-50 rounded border border-red-300 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mx-3 text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>

        <p class="text-left">
          If you are having crisis or suicidal thoughts we recommend you to call
          the governmental emergency number
          <span class="text-red-500 underline">80025050</span> for free.
        </p>
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

<style scoped>
p {
  font-size: 0.5rem;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.1rem;
}

h3 {
  font-size: 0.9rem;
}
button {
  font-size: 0.5rem;
}
</style>
