const thunk = require("redux-thunk").default;
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
import { annonceReducer } from "redux/reducers/annonceReducer";
import { condidatReducer } from "redux/reducers/candidatsReducer";

const reducer = combineReducers({
candidatData:condidatReducer,
annonceData:annonceReducer
});
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
