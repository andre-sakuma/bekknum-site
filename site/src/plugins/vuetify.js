import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#582973",
        secondary: "#b14d97",
        bblue: "#70c5cc",
        byellow: "#fcc133",
        blight: "#f9f2e5"
      }
    }
  }
});
