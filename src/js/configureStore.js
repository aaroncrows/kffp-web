import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'; // reducer is already composed

const NODE_ENV = process.env.NODE_ENV;
console.log('__NODE_ENV__', NODE_ENV);

const storeFactory = (initialState) => {
    const middlewares = [thunk];

    const devToolComposition = compose(
        applyMiddleware(...middlewares),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )(createStore);

    const factory = NODE_ENV !== 'production' ? devToolComposition : applyMiddleware(...middlewares)(createStore);
    const store = factory(reducer, initialState);

    return store;
};

export default storeFactory;
