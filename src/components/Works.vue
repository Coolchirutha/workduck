<template>

<div id="work" v-bind:style="{background: '#001020',height: '500px',marginTop:'150px',
      fontSize: '13px', transition: '20s'}">

    <p  v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '30px', transition: '20s',color:'white'}">How does it work?</p>  
    <transition name="slide">
    <div class="card">
        
        <div class="container">
            <p  v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '40px', transition: '20s',color:'white'}">Truly Scriptous</p>
            <p v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '20px', transition: '20s',color:'white'}">Upload your app on our platform and simply navigate through it. We automatically create Tests that can be replayed with every app update, across devices and screen resolutions. No more flaky scripts anywhere, anymore!</p> 
        </div>
    </div>  
    </transition>

</div>

</template>

<script>
export default {
 name  : 'work',

}
</script>
<style scoped>

#work {
   background: "rgb(0,32,65)";
   height: "500px";
   marginTop:"50px";
   fontSize: "13px";
   transition: "20s"
   }

   .flex-container {
  display: flex;
}

.flex-container > div {
  
  
  padding: 0;
  font-size: 20px;
  margin-left : 10px;
  text-align: center
}

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.9s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-55%);
        transition: all 150ms ease-in 0s
    }
.card {
  margin-left:440px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0);
  color:white;
  background-color:'#00458a'; 
  transition: 1s;
  height: 300px;
  width: 40%;
  
  border-radius: 5px 5px 0 0;
}

.card:hover {
  box-shadow: 0 8px 18px 0 rgba(0,0,0,0);
}

.container {
  padding: 2px 16px;
  background-color:#00458a;
  border-radius: 10px 10px 10px 10px;
}
</style>

