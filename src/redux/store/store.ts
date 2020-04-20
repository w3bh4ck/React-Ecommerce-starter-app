import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root-reducer";

const middleWare = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
