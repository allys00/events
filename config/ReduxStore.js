import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import createSagaMiddleware from 'redux-saga'

import login from '../screens/login/Login.reducer';
import events from '../screens/events/Events.reducer';


import MySaga from './MainSaga'

import actions from '../utils/actions.constants';

const sagaMiddleware = createSagaMiddleware()

const RootReducer = combineReducers({
    login,
    events
});

const rootReducer = (state, action) => {
    if (action.type && action.type === actions.ASYNC_LOGOUT) {
        state = undefined;
    }

    return RootReducer(state, action);
}

const Store = applyMiddleware(sagaMiddleware)(createStore)(rootReducer);

sagaMiddleware.run(MySaga)

export default Store;
