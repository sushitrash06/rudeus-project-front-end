import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import createRootReducer from "./CombineReducer";

export const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createRootReducer(history),
    composeEnhancer(
        applyMiddleware(thunk)
    ),
);

export default store;