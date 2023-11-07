<template>
<div class =chart>
  <router-view></router-view> 
  
  <div class = 'controller'>
    <div>
        <div class="button-container">
          <router-link to="/" class="btn btn-primary btn-lg">BarChart</router-link>
        </div>
        <div class="button-container">
          <router-link to="/BarChart2" class="btn btn-primary btn-lg">BarChart2</router-link>
        </div>
        <div class="button-container">
          <router-link to="/BarChart3" class="btn btn-primary btn-lg">BarChart3</router-link>
        </div> 
    </div>
  </div>
</div>

</template>

<script>





export default {
  name: 'App',
  data () {
      return {
        
       
      }
  }
  
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.button-container {
  margin-top: 20px;
}

.button-container {
  display: inline-block;
  margin: 0 10px;
}

.chart{
  height: 400px;
  width: 100%;
  max-width: 140vw; 
  margin: 0 auto;

}


</style>
