<template>
  <div class="backdrop px-5" @click.self="closeModal">
    <div class="modal p-5 mt-20 bg-white flex flex-col items-start">
      <div @click="closeModal" class="self-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 text-red-400"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p>{{ header }}</p>
      <a
        href="https://docs.google.com/forms/d/1ELuxtD_j-AWxS_NfjayKb7lErFgvjzknvTnlboCQbuA/viewform?fbclid=IwAR0hLg1F_1JFRZMYXh2xnou63t04MRuY8RC_brNlLHcU4ovfQsn8couJOOM&edit_requested=true"
      >
        <h2>{{ $t("titles.lets") }}</h2>
      </a>
      <router-link to="/"
        ><h2
          @click.self="closeModal"
          :class="{
            'font-bold': $route.name == 'home',
          }"
        >
          {{ $t("sections.home") }}
        </h2></router-link
      >

      <router-link to="/therapist"
        ><h2
          @click.self="closeModal"
          :class="{
            'font-bold': $route.name == 'therapist',
          }"
        >
          {{ $t("sections.therapist") }}
        </h2></router-link
      >
      <router-link to="/about"
        ><h2
          @click.self="closeModal"
          :class="{
            'font-bold': $route.name == 'about',
          }"
        >
          {{ $t("sections.about") }}
        </h2></router-link
      >
      <router-link to="/plans"
        ><h2
          @click.self="closeModal"
          :class="{
            'font-bold': $route.name == 'plans',
          }"
        >
          {{ $t("sections.plans") }}
        </h2></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["header"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  border-radius: 5px;
}
.modal h2 {
  font-size: 1.5rem;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>
