<template>
<div></div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>

</style>
