<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <a href="/home">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="./assets/logo.png"
            width="150"
          />
        </a>
      </div>

      <v-spacer></v-spacer>

      <v-menu v-model="value" absolute close-on-click open-delay="10" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="#582973" dark v-bind="attrs" v-on="on">MENU</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="o">
            <v-list-item-title>
              <v-btn text color="#582973">{{ item }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <img src="./assets/banner.svg" />
    <v-main class="main">
      <div class="mainContent">
        <Main />
      </div>
    </v-main>
    <Donate />
    <v-footer absolute fixed class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Bekknum</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style >
.valoresCarousel {
  width: 60%;
  margin-left: 20px;
}
.about {
  display: flex;
  width: 100%;
}
.sobre {
  width: 20%;
}
.content {
  width: 85%;
  margin: 0 auto 150px;
  background: #f9f2e5;
}
.sectionTitle {
  margin-left: 60px;
  margin-top: 18px;
  font-size: 30px;
  width: 50%;
  color: #582973;
}
.valores {
  margin: 0 auto;
  color: #582973;
}
.valoresTitle {
  margin: 0 auto;
  color: #582973;
}
.main {
  background-color: #f9f2e5;
}
.mainContent {
  width: 90%;
  margin: 0 auto;
  background: #f9f2e5;
}
.rectangle {
  width: 100%;
  height: 18px;
  background: #b14d97;
}
.aboutUs {
  color: #582973;
  font-size: 50px;
  font-weight: bold;
}
.imgAboutUs {
  background: #dedede;
  width: 30%;
}
</style>
<script>
import Main from "./components/Main.vue";
import Donate from "./components/Donate.vue";

export default {
  name: "App",

  components: {
    Main,
    Donate,
  },

  data: () => ({
    items: ["sobre nos", "doacoes", "nossos valores", "sevicos"],
  }),
};
</script>
