<template>
  <div
    id="features"
    v-bind:style="{
      background: '#001020',
      height: '500px',
      marginTop: '150px',
      fontSize: '13px',
      transition: '20s',
    }"
  >
    <p
      v-bind:style="{
        fontFamily: 'cursive',
        textAlign: 'center',
        fontSize: '30px',
        transition: '20s',
        color: 'white',
      }"
    >
      Integrations
    </p>
    <transition name="slide">
      <div class="row">
        <div class="column">
          <div class="card">
            <img :src="require('@/assets/featuresimage.png')" />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <p
              v-bind:style="{
                fontFamily: 'cursive',
                textAlign: 'center',
                fontSize: '35px',
                transition: '20s',
                color: 'white',
              }"
            >
              Workduck integrates with the tools you love
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "work",
};
</script>
<style scoped>
.features {
  background-color: #0f0034;
  height: "500px";
  margintop: "50px";
  fontsize: "13px";
  transition: "20s";
}
.column {
  float: left;
  margin-left: 70px;
  width: 35%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
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
    margin-left: 100px;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  padding: 16px;
  text-align: center;
  border-radius: 10px 10px 10px 10px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-55%);
  transition: all 150ms ease-in 0s;
}

.card > img {
  height: 380px;
  width: 450px;
  border-radius: 10px 10px 10px 10px;
}
.card > img:hover {
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.8);
}
.card:hover {
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.8);
}
</style>
