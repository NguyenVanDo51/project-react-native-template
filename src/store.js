/* eslint-disable no-undef */
import {
    createStore, combineReducers, compose, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../ReactotronConfig';
import reducers from './redux/reducers';
import rootSaga from './redux/saga/rootSaga';
import persist from './redux/persist';

const sagaMiddleware = createSagaMiddleware();
const config = {
    key: 'manypage_',
    storage: AsyncStorage,
    blacklist: ['password', 'navigation']
};

const reducersStorage = combineReducers({
    state: reducers,
    persist: persistReducer(config, persist),
});
const middlewares = [];
middlewares.push(applyMiddleware(thunk));
middlewares.push(applyMiddleware(sagaMiddleware));

if (__DEV__) {
    middlewares.push(Reactotron.createEnhancer());
}
export const store = createStore(reducersStorage, compose(...middlewares));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
