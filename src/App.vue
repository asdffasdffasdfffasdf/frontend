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


import serverdata from './assets/serverdata'


export default {
  name: 'App',
  data () {
      return {
        
        a:serverdata,
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

.status {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  height: 80px; /* Adjust the height as needed */
  width: 90%;
  max-width: 100vw;
  margin: 0 auto;
}

.status-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.status-label {
  font-size: 16px;
  font-weight: bold;
}

.status-value {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-top: 5px;
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
