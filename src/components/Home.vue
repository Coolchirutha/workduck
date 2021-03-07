<template>
  <div
    id="home"
    v-bind:style="{
      background: 'rgb(46,139,87)',
      height: '500px',
      marginTop: '150px',
      fontSize: '13px',
      transition: '20s',
    }"
  >
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<style scoped>
.home {
  border: 0;
  margin: 500px;
  padding: 0;
  font-family: "sans-serif";
  align: center;
  height: 30%;
  background-color: white;
}
</style>