<template>
  <Language></Language>

  <Navbar></Navbar>

  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Language from "./components/Language.vue";

export default {
  name: "App",
  components: { Navbar, Footer, Language },
};
</script>

<style>
#app {
  font-family: "Be Vietnam Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
