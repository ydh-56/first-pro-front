import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import authSlice from "./userSlice";
import storageSession from "redux-persist/lib/storage/session";

const reducers = combineReducers({
  auth: authSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: true,
});

export default store;
