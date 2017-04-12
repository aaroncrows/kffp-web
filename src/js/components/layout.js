import React from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Match } from 'react-router-dom'
import { RouteWithSubRoutes, routes } from '../routes';
import Nav from './nav'
import './layout.css';
// for demo purposes
const socket = io('http://localhost:3000', {
    reconnectionAttempts: 3,
    reconnectionDelay: 10000,
    reconnectionDelayMax: 10000
});
socket.on('now-playing', obj => console.log(obj));

const Layout = () => (
    <Router>
        <div>
            <Nav />
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    </Router>
);

export default Layout;
