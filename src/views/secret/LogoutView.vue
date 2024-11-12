<template>
    <button
    id="logout-button"
    @click.prevent="handleLogout"
    :disabled="isLoggedOut"
  >
    Log out
  </button>
</template>


<script>
// Initialize Userfront
Userfront.init("demo1234");

export default {
  methods: {
    // Log out with Userfront.logout()
    handleLogout() {
      Userfront.logout();
    }
  },
  computed: {
    // User is logged out if they don't have an access token
    isLoggedOut() {
      return !Userfront.accessToken();
    }
  }
};
</script>

<style scoped>
#logout-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}

#logout-button[disabled] {
  background-color: lightgray;
  color: gray;
}
</style>
