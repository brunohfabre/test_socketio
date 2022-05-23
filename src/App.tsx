import { useEffect } from 'react';
import { io } from 'socket.io-client';

//http://sia-nginx-hml.atmoutsourcing.com.br:4000
//https://sia-nginx-hml.atmoutsourcing.com.br/backend

const socket = io('http://sia-nginx-hml.atmoutsourcing.com.br:4000');

socket.on('connect', () => {
  console.log('Socket connected', socket.id);
})

export function App(): JSX.Element {
  useEffect(() => {
    socket.on('user/5', (message) => {
      console.log(message);
    })
  }, []);

  return (
    <div>
      app apge
    </div>
  )
}