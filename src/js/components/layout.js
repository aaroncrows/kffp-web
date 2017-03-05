import React from 'react';
import io from 'socket.io-client';
import './layout.css';

// for demo purposes
const socket = io('http://localhost:3000', {
    reconnectionAttempts: 3,
    reconnectionDelay: 10000,
    reconnectionDelayMax: 10000
});
socket.on('now-playing', obj => console.log(obj));

const Layout = () => <h1>KFFP Home</h1>;

export default Layout;
