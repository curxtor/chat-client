<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Please enter a username</p>
    <input class='inputData' v-model='user'/>
    <p>Enter a room number</p>
    <input class='inputData' v-model='room'/>
    <div class='enterButton' @click='enterRoom'>
      Enter room
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      user: "",
      room: ""
    }
  },
  components: {
    
  },
  methods: {
    enterRoom() {
      if (this.room != "") {
        this.$store.commit('setData', [this.user, this.room])
        this.$router.push(`/room/${this.room}`)
      }
    }
  }
}
</script>
<style scoped>
.home {
  max-width:70%;
  margin: 0 auto;
}
.enterButton {
  background-color:aquamarine;
  color: black;
  width: 30%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
  height: 40px;;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}
.inputData {
  border-radius: 15px;
  border: 1px solid black;
  padding:10px;
  font-size: 14px;
}
.enterButton:hover {
  background-color:rgb(9, 255, 173);
  transition: 0.3s;
}
</style>
