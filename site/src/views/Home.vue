<template>
  <div class="home">
    <div class="banner mb-5">
      <span class="primary--text" style="font-size: 1.5vw"
        >mentoria e plantão de dúvidas gratuitos</span
      >
    </div>
    <div class="about mb-10">
      <Title :text="'sobre nós'" />
      <div class="mt-3 mx-3 text primary--text">
        <p>
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
        </p>
      </div>
      <div class="bblue" style="width: 45%;"></div>
    </div>
    <div class="project mb-10">
      <Title :text="'como funciona?'" />
      <div class="project-content mt-5">
        <div class="left-section primary--text mr-5">
          <p>
            Tanto a mentoria quanto o plantão funcionam em plataformas online e
            de forma 100% gratuita. O acompanhamento é feito por meio de
            interações semanais, que buscam se adaptar da melhor forma à rotina
            des estudantes. Mentores auxiliam na organização de estudos, sempre
            respeitando o ritmo e as necessidades de cada participante,
            oferecendo suporte, dicas e estratégias para enfrentar os
            vestibulares, sem negligenciar o cuidado do bem estar, saúde física
            e mental.
          </p>
        </div>
        <div class="right-section primary--text">
          <p>
            Para que a adaptação e flexibilidade da mentoria seja de máxima
            eficiência, escolhemos trabalhar com um modelo de mentoria 1:1, isso
            é, acompanhamento individual e altamente personalizado.
          </p>
          <p>
            Também realizamos eventos e atividades durante o ano para trabalhar
            a resolução de questões, redação, repertório e atualidades;
            oferecendo workshops e apoio psicológico (????)
          </p>
        </div>
      </div>
      <v-card-actions class="justify-center">
        <v-btn
          @click="$router.push('/project')"
          class="text-lowercase py-6"
          color="primary"
          width="35%"
          max-height="50px"
        >
          <span class="blight--text" style="font-size: 1.5vw;">
            quero participar!
          </span>
        </v-btn>
      </v-card-actions>
    </div>
    <div class="values">
      <Title :text="'nossos valores'" />
      <div style="display: flex;">
        <div style="width: 20%;">
          <div class="mt-5 primary--text" style="width: 95%;">
            <p>
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
            </p>
          </div>
        </div>
        <div style="width: 80%;" class="primary"></div>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</template>
<style scoped>
p {
  font-size: 1.2vw;
}
.about {
  display: flex;
}
.text {
  width: 40%;
}
.project-content {
  display: flex;
}
.left-section {
  width: 50%;
}
.right-section {
  width: 50%;
}
.spacer {
  height: 10em;
}
</style>
<script>
// @ is an alias to /src
import Title from "@/components/Title";

export default {
  name: "Home",
  components: {
    Title
  }
};
</script>
