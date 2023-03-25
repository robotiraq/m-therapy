<template>
  <div class="home bg-slate-100">
    <div class="mx-6">
      <div class="text-center py-4">
        <h2
          class="font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
        >
          Made with love
        </h2>
        <p class="font-bold">
          Our mission is to bring everyone's mental health to its peak.
        </p>
        <p class="">
          We've committed to making our services comfortable for you. So let us
          work together to make your life better.
        </p>
      </div>
      <h2
        class="font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent"
      >
        Why M.therapy!
      </h2>
      <div class="flex flex-col justify-center items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-16 h-16 text-green-500"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class="font-bold">Licensed therapist</h2>
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-16 h-16 text-pink-600"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clip-rule="evenodd"
          />
        </svg>

        <h2 class="font-bold">Anywhere, Anytime</h2>
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-12 h-12"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clip-rule="evenodd"
          />
        </svg>

        <h2 class="font-bold">Support</h2>
      </div>
    </div>
  </div>
  <FAQ></FAQ>
</template>

<script>
import FAQ from "../components/FAQ.vue";
export default {
  components: { FAQ },
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
