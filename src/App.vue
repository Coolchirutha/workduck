
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
       
       <li><a href="#home">Home</a></li>
       <li v-on:click="work()"><a>How It Works</a></li>
       <li v-on:click="isFeatures=!isFeatures"><a>Features</a></li>
       <li v-on:click="isIntegrations=!isIntegrations"><a >Integrations</a></li>
     </ul>
   </Navbar>

  <div v-if="isWork"> 
    <Works></Works>
  </div> 
  
  <div v-if="isFeatures"> 
    <Features></Features>
  </div> 

  <div v-if="isIntegrations"> 
    <Integrations></Integrations>
  </div>  
</div>
</template>

<script>
import Burger from './components/Menu/Burger.vue';
import Navbar from './components/Menu/Navbar.vue';
import Works from './components/Works.vue';
import Features from './components/Features.vue';
import Integrations from './components/Integrations.vue';

export default {
 name: 'app',
 components: {
   Burger,
   Navbar,
   Works,
   Features,
   Integrations
  },
 data: function(){
   return {
   isWork:false,
   isFeatures:false,
   isIntegrations:false
   }
 
 },
 computed :{
      work : function(){
         return{
           isWork:true,
           isFeatures:false,
           isIntegrations:false
         }
      },
      features : function(){
         return{
           isWork:false,
           isFeatures:true,
           isIntegrations:false
         }
      },
      integrations : function(){
         return{
           isWork:false,
           isFeatures:false,
           isIntegrations:true
         }
      },
   }
}

</script>
<style>
html {
   height: 100%;
   
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(102,178,178);
   background: linear-gradient(45deg, rgba(102,178,178) 0%, rgba(0,128,128) 48%, rgba(0,102,102) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
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
   padding-bottom: 0.5em;
 }

 #work{
   transition:10s;
 }
.work-enter-active {
  transition: all .3s ease;
}
.work-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.work-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
