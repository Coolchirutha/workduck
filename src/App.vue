<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">
        workduck
      </div>
      <Burger></Burger>
    </nav>

    <Navbar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/works">How it Works</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/integrations">Integrations</router-link></li>
      </ul>
    </Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Navbar from "./components/Menu/Navbar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Navbar,
  },
};
</script>
<style>
html {
  height: 100%;
}

body {
  overflow: hidden;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background:  rgb(0,8,16);
 
}



.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  
}
</style>
