import { io } from 'socket.io-client'

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:3000");
  }
	disconnect() {
		if (this.socket) {
			this.socket.disconnect();
		}
	}
	loadChat(room) {
		this.socket.emit('joinRoom', room)
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