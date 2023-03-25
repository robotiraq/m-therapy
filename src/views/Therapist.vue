<template>
  <div class="home bg-slate-100">
    <div class="mx-6">
      <div class="grid grid-cols-5 items-center pt-3">
        <div class="col-span-3 justify-self-start">
          <div
            class="font-bold bg-gradient-to-r from-sky-800 to-red-400 inline-block text-transparent bg-clip-text"
          >
            <h1 class="text-left table-caption">
              Experienced Certified Reliable
            </h1>
          </div>
        </div>
        <div class="col-span-2">
          <img src="../assets/therapist.png" alt="" />
        </div>
      </div>
      <div class="text-center py-4">
        <h2
          class="uppercase font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
        >
          Meet Our Talented Therapist
        </h2>
        <p class="">
          Our therapists are selected based on their effectiveness, and they are
          all certified and highly qualified.
        </p>
      </div>
      <div v-for="therapist in Therapists">
        <div
          class="flex flex-row w-full items-center bg-slate-200 my-4 py-2 p-4 rounded border"
        >
          <img class="w-16" :src="therapist.src" alt="" />
          <div class="flex flex-col text-left ml-3">
            <h2 class="font-bold">{{ therapist.name }}</h2>
            <p>{{ therapist.degree }}</p>
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
          name: "Karzan Jasim Mohammed",
          degree: "M.S. in Psychotherapy and psychotraumatology",
          src: require("@/assets/Karzan.png"),
          id: "1",
        },
        {
          name: "Yasser Saeed Obaid",
          degree: "B.S. in psychology",
          src: require("@/assets/Yasser.png"),
          id: "2",
        },
        {
          name: "Sarwar A. Muhammed",
          degree: "M.S. in psychotherapy",
          src: require("@/assets/Sarwar.png"),
          id: "3",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
}
p {
  font-size: 10px;
}
</style>
