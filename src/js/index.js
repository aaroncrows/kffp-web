import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import storeFactory from './configureStore';
import routes from './routes';


const initialState = {};
const store = storeFactory(initialState);
const history = createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
