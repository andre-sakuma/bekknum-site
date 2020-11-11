<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <v-btn
        large
        class="text-lowercase font-weight-black"
        text
        color="primary"
        @click.stop="drawer = !drawer"
      >
        <h1>menu</h1>
      </v-btn>
      <v-spacer></v-spacer>
      <div style="cursor: pointer;" @click.stop="$router.push('/')">
        <img src="@/assets/bekknum.png" alt="Logo Bekknum" height="50" />
      </div>
      <v-spacer></v-spacer>

      <v-btn
        large
        color="primary"
        class="text-lowercase font-weight-black"
        @click.stop="$router.push('donate')"
      >
        <h2>doe agora</h2>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      overlay-color="primary"
      overlay-opacity="0.85"
      app
      clipped
      bottom
      temporary
    >
      <v-list nav dense>
        <v-btn
          text
          class="mb-4"
          color="error"
          rounded
          @click.stop="drawer = !drawer"
        >
          X
        </v-btn>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('/')"
              >
                <h2>Página Inicial</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('about')"
              >
                <h2>Sobre Nós</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('project')"
              >
                <h2>Como Funciona?</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('subscribe')"
              >
                <h2>Quero participar!</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('contact')"
              >
                <h2>Contato</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="text-lowercase"
                color="primary"
                text
                block
                @click.stop="$router.push('donate')"
              >
                <h2>Doar</h2>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="blight">
      <v-img
        v-if="$router.history.current.path == '/'"
        src="@/assets/painel.svg"
      ></v-img>
      <div class="content">
        <router-view />
      </div>
    </v-main>
    <v-footer class="blight" padless>
      <!-- <Footer /> -->
      <v-card flat width="100%" class="text-center">
        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Bekknum</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.content {
  margin: 0 auto;
  width: 84%;
}
</style>

<script>
// import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    // Footer
  },

  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },

  methods: {
    routeTo(address) {
      this.$router.push(address);
    }
  }
};
</script>
