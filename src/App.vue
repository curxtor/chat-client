<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/rooms">Rooms</router-link>
  </nav>
  <div style='float:right; margin-right: 20px;' @click='changeTheme'>Тема {{ theme }}</div>
  <router-view/>
</template>
<script>
import socket from './services/socket-service.js'

export default {
  name: 'App',
  data() {
    return {
      theme: 'light'
    }
  },
  components: {},
  created() {
    socket.setupSocketConnection();
  },
  methods: {
    changeTheme() {
      if (this.theme == 'light') this.theme = 'dark'
      else this.theme = 'light'
    }
  },
  beforeUnmount() {
    socket.disconnect();
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
