<template>
  <div>
    <h1>Mein Profil</h1>

    <!-- <pre><code>{{ user }}</code></pre> -->

    <v-table theme="dark">
      <tbody>
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
      </tbody>
    </v-table>
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