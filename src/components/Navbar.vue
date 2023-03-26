<template>
  <div class="py-5 bg-white">
    <div class="flex flex-row justify-center items-center">
      <router-link to="/"
        ><img class="w-28" src="/images/Logo.png" alt=""
      /></router-link>

      <div class="px-6 absolute left-2">
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

<style></style>
