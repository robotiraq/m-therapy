<template>
  <div class="bg-slate-100">
    <div class="max-w-[1920px] lg:m-auto">
      <div class="home bg-slate-100">
        <div class="mx-6">
          <div class="grid grid-cols-5 items-center pt-3">
            <div class="col-span-3 justify-self-start w-full">
              <div
                class="font-bold bg-gradient-to-r from-sky-800 to-red-400 inline-block text-transparent bg-clip-text sm:text-5xl text-2xl"
              >
                <h1 class="text-left table-caption py-10 rtl:text-right">
                  {{ $t("therapist.experienced") }}
                </h1>
              </div>
            </div>
            <div class="col-span-2 lg:w-60">
              <img src="/images/therapist.png" alt="" />
            </div>
          </div>
          <div class="text-center pt-12">
            <h2
              class="uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent sm:text-2xl"
            >
              {{ $t("therapist.meet") }}
            </h2>
            <p class="text-xs sm:text-base">
              {{ $t("therapist.meet-p") }}
            </p>
          </div>
          <div class="lg:grid lg:grid-cols-3 py-2 pb-5">
            <div
              v-for="therapist in Therapists"
              class="bg-slate-200 rounded lg:rounded-none"
            >
              <div
                class="flex flex-row lg:flex-col items-center my-4 py-2 p-4 lg:mx-2"
              >
                <img class="w-16 lg:w-32" :src="therapist.src" alt="" />
                <div
                  class="flex flex-col text-left rtl:text-right rtl:lg:text-center mx-3 lg:text-center"
                >
                  <h2 class="font-bold sm:text-xl">{{ $t(therapist.name) }}</h2>
                  <p class="text-xs sm:text-base">{{ $t(therapist.degree) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Therapists: [
        {
          name: "therapist.name-karzan",
          degree: "therapist.degree-karzan",
          src: "/images/Karzan.png",
          id: "1",
        },
        {
          name: "therapist.name-yasser",
          degree: "therapist.degree-yasser",
          src: "/images/Yasser.png",
          id: "2",
        },
        {
          name: "therapist.name-sarwar",
          degree: "therapist.degree-sarwar",
          src: "/images/Sarwar.png",
          id: "3",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
