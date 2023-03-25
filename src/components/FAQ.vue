<template>
  <div v-for="question in questions">
    <div
      class="text-left bg-slate-100 py-2 px-4"
      :class="{ 'bg-gray-200': question.show }"
    >
      <div class="flex flex-row" @click="closeAnswer(question)">
        <h3 class="mr-2 text-sky-800">Q.{{ question.question }}?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3 h-3 rotate-180"
          :class="{ 'rotate-0': question.show }"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p v-show="question.show" v-html="question.answers"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { question: "What is M.Therapy", answers: "TBD", show: true },
        {
          question: "How M.Therapy will help you",
          answers:
            "M.therapy can assist you by analyzing your mental health and recommending the appropriate counsellor to talk with.",
          show: false,
        },
        { question: "Is there in-person session", answers: "TBD", show: false },
        {
          question: "How can I prepare for first session",
          answers:
            "Begin by completing the <a class='text-sky-800'>questionnaire</a>, and we will contact you as soon as possible.",
          show: false,
        },
        { question: "Are my data save on M.therapy", answers: "TBD" },
        {
          question: "Can I use M.therapy for sever cases",
          answers:
            "M.therapy assists you by providing the finest mental health consultation; if you are having a serious situation, please call <a class='text-red-500 underline'>80025050</a>",
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

<style scoped>
p,
h3 {
  font-size: 10px;
}
</style>
