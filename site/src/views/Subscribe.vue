<template>
  <div class="subscribe">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="nome completo"
        clearable
        outlined
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="e-mail"
        clearable
        outlined
        required
      ></v-text-field>
    </v-form>
  </div>
</template>
<style scoped></style>
<script>
// @ is an alias to /src

export default {
  name: "Donate",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "nome completo é obrigatório",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "e-mail é obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>
