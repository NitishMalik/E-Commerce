import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middlerwares = [logger, thunk];
//rootreducer and return of applymiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlerwares));

export const persistor = persistStore(store);
