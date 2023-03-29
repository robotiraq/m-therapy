<template>
  <div class="home bg-slate-100 py-3">
    <div class="mx-6 md:mx-12">
      <div class="grid grid-cols-5 items-center pt-3">
        <div class="col-span-3 flex flex-col items-center">
          <div class="">
            <div
              class="font-bold bg-gradient-to-r from-sky-800 to-red-400 inline-block text-transparent bg-clip-text"
            >
              <h1 class="text-3xl sm:text-5xl lg:text-6xl">
                {{ $t("titles.accessible") }}
              </h1>
              <h3 class="text-sm sm:text-xl lg:text-2xl">
                {{ $t("titles.everywhere") }}
              </h3>
            </div>
            <div
              class="flex flex-col justify-around small-font mt-2 text-left text-[0.7rem] sm:text-lg sm:flex-row"
            >
              <div class="flex flex-row items-center sm:mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 sm:w-6 sm:h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {{ $t("titles.reliable") }}
              </div>
              <div class="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 sm:w-6 sm:h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {{ $t("titles.scientific") }}
              </div>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/1ELuxtD_j-AWxS_NfjayKb7lErFgvjzknvTnlboCQbuA/viewform?fbclid=IwAR0hLg1F_1JFRZMYXh2xnou63t04MRuY8RC_brNlLHcU4ovfQsn8couJOOM&edit_requested=true"
            target="_blank"
          >
            <button
              class="py-2 lg:px-8 px-4 bg-sky-900 text-white rounded mt-2 text-xs sm:text-base"
            >
              {{ $t("titles.lets") }}
            </button>
          </a>
        </div>
        <div class="col-span-2 max-w-xs md:w-56 lg:w-72">
          <img src="/images/Hero.png" alt="" />
        </div>
      </div>
      <h2
        class="sm:text-2xl lg:text-3xl font-bold uppercase mt-10 bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
      >
        {{ $t("titles.how-to") }}
      </h2>
      <div class="grid grid-cols-5 items-center my-2 place-items-center">
        <div class="text-left rtl:text-right md:text-center col-span-3 w-full">
          <h2
            class="sm:text-xl lg:text-2xl text-sm uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            {{ $t("titles.get-started") }}
          </h2>
          <p class="text-xs sm:text-sm lg:text-lg">
            {{ $t("titles.get-started-p") }}
          </p>
        </div>
        <div class="col-span-2 max-w-xs md:w-36 lg:w-48">
          <img src="/images/1.png" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-5 items-center my-2 place-items-center">
        <div class="text-left rtl:text-right md:text-center col-span-3 w-full">
          <h2
            class="sm:text-xl lg:text-2xl text-sm uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            {{ $t("titles.therapist-match") }}
          </h2>
          <p class="text-xs sm:text-sm lg:text-lg">
            {{ $t("titles.therapist-match-p") }}
          </p>
        </div>
        <div class="col-span-2 order-first max-w-xs md:w-36 lg:w-56">
          <img src="/images/2.png" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-5 items-center my-2 place-items-center">
        <div class="text-left rtl:text-right md:text-center col-span-3 w-full">
          <h2
            class="sm:text-xl lg:text-2xl text-sm uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
          >
            {{ $t("titles.at-your-convenience") }}
          </h2>
          <p class="text-xs sm:text-sm lg:text-lg">
            {{ $t("titles.at-your-convenience-p") }}
          </p>
        </div>
        <div class="col-span-2 max-w-xs md:w-44 lg:w-60">
          <img src="/images/3.png" alt="" />
        </div>
      </div>
      <div
        class="flex flex-row py-2 px-2 bg-red-50 rounded border border-red-300 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 sm:w-10 sm:h-10 mx-2 text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p
          class="text-left rtl:text-right text-[0.6rem] sm:text-[0.7rem] lg:text-sm"
        >
          {{ $t("titles.attention") }}
          <span class="text-red-500 underline">80025050</span>
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
