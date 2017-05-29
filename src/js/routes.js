import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/about';
import Donate from './components/donate';
import Faq from './components/faq';
import Landing from './components/landing';
import Underwriting from './components/underwriting';
import Volunteer from './components/volunteer';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const routes = [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/donate',
        component: Donate
    },
    {
        path: '/faq',
        component: Faq
    },
    {
        path: '/underwriting',
        component: Underwriting
    },
    {
        path: '/volunteer',
        component: Volunteer
    }
];

export { routes, RouteWithSubRoutes };
