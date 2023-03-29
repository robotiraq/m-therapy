<template>
  <div class="home bg-slate-100">
    <div class="mx-6 h-screen">
      <div class="text-center py-4">
        <h2
          class="font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent text-xl md:text-3xl"
        >
          {{ $t("about-us.made") }}
        </h2>

        <p class="text-sm md:text-xl">
          {{ $t("about-us.made-p2") }}
        </p>
      </div>
      <h2
        class="font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent text-xl md:text-3xl mb-2"
      >
        {{ $t("plans.plans") }}
      </h2>
      <div
        class="grid grid-rows-2 gap-3 lg:gap- px-12 lg:px-24 mx-2 text-center md:grid-cols-2 md:grid-rows-none pb-4"
      >
        <div
          class="uppercase px-3 flex flex-col items-center justify-around bg-sky-900 text-white rounded h-56 md:h-96 lg:h-[600px]"
        >
          <div class="flex flex-row items-center text-xs lg:text-lg">
            <h2 class="mr-2 font-bold">{{ $t("plans.one") }}</h2>
            <h3 class="font-light">{{ $t("plans.session") }}</h3>
          </div>
          <div class="font-bold text-lg lg:text-3xl">
            <h2>20,000 {{ $t("plans.iqd") }}</h2>
          </div>
          <p class="text-xs lg:text-lg">{{ $t("plans.plan-1") }}</p>
        </div>
        <div
          class="uppercase px-3 flex flex-col items-center justify-around bg-lime-900 text-white rounded"
        >
          <div class="flex flex-row items-center text-xs lg:text-lg">
            <h2 class="mr-2 font-bold">{{ $t("plans.five") }}</h2>
            <h3 class="font-light">{{ $t("plans.session") }}</h3>
          </div>
          <div class="font-bold text-lg lg:text-3xl">
            <h2>80,000 {{ $t("plans.iqd") }}</h2>
          </div>
          <p class="text-xs lg:text-lg">{{ $t("plans.plan-2") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
