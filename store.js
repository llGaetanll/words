import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { gameReducer } from "@/src/game";
import { settingsReducer } from "@/src/settings";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { initDict } from "./src/middleware/initDict";

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,

  // disable devtools in production
  devTools: process.env.NODE_ENV !== "production",

  // load default middlewares, and initWords
  // for use with redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // this loads the dictionary on the client, so we have the relative api path
      // accessible
      //
      // FIXME: maybe this can be loaded on the server for better perf?
      .concat(initDict),
});

export default store;
