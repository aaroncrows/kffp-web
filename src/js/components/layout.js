import React from 'react';
import io from 'socket.io-client';
import './layout.css';
import Nav from './nav'
// for demo purposes
const socket = io('http://localhost:3000', {
    reconnectionAttempts: 3,
    reconnectionDelay: 10000,
    reconnectionDelayMax: 10000
});
socket.on('now-playing', obj => console.log(obj));

const Layout = () => <Nav />;

export default Layout;
