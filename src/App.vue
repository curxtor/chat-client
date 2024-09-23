<template>
  <nav>
    <img alt="Vue logo" src="./assets/logo.png" @click='this.$router.push("/")' style='width:60px; float:left; cursor: pointer;'>
    <div style='float:right; margin-right: 20px;' @click='changeTheme()'>
      <img v-if='!theme' src='./assets/sun-moon-dark.svg' style='width:50px; color:white; cursor: pointer;'/>
      <img v-else src='./assets/sun-moon-light.svg' style='width:50px; cursor: pointer;'/>
    </div>
  </nav>
  
  <router-view/>
</template>
<script>
import socket from './services/socket-service.js'
export default {
  name: 'App',
  data() {
    return {
      theme: this.$store.getters.getTheme,
      user: ""
    }
  },
  components: {},
  created() {
    socket.setupSocketConnection();
    let t = document.querySelector('html')
    t.classList.add('dark-theme')
  },
  mounted() {
    this.user = this.$store.state.user
  },
  methods: {
    changeTheme() {
      this.$store.commit('setTheme')
      this.theme = this.$store.getters.getTheme
      let t = document.querySelector('html')
      t.className = ""
      if (this.theme) {
        t.classList.add('dark-theme')
        let z = document.getElementById('app')
        z.style.color="white"
      }
      else {
        t.classList.add('light-theme')
        let z = document.getElementById('app')
        z.style.color="black"
      }
      
    }
  },
  beforeUnmount() {
    socket.disconnect();
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-family: 'Open Sans';
}
p {
  margin: 0;
  overflow: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
:root {
    --dark-background-color: #111111;
    --dark-text-color: #eeeeee;
}
.light-theme {
  background: rgb(255,255,255);
  background: linear-gradient(117deg, rgba(255,255,255,0.5) 0%, rgba(170, 255, 235, 0.5) 29%, rgb(174, 255, 217,0.5) 66%, rgba(155,238,255,0.5) 100%);
  background-size: 100% 300%;
  background-repeat: no-repeat;
}

.dark-theme {
  background: rgb(32, 32, 32);

}

nav {
  padding: 30px;
  display: flow-root;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.dark {
  background-color: rgb(65, 65, 65) !important;
  color: white !important;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
