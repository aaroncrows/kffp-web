import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteWithSubRoutes, routes } from '../routes';
import { Landing } from './landing';
import Nav from './nav';

const Layout = () => (
    <Router>
        <div>
            <Nav />
            <Route path="/landing" component={Landing} />
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    </Router>
);

export default Layout;
