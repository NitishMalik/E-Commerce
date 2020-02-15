import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middlerwares = [logger];
//rootreducer and return of applymiddleware
const store = createStore(rootReducer, applyMiddleware(...middlerwares));

export const persistor = persistStore(store);

export default { store, persistor };
