<template>
  <div id="app">
    <nav-bar />
    <div class="container">
      <error />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error,
  },
};
</script>
