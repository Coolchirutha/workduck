<template>
<transition name="slide">
<div id="work" v-bind:style="{background: 'rgb(32,178,170)',height: '500px',marginTop:'150px',
      fontSize: '13px', transition: '20s'}">
  <h1>How does it work?</h1>
</div>
</transition>
</template>

<script>
export default {
 name  : 'work',

}
</script>
<style scoped>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.9s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-25%);
        transition: all 150ms ease-in 0s
    }

body {
   border: 0; margin-top: 500px; padding: 0;
   font-family: 'sans-serif';
   align:center;
   height: 30%;
   background-color: black;
   }
</style>

