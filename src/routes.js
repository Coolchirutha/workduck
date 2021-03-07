import Works from "./components/Works.vue";
import Integrations from "./components/Integrations.vue";
import Features from "./components/Features.vue";
import Home from "./components/Home.vue";
export default [
  { path: "/", component: Home },
  { path: "/works", component: Works },
  { path: "/integrations", component: Integrations },
  { path: "/features", component: Features },
];