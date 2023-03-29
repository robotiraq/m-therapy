<template>
  <div class="py-5 max-w-[1920px] lg:m-auto bg-white">
    <div
      class="flex flex-row justify-center items-center md:justify-between md:px-6"
    >
      <router-link to="/"
        ><img class="w-32 md:w-36" src="/images/Logo.png" alt=""
      /></router-link>

      <div class="hidden md:flex md:flex-row lg:text-lg xl:text-2xl">
        <router-link
          class="mr-4 xl:mr-8 rtl:ml-4"
          :class="{
            'border-b-2 border-blue-500 border-opacity-70 ':
              $route.name == 'home',
          }"
          to="/"
          ><h2 @click.self="closeModal">
            {{ $t("sections.home") }}
          </h2></router-link
        >

        <router-link
          class="mr-4 xl:mr-8 rtl:ml-4"
          :class="{
            'border-b-2 border-blue-500 border-opacity-70':
              $route.name == 'therapist',
          }"
          to="/therapist"
          ><h2 @click.self="closeModal">
            {{ $t("sections.therapist") }}
          </h2></router-link
        >
        <router-link
          class="mr-4 xl:mr-8 rtl:ml-4"
          :class="{
            'border-b-2 border-blue-500 border-opacity-70':
              $route.name == 'about',
          }"
          to="/about"
          ><h2 @click.self="closeModal">
            {{ $t("sections.about") }}
          </h2></router-link
        >
        <router-link
          to="/plans"
          class="mr-4 xl:mr-8 rtl:ml-4"
          :class="{
            'border-b-2 border-blue-500 border-opacity-70':
              $route.name == 'plans',
          }"
          ><h2 @click.self="closeModal">
            {{ $t("sections.plans") }}
          </h2></router-link
        >
      </div>
      <div class="px-6 absolute left-2 md:hidden">
        <svg
          @click="toggleModal"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <a
        href="https://docs.google.com/forms/d/1ELuxtD_j-AWxS_NfjayKb7lErFgvjzknvTnlboCQbuA/viewform?fbclid=IwAR0hLg1F_1JFRZMYXh2xnou63t04MRuY8RC_brNlLHcU4ovfQsn8couJOOM&edit_requested=true"
        target="_blank"
      >
        <button
          class="hidden py-2 px-3 text-xs lg:text-lg bg-sky-900 text-white rounded md:block"
        >
          {{ $t("titles.lets") }}
        </button>
      </a>
    </div>
  </div>
  <div v-show="showModal">
    <Modal @close="toggleModal" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 0.5rem;
}
h1 {
  font-size: 2rem;
}

h3 {
  font-size: 0.9rem;
}
</style>
