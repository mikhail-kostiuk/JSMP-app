import { io } from 'socket.io-client';

import './index.scss';

const socket = io('http://localhost:3000', {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYzYzMjE1MmY1OWMwMTg1Y2E0NWEzOSIsImVtYWlsIjoicmVhY3QuYW5ndWxhcm92QGdtYWlsLmNvbSIsIm5hbWUiOiJSZWFjdCBBbmd1bGFyb3YifSwiaWF0IjoxNjA3MzU3MTA5fQ.9kswFn97voIuqys1iOzvu5kUcGS_pkCfmTAy8lfF4tw',
      },
    },
  },
});
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
