<template>
  <div class="blight" style="width: 85%; display: flex; margin: 0 auto;">
    <v-card
      style="border-radius:50%;"
      class="px-8 py-5"
      color="byellow"
      height="400px"
      width="400px"
    >
      <v-container fill-height fluid>
        <v-card-actions
          style="margin: 0 auto;"
          class="justify-center align-center"
        >
          <v-img src="@/assets/bekknum.png" max-width="300px" />
        </v-card-actions>
      </v-container>
    </v-card>
    <v-spacer></v-spacer>
    <div class="bar secondary"></div>
    <v-spacer></v-spacer>
    <div class="px-8 py-5" style="width: 48%;">
      <h1 class="primary--text mb-5">entre em contato</h1>

      <h2 class="mt-2">
        <img style="height:24px" src="@/assets/email.svg" />
        <a href="mailto:projetobekknum@gmail.com">projetobekknum@gmail.com</a>
      </h2>
      <h2 class="mt-2">
        <img style="height:24px" src="@/assets/image.svg" />
        <a href="https://www.facebook.com/Bekknum">facebook.com/Bekknum</a>
      </h2>
      <h2 class="mt-2">
        <img style="height:24px" src="@/assets/camera.svg" />
        <a href="https://www.instagram.com/projetobekknum/">
          instagram.com/projetobekknum
        </a>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.bar {
  height: 20vw;
  width: 0.5vw;
  border-radius: 4px;
}
.title {
  width: 30%;
}
h1 {
  font-size: 3vw;
  line-height: 3vw;
}
</style>
