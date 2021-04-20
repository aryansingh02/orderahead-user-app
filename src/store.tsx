import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import * as Sentry from '@sentry/react';
import RootReducer from './rootReducer';

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

// @ts-ignore
const pReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  pReducer /* preloadedState, */,
  composeEnhancer(applyMiddleware(thunk), sentryReduxEnhancer)
);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;
