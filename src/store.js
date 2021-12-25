import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import  reducers  from '../src/Reducers/index'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}
let middleware, store, persistor
if (process.env.NODE_ENV === 'production') {
    const persistedReducer = persistReducer(persistConfig, reducers)
    middleware = applyMiddleware(thunk);
    store = createStore(persistedReducer, middleware);
    persistor = persistStore(store);
} else {
    const persistedReducer = persistReducer(persistConfig, reducers)
    middleware = applyMiddleware(thunk, logger);
    store = createStore(persistedReducer, composeWithDevTools(middleware));
    persistor = persistStore(store);
}

export { persistor, store };