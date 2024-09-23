<template>
  <div class="home">
    <div class='mainBlock' style='color: black;'>
      <div class='users'>
        <div class='profile'>
          <div class='userImage'>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style='width:20px;'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg>
          </div>
          <p>{{ user }}</p>
          <div class='settings'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style='width:28px;'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="1.5"></circle> <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          </div>
        </div>
        <p style='color:white;'>Now in this room:</p>
        <div class='user' v-for='user in usersInRoom' :key='user'>
          <div class='userImage'>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style='width:20px;'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg>
          </div>
          <p>{{ user }}</p>
        </div>
      </div>
      <div class='rightContainer'>
        <div class='roomHead'>
          <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-6.96 -6.96 37.92 37.92" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003" style='width: 40px;'><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-6.96" y="-6.96" width="37.92" height="37.92" rx="18.96" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <g id="group"> <path d="M24,15.9c0-2.8-1.5-5-3.7-6.1C21.3,8.8,22,7.5,22,6c0-2.8-2.2-5-5-5c-2.1,0-3.8,1.2-4.6,3c0,0,0,0,0,0c-0.1,0-0.3,0-0.4,0 c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0C10.8,2.2,9.1,1,7,1C4.2,1,2,3.2,2,6c0,1.5,0.7,2.8,1.7,3.8C1.5,10.9,0,13.2,0,15.9V20h5v3h14v-3h5 V15.9z M17,3c1.7,0,3,1.3,3,3c0,1.6-1.3,3-3,3c0-1.9-1.1-3.5-2.7-4.4c0,0,0,0,0,0C14.8,3.6,15.8,3,17,3z M13.4,4.2 C13.4,4.2,13.4,4.2,13.4,4.2C13.4,4.2,13.4,4.2,13.4,4.2z M15,9c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,7.3,15,9z M10.6,4.2 C10.6,4.2,10.6,4.2,10.6,4.2C10.6,4.2,10.6,4.2,10.6,4.2z M7,3c1.2,0,2.2,0.6,2.7,1.6C8.1,5.5,7,7.1,7,9C5.3,9,4,7.7,4,6S5.3,3,7,3 z M5.1,18H2v-2.1C2,13.1,4.1,11,7,11v0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0.3,0.7,0.8,1.3,1.3,1.8 C6.7,13.8,5.4,15.7,5.1,18z M17,21H7v-2.1c0-2.8,2.2-4.9,5-4.9c2.9,0,5,2.1,5,4.9V21z M22,18h-3.1c-0.3-2.3-1.7-4.2-3.7-5.2 c0.6-0.5,1-1.1,1.3-1.8c0.1,0,0.2,0,0.4,0v0c2.9,0,5,2.1,5,4.9V18z"></path> </g> </g></svg>
          <div class='roomName'>
            <p style='margin-top:10px; margin-bottom: 5px; text-align: left;'>Room is: {{ room }}</p>
            <p style='margin-top:5px; text-align: left; font-size:12px;'>{{ usersInRoom.length }} members</p>
          </div>
          
        </div>
        <div class='allMessages' @scroll='scroll()'>
          <div class='personMessage' v-for='message in messages' :key='message' :class='message.user == this.user ? "selfMessage" : ""'>
            <div class='personMessageName'><p>{{message.user}}</p></div>
            <div class='personMessageText'><p>{{message.msg}}</p></div>
            <div class='personMessageTime'>{{message.date}}</div>
          </div>
          <transition name='fade' mode='out-in'>
            <div class='scrollBottom' @click='scrollToLast' v-show='isScrolled'>
            <div class='bottomButton'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style='width:32px; height: 32px;'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z" fill="#000000"></path> </g></svg>
            </div>
          </div>
          </transition>
        </div>
        <div class='messages'>
          <input placeholder='Enter message' id='inputMessage' @keypress.enter="sendMessage" style='padding-left:15px; width:100%; font-size:18px; outline: none; border: 1px solid transparent;' :class='this.$store.state.theme ? "dark" : "light"' v-model='inputMessage'/>
          <div class='sendMessage' @click='sendMessage'  style='color: black;'>></div>
         </div>
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
      usersInRoom: [],
      inputMessage: "",
      messages: [1],
      isScrolled: true
    }
  },
  methods: {
    sendMessage() {
      const isWhitespaceString = str => !/\S/.test(str)
      if (!isWhitespaceString(this.inputMessage)) {
        socket.sendMessage(this.user, this.room, this.inputMessage)
        this.messages.push({
          id: this.messages[this.messages.length-1].id,
          user: this.user,
          room: this.room,
          msg: this.inputMessage,
          date: new Date().toISOString().replace('T', ' ').split('.')[0]
        })
        this.inputMessage = ""
        this.scrollToLast()
      }
    },
    async getMessages() {
      axios.post(`http://${process.env.VUE_APP_SERVERIP}:3000/get-messages`, JSON.stringify({room: this.room}), {
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
        let t = {
          id: 1,
          user: data[0],
          msg: data[1],
          date: new Date().toISOString().replace('T', ' ').split('.')[0]
        }
        this.messages.push(t)
      });
    },
    checkNewConnect() {
      socket.subscribeToJoin((err,data) => {
        this.usersInRoom = data
      })
      socket.subscribeToLeave((err,data) => {
        this.usersInRoom = data
      })
    },
    scrollToLast() {
      let msg = document.querySelector(".allMessages");
      setTimeout(() => {
        msg.scrollTop = Math.ceil(msg.scrollHeight - msg.clientHeight)
      }, 50);
      
    },
    scroll() {
      let msg = document.querySelector(".allMessages");
      if (msg.scrollHeight === msg.scrollTop + msg.clientHeight) this.isScrolled = false
      else this.isScrolled = true
    }
  },
  mounted() {
    socket.loadChat(this.room, this.user)
    this.usersInRoom.push(this.user)
    this.checkMessages()
    this.checkNewConnect()
    this.getMessages()
  },
  created() {

  },
  beforeUnmount() {
    socket.leaveRoom(this.room)
    this.usersInRoom = []
    console.log("ВЫШЕЛ")
  }
}
</script>
<style scoped>
.mainBlock {
  display: flex;
  justify-content: center;
  height: 60vh;
}
.rightContainer {
  width:60%;
  display:flex;
  flex-flow: column;
  background-color: rgb(163, 255, 217, 0.2)
}
.roomName {
  margin-left: 10px;
}
.users {
  background-color:#69dd86;
  width:15%;
  border-radius: 15px 0 0 15px;
}
.profile {
  display: flex;
  align-items: center;
  background-color: #3edb65;
  border-top-left-radius: 15px;
  height: 14%;
  margin-bottom: 15px;
}
.settings {
  margin-left: auto;
  margin-right:10px;
}
.roomHead {
  background-color:#9dffb5;
  display: flex;
  padding-left:20px;
  min-height: 14%;
  max-height: 30%;
}
.user {
  width:90%;
  height: 40px;
  background-color:#69dd86;
  border-radius:25px;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;
  user-select: none;
  margin: 0 auto;
}
.user:hover {
  background-color:#b1ffc5;
  transition: 0.2s ease-in-out;
}
.userImage {
  margin-left: 20px;
  margin-right: 10px;
}
.user:nth-child(1) {
  margin-top:15px;
}
.messages {
  display: flex;
  background-color:rgb(65, 65, 65);
}
.sendMessage {
  background-color: aquamarine;
  height: 50px;
  width: 5%;
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
.scrollBottom {
  position: absolute;
  width: 32px;
  height: 32px;
  justify-self: right;
  cursor: pointer;
}
.bottomButton {
  background-color: white;
  border-radius: 15px;
}
.allMessages {
  display: grid;
  gap: 20px;
  color:white; 
  border-radius: 0 15px 15px 0;
  overflow: auto;
  padding: 20px;
  scrollbar-color: #69dd86 #ffffff;
  scrollbar-width: thin;
  height: 100%;
}
.personMessage {
  background-color:aquamarine;
  border-radius: 32px;
  border: 1px solid #00692c;
  min-width: 20%;
  width: fit-content;
  height: fit-content;
  color: black;
  padding:15px;
  max-width:50%;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
.selfMessage {
  background-color: rgb(127, 208, 255) !important;
  justify-self:right;
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
  text-align: right;
  font-size: 12px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0;
}
</style>
