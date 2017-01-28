import React from 'react';
import io from 'socket.io-client';

// for demo purposes
// socket.io polls so if there's no connection, you'll get errors
const socket = io('http://localhost:3000');
socket.on('now-playing', obj => console.log(obj));

const Layout = () => <h1>Hello World</h1>;

export default Layout;
