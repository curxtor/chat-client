<template>
  <p>You are logged as: {{ user }}</p>
  <p>Room id: {{ room }}</p>
  <div class="home">
    <button @click='scrollToLast'>get</button>
    <div class='allMessages'>
      <div class='personMessage' v-for='message in messages' :key='message'>
        <div class='personMessageName'>{{message.user}}</div>
        <div class='personMessageText'>{{message.msg}}</div>
        <div class='personMessageTime'>{{message.date}}</div>
      </div>
      <div class='myMessage'>
        Hello
      </div>
    </div>
    <div class='messages'>
      <input style='width:75%; height: 5vh; font-size:20px; outline: none; border-radius: 15px; border: 1px solid black;' v-model='message'/>
      <div class='sendMessage' @click='sendMessage'>
        Send Message
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import socket from '../services/socket-service.js'

export default {
  name: 'RoomPage',
  data() {
    return {
      user: this.$store.getters.getUser,
      room: this.$store.getters.getRoom,
      message: "",
      messages: [1]
    }
  },
  methods: {
    sendMessage() {
      //socket.sendMessage(this.user, this.room, this.message)
      this.messages.push({
        id: this.messages[this.messages.length-1].id + 1,
        user: this.user,
        room: this.room,
        msg: this.message
      })
      console.log(this.messages)
      this.scrollToLast()
    },
    async getMessages() {
      axios.post('http://localhost:3000/get-messages', JSON.stringify({room: this.room}), {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
          .then((res) => {
            this.messages = res.data
            setTimeout(() => {
                let msg = document.querySelector(".allMessages");
                msg.scrollTop = msg.scrollHeight;
            }, 50);
            
          })
          .catch(err => {
            console.log(err)
          })
    },
    leaveChat() {
      socket.leaveChat(this.room)
    },
    checkMessages() {
      socket.subscribeToMessages((err, data) => {
        console.log(data);
      });
    },
    scrollToLast() {
      let msg = document.querySelector(".allMessages");
      msg.scrollTop = msg.scrollHeight
    }
  },
  mounted() {
    console.log(this.user, this.room)
    socket.loadChat(this.room)
    this.checkMessages()
    this.getMessages()
    
  },
  beforeUnmount() {
    socket.leaveRoom(this.room)
  }
}
</script>
<style scoped>
.messages {
  display: flex;
  margin: 0 auto;
  max-width:50%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.sendMessage {
  background-color: aquamarine;
  border-radius: 15px;
  height: 50px;
  width: 20%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
}
.sendMessage:hover {
  filter: drop-shadow(0 0 4px rgb(41, 255, 184));
  transition: 0.3s;
}
.allMessages {
  display: grid;
  gap: 20px;
  background-color: rgba(163, 255, 217, 0.575); 
  color:white; 
  width:50%; 
  height: 30vh;
  border-radius: 15px;
  margin: 0 auto;
  overflow: auto;
  padding: 20px;

  scrollbar-color: #69dd86 #ffffff;
  scrollbar-width: thin;
}
.personMessage {
  display: grid;
  background-color:aquamarine;
  border-radius: 32px;
  border: 1px solid #00692c;
  min-width: 20%;
  width: fit-content;
  color: black;
  margin-left: 5%;
  padding:15px;
}
.personMessageName {
  justify-self: left;
  font-weight: 600;
}
.personMessageText {
  font-size: 14px;
  justify-self: left;
}
.personMessageTime {
  justify-self: right;
  font-size: 12px;
}
</style>
