<template>
  <div class="about mt-10">
    <div class="sobre">
      <div class="rectangle" />
      <p class="aboutUs">
        nossos
        <br />valores
      </p>
    </div>
    <div class="valoresCarousel">
      <v-carousel width="300" cycle height="350" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-card color="#f9f2e5" elevation="0">
            <div fill-height>
              <v-card-actions class="valoresTitle justify-center">
                <h1>{{slide.title}}</h1>
              </v-card-actions>
              <v-card-actions class="justify-center">
                <div class="valuesDescription">
                  <p>{{slide.description}}</p>
                </div>
              </v-card-actions>
            </div>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<style scoped>
.valuesDescription{
  color: #582973;
  width: 60%;
  font-size: 2vw;
  margin: auto;
}
</style>
<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "AMIZADE",
          description:
            "formar relações humanas entre os membros do projeto e  fortalecer nossas conexões criando assim um laço de cumplicidade",
        },
        {
          title: "PLURALIDADE/DIVERSIDADE",
          description:
            "a sociedade é diversa e plural e sabendo disso valorizamos as singularidades humanas e assim a nossa capacidade de ser diferente",
        },
        {
          title: "COMPROMISSO",
          description:
            "temos o compromisso com a nossa missão e por isso a proatividade com os objetivos do projeto",
        },
        {
          title: "INDIVIZUALIZADA",
          description:
            "entendemos que cada aluno tem suas singularidades e por isso",
        },
        {
          title: "PROMOVER MUDANÇAS",
          description:
            "querermos transformar a vida do aluno, equipe impactando positivamente na vida deles e indiretamente a sociedade.",
        },
      ],
    };
  },
};
</script>