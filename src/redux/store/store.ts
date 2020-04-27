import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root-reducer";

const middleWare = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export const persistor = persistStore(store);
