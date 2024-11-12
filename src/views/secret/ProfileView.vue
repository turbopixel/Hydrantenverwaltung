<template>
  <div>
    <h1>Profil</h1>
    <div>
      <h3>{{ user.username }}</h3>
    </div>
    <button @click.prevent="logout">Log out</button>

    <!-- <pre><code>{{ user }}</code></pre> -->

    <table width="100%" border="1" cellspacing="0">
      <tr>
        <td>Konto ID</td>
        <td>{{ user.userId }}</td>
      </tr>
      <tr>
        <td>E-Mail</td>
        <td>{{ user.email }}</td>
      </tr>
      <tr>
        <td>Registriert am</td>
        <td>{{ user.createdAt }}</td>
      </tr>
      <tr>
        <td>E-Mail bestätigt</td>
        <td>{{ user.isEmailConfirmed ? "Ja" : "Ausstehend" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Userfront from "@userfront/toolkit/vue";

export default {
  computed: {
    user() {
      return Userfront.user;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: left;
}
pre {
  text-align: left;
}
</style>
