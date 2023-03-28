<template>
  <div
    dir="ltr"
    v-show="!deleteModal"
    class="px-5 fixed right-2 bottom-5 font-bold cursor-pointer"
  >
    <div
      class="modal rounded p-2 bg-white flex flex-col items-start"
      @click="showLanguages"
    >
      <div v-if="showLanguage" class="w-full">
        <div
          v-for="(language, index) in Languages"
          :key="index"
          @click="selectLanguage(language)"
          class="flex flex-row items-center my-4 w-full"
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
          <h2 class="mr-1">{{ SelctedLanguage.Name }}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-3 h-3 transition-all"
            :class="{ 'rotate-0': showLanguage, 'rotate-180': !showLanguage }"
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
import { setI18nLanguage, loadLocaleMessages } from "../i18n";
export default {
  data() {
    return {
      showLanguage: false,
      Languages: [
        { Name: "en", src: "/images/USA.png", id: "1" },
        { Name: "ar", src: "/images/Iraq.png", id: "2" },
        { Name: "kr", src: "/images/Kurd.png", id: "3" },
      ],
      SelctedLanguage: {},
      deleteModal: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    // window.addEventListener("scroll", (event) => {
    //   let scroll = window.top.pageYOffset;
    //   if (scroll > 550) {
    //     this.deleteModal = true;
    //   } else {
    //     this.deleteModal = false;
    //   }
    // });
    if (JSON.parse(localStorage.getItem("Language")) == null) {
      this.SelctedLanguage = {
        Name: "en",
        src: "/images/USA.png",
        id: "1",
      };
    } else {
      this.SelctedLanguage = JSON.parse(localStorage.getItem("Language"));
    }
    this.selectLanguage({ ...this.SelctedLanguage });
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    showLanguages() {
      this.showLanguage = !this.showLanguage;
      this.$emit("rotate");
    },
    selectLanguage(selected) {
      console.log(selected);
      this.SelctedLanguage = selected;
      setI18nLanguage({ global: this.$i18n }, this.SelctedLanguage.Name);
      loadLocaleMessages({ global: this.$i18n }, this.SelctedLanguage.Name);
      localStorage.setItem("Language", JSON.stringify(selected));
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
