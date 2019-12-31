<template>
  <div id="app">
      <ul>
          <li> <a><router-link to="/">Go to Index</router-link></a></li>
          <li><a><router-link to="/about">Go to Vuex</router-link></a></li>
          <li><a><router-link to="/products">Go to Products</router-link></a></li>
      </ul>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>


  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
    line-spacing: 1;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
</style>
