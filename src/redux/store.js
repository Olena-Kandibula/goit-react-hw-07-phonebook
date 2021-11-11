// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import phoneBookReducer from './phonebook/phonebook-reducers';

// console.log(process.env.NODE_ENV);//development OR PRODUCTION
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const persistConfig = {
//   key: 'contacts',
//   // storage,
//   // blacklist: ['filter'],
// };
const myMiddleware = store => next => action => {
  console.log('my middleware');
  next(action);
};

const store = configureStore({
  reducer: {
    // phoneBook: persistReducer(persistConfig, phoneBookReducer),
    phoneBook: phoneBookReducer,
  },
  // middleware: middleware,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    myMiddleware,
    logger,
  ],

  // devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);

// export default { store, persistor };
export default store;

// ====== react redux============

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';
// import counterReducer from './counter/counter-reducers';
// import phoneBookReducer from './phonebook/phonebook-reducers';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phoneBook: phoneBookReducer,
// });

// // devTools: process.env.NODE_ENV === 'development',

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
