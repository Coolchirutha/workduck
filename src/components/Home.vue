<template>
  <div>
    <div
      id="features"
      v-bind:style="{
        background: '#2A0033',
        height: '500px',
        marginTop: '150px',
        fontSize: '16px',
        transition: '20s',
      }"
    >
      <div class="row">
        <div class="column">
          <div class="card">
            <h2>Rapid releases. Fewer Bugs. Awesome apps.</h2>
            <p>
              Modern, collaborative, no-code platform for automated mobile app
              testing
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="footer"
      v-bind:style="{
        background: 'black',
        height: '100px',
        marginTop: '700px',
        fontSize: '16px',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
body {
  font-family: cursive;
  margin-top: 50px;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 50%;

  padding: 30px;
  margin-left: 320px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 4px 8px rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-family: cursive;
  font-size: 27px;
  text-align: center;
  background-color: #b82be2;
  color: white;
  margin-left: 15px;
  border-radius: 10px 10px 10px 10px;
}
.card:hover {
  box-shadow: 0 8px 16px rgb(169, 43, 226);
}
</style>
