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

    <v-main class="main">
      <v-img src="./assets/logo_alinhado-03.png" />
      <div class="content">
        <div class="about">
          <div class="sobre">
            <div class="rectangle" />
            <p class="aboutUs">
              sobre
              <br />nós
            </p>
          </div>
          <p
            class="sectionTitle"
          >Somos um projeto voluntário, compromissado com nossos valores, que visa tornar o mundo mais igual e democrático por meio da educação!</p>
          <div class="imgAboutUs"></div>
        </div>
        <div class="about mt-10">
          <div class="sobre">
            <div class="rectangle" />
            <p class="aboutUs">
              como
              <br />funciona?
            </p>
          </div>
          <p
            class="sectionTitle"
          >oferecemos suporte para vestibulandes se prepararem para as provas, visando seu bem estar físico e mental, promovendo a troca de experiências entre os membros da equipe</p>
          <div class="services"></div>
        </div>
        <div class="about mt-10">
          <div class="sobre">
            <div class="rectangle" />
            <p class="aboutUs">
              nossos
              <br />valores
            </p>
          </div>
          <div class="valoresCarousel">
            <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-card color="#f9f2e5" elevation="0">
                  <div fill-height>
                    <v-card-actions class="valoresTitle justify-center">
                      <h1>{{slide.title}}</h1>
                    </v-card-actions>
                    <v-card-title class="valores justify-center" primary-title>
                      {{slide.description}}
                    </v-card-title>
                  </div>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
    </v-main>
    <v-footer
      absolute
      fixed
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style scoped>
.valoresCarousel{
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
  margin: auto 0;
  margin-left: 60px;
  font-size: 30px;
  width: 50%;
  color: #582973;
}
.valores{
  margin: 0 auto;
  color: #582973;
}
.valoresTitle{
  margin: 0 auto;
  color: #582973;
}
.main {
  width: 100%;
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
export default {
  name: "App",

  components: {},

  data: () => ({
    items: ["sobre nos", "doacoes", "nossos valores", "sevicos"],
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: [
      {
        title:"AMIZADE",
        description:"formar relações humanas entre os membros do projeto e  fortalecer nossas conexões criando assim um laço de cumplicidade"
      },
      {
        title:"PLURALIDADE/DIVERSIDADE",
        description:"a sociedade é diversa e plural e sabendo disso valorizamos as singularidades humanas e assim a nossa capacidade de ser diferente"
      },
      {
        title:"COMPROMISSO",
        description:"temos o compromisso com a nossa missão e por isso a proatividade com os objetivos do projeto"
      },
      {
        title:"INDIVIZUALIZADA",
        description:"entendemos que cada aluno tem suas singularidades e por isso"
      },
      {
        title:"PROMOVER MUDANÇAS",
        description:"querermos transformar a vida do aluno, equipe impactando positivamente na vida deles e indiretamente a sociedade."
      },
    ],
  }),
};
</script>
