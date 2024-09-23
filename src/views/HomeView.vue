<template>
  <div class="home">
    <div class='enterData'>
      <p style='font-size: 20px; color: black;'>Please enter a username</p>
      <input class='inputData' v-model='user'/>
      <p style='font-size: 20px; color: black;'>Enter a room name</p>
      <input class='inputData' v-model='room'/>
      <div class='enterButton' @click='enterRoom'>
        Enter room
      </div>
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
.enterData {
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  filter: drop-shadow(0px 0px 6px #42b983);
  padding:25px;
}
.enterButton {
  background-color:aquamarine;
  color: black;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
  height: 40px;;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}
.inputData {
  border-radius: 15px;
  width:50%;
  border: 1px solid black;
  padding:10px;
  font-size: 16px;
  font-weight: bold;
}
.enterButton:hover {
  background-color:rgb(9, 255, 173);
  transition: 0.3s;
}
</style>
