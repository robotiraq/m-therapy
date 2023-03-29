<template>
  <div class="bg-gray-900 py-6 relative xl:static" style="z-index: 9999999">
    <div
      class="grid grid-cols-6 items-center place-items-center mx-4 text-white"
    >
      <div class="flex flex-col items-center col-span-3">
        <img class="w-10 sm:w-14" src="/images/Logo2.png" alt="" />
        <h1 class="text-base font-bold sm:text-2xl">M.Therapy</h1>
        <p class="text-[0.4rem] font-light sm:text-[0.6rem]" dir="ltr">
          {{ $t("footer.rights") }}
        </p>
      </div>
      <div
        class="flex flex-col text-left col-span-3 lg:flex-row lg:w-full lg:justify-evenly text-center"
      >
        <div class="mb-2 lg:mb-0">
          <h1 class="text-xs sm:text-xl">
            {{ $t("footer.contact") }}
          </h1>
          <p class="text-[0.4rem] sm:text-[0.6rem]">m.therapy2022@gmail.com</p>
          <p class="text-[0.4rem] sm:text-[0.6rem]" dir="ltr">0750 232 9793</p>
        </div>
        <div>
          <h1 class="text-xs sm:text-xl">
            {{ $t("footer.support") }}
          </h1>
          <p class="text-[0.4rem] sm:text-[0.6rem]">m.therapy2022@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
