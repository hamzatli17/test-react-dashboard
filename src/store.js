const thunk = require("redux-thunk").default;
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
import { condidatReducer } from "redux/reducers/candidatsReducer";

const reducer = combineReducers({
candidatData:condidatReducer,
});
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
