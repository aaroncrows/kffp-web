import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './configureStore';
import Layout from './components/layout';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const initialState = {};
const store = storeFactory(initialState);

render(
    <Provider store={store} history={history}>
        <Layout />
    </Provider>,
    document.getElementById('app')
);
