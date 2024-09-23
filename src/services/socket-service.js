import { io } from 'socket.io-client'

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(`http://${process.env.VUE_APP_SERVERIP}:3000`);
  }
	disconnect() {
		if (this.socket) {
			this.socket.disconnect();
		}
	}
	loadChat(room, user) {
		this.socket.emit('joinRoom', [room, user])
	}
	subscribeToJoin(cb) {
		if (!this.socket) return (true)
		this.socket.on('newConnect', usersInRoom => {
			return cb(null, usersInRoom)
		})
	}
	subscribeToLeave(cb) {
		if (!this.socket) return (true)
		this.socket.on('deleteConnect', usersInRoom => {
			return cb(null, usersInRoom)
		})
	}
	leaveRoom(room) {
		this.socket.emit('leaveRoom', room)
	}
	sendMessage(user, room, msg) {
		this.socket.emit('send-message', [user, room, msg])
	}
	subscribeToMessages(cb) {
		if (!this.socket) return(true);
		this.socket.on('message', msg => {
			return cb(null, msg);
		});
	}
}

export default new SocketioService();