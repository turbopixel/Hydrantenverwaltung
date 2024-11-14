<template>
  <v-form @submit.prevent>
    <v-text-field v-model="adresse" :rules="adresseRules" label="Adresse"></v-text-field>

    <v-text-field v-model="bemerkung" :rules="bemerkungRules" label="Position"></v-text-field>

    <v-text-field v-model="durchmesser" :rules="durchmesserRules" label="Durchmesser"></v-text-field>

    <v-radio-group label="Typ" v-model="typ">
      <v-radio label="Unterflurhydrant" v-model="typ" value="unterflurhydrant"></v-radio>
      <v-radio label="Bohrbrunnen" value="brunnen"></v-radio>
    </v-radio-group>

    <v-btn class="mt-2" type="submit" block>Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    typ: 'unterflurhydrant',
    adresse: '',
    bemerkung: '',
    durchmesser: '80',
    adresseRules: [
      value => {
        if (value?.length >= 4) return true

        return 'Min 4 Zeichen notwendig!'
      },
    ],
    durchmesserRules: [
      value => {
        if (/[0-9]/.test(value)) return true

        return 'Last name can not contain digits.'
      },
    ],
  }),
};
</script>
