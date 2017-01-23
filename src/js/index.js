import React from 'react';
import { render } from 'react-dom';
import { Router, createRoutes, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import storeFactory from './configureStore';
import rawRoutes from './routes';

const initialState = {};
const store = storeFactory(initialState);
const routes = createRoutes(rawRoutes);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
