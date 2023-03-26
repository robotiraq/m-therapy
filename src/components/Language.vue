<template>
  <div
    v-show="!deleteModal"
    class="px-5 fixed right-2 bottom-5 font-bold"
    @click="showLanguages"
  >
    <div class="modal rounded p-2 bg-white flex flex-col items-start">
      <div v-if="showLanguage">
        <div
          v-for="(language, index) in Languages"
          :key="index"
          @click="selectLanguage(language)"
          class="flex flex-row items-center my-4"
        >
          <img class="h-4 mr-2" :src="language.src" alt="" />
          <div class="flex flex-row items-center">
            <h2>{{ language.Name }}</h2>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <img class="h-4 mr-2" :src="SelctedLanguage.src" alt="" />
        <div class="flex flex-row items-center">
          <h2>{{ SelctedLanguage.Name }}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-3 h-3 rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLanguage: false,
      Languages: [
        { Name: 'EN', src: '/images/USA.png', id: '1' },
        { Name: 'AR', src: '/images/Iraq.png', id: '2' },
        { Name: 'KR', src: '/images/Kurd.png', id: '3' },
      ],
      SelctedLanguage: {},
      deleteModal: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

    // window.addEventListener("scroll", (event) => {
    //   let scroll = window.top.pageYOffset;
    //   if (scroll > 550) {
    //     this.deleteModal = true;
    //   } else {
    //     this.deleteModal = false;
    //   }
    // });
    if (JSON.parse(localStorage.getItem('Language')) == null) {
      this.SelctedLanguage = {
        Name: 'EN',
        src: '/images/USA.png',
        id: '1',
      };
    } else this.SelctedLanguage = JSON.parse(localStorage.getItem('Language'));
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    showLanguages() {
      this.showLanguage = !this.showLanguage;
    },
    selectLanguage(selected) {
      this.SelctedLanguage = selected;
      localStorage.setItem('Language', JSON.stringify(selected));
      console.log(this.SelctedLanguage);
    },
    handleScroll() {
      const distanceFromEnd = 60;
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - distanceFromEnd;
      if (bottomOfWindow) {
        this.deleteModal = true;
      } else {
        this.deleteModal = false;
      }
    },
  },
};
</script>

<style scoped>
.modal h2 {
  font-size: 0.9rem;
}
</style>
