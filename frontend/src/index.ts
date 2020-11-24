import { io } from 'socket.io-client';

import './index.scss';

const socket = io('http://localhost:3000');
const button: HTMLButtonElement = document.createElement('button');

socket.on('connect', () => {
  console.log('Connected');
});

socket.on('update_achievements', (achievementsStatus) => {
  console.log('achievementsStatus', achievementsStatus);
});

button.textContent = 'Complete Task';
button.onclick = () => {
  socket.emit('task_completed', 'challengeId');
};

document.body.appendChild(button);
