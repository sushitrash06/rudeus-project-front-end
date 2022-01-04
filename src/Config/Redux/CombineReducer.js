import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import reducer from './reducer'

const createRootReducer = (history) => (combineReducers({
    router: connectRouter(history),
    reducer
}));

export default createRootReducer;