<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './pages/Home'
export default {
  name: 'App',
  components:{  
    Home
  }
} 
</script>

<style>
@import '../static/main.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
