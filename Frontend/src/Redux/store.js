import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FarmerSlice from './Farmer/FarmerSlice';
// import foodReducer from './food/foodSlice';  // Import the foodSlice
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  farmer: FarmerSlice,
  // food: foodReducer, // Add the foodReducer to the rootReducer
  
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);