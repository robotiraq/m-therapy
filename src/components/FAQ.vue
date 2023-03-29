<template>
  <div class="bg-slate-100 pb-4">
    <h2
      class="capitalize font-bold bg-gradient-to-r bg-clip-text from-sky-800 to-red-400 inline-block text-transparent text-lg mt-8 md:text-2xl"
    >
      {{ $t("faq.faq") }}
    </h2>
  </div>
  <div v-for="(question, index) in questions" :key="index">
    <div
      class="text-left py-2 px-4 cursor-pointer"
      :class="{ 'bg-gray-200': question.show, 'bg-slate-100': !question.show }"
    >
      <div
        class="flex flex-row text-base items-center"
        @click="closeAnswer(question)"
      >
        <h3 class="mr-2 text-sky-800 capitalize">
          {{ $t("faq.q") }}.{{ $t(question.question) }} {{ $t("faq.mark") }}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4 transition-all"
          :class="{ 'rotate-180': question.show, 'rotate-0': !question.show }"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p
        class="rtl:text-right text-sm capitalize"
        v-show="question.show"
        v-html="$t(question.answers)"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { question: "faq.q1", answers: "faq.a1", show: true },
        {
          question: "faq.q2",
          answers: "faq.a2",
          show: false,
        },
        { question: "faq.q3", answers: "faq.a3", show: false },
        {
          question: "faq.q4",
          answers: "faq.a4",
          show: false,
        },
        { question: "faq.q5", answers: "faq.a5" },
        {
          question: "faq.q6",
          answers: "faq.a6",
          show: false,
        },
      ],
    };
  },
  methods: {
    closeAnswer(question) {
      question.show = !question.show;
    },
  },
};
</script>
