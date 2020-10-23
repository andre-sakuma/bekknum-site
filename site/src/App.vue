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
      <div @click.stop="$router.push('/')">
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
                color="primary"
                text
                block
                @click.stop="$router.push('home')"
              >
                Página Inicial
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                color="primary"
                text
                block
                @click.stop="$router.push('about')"
              >
                Sobre Nós
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                color="primary"
                text
                block
                @click.stop="$router.push('project')"
              >
                Como Funciona?
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                color="primary"
                text
                block
                @click.stop="$router.push('contact')"
              >
                Contato
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  background: #f9f2e5;
}
</style>

<script>
export default {
  name: "App",

  components: {},

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
