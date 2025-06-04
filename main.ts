import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./style.css";
import { createApp } from "vue";
import Main from "./components/Main.vue";

createApp(Main).mount("#app");
