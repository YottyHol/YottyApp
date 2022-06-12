<template>
  <div class="">
    <menu-bar :model="items">
      <template #end>
        <img
          v-if="$auth.isAuthenticated"
          :src="$auth.user.picture"
          alt="User's profile picture"
          class="nav-user-profile rounded-full"
          width="50"
          referrerpolicy="no-referrer"
        />
      </template>
    </menu-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      username: "",
      items: [
        {
          label: "Login",
          icon: "pi pi-fw pi-user",
          command: () => this.login(),
          visible: () => !this.$auth.isAuthenticated && !this.$auth.loading,
        },
        {
          label: "User",
          icon: "pi pi-fw pi-user",
          visible: () => this.$auth.isAuthenticated,

          items: [
            {
              label: "Manage",
              url: "/profile",
              icon: "pi pi-fw pi-user-edit",
            },
          ],
        },
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
        {
          label: "About Me",
          icon: "pi pi-fw pi-calendar",
          visible: () => this.$auth.isAuthenticated,
          items: [
            {
              label: "CV",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus",
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
            {
              label: "Archive",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
          ],
        },
        {
          label: "Logout",
          icon: "pi pi-fw pi-power-off",
          command: () => this.logout(),
          visible: () => this.$auth.isAuthenticated,
        },
      ],
    };
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    this.username = this.$auth.user.name;
  },
};
</script>

<style>
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
</style>
