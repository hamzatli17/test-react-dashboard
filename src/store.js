const thunk = require("redux-thunk").default;
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
import { annonceReducer } from "redux/reducers/annonceReducer";
import { condidatReducer } from "redux/reducers/candidatsReducer";
import { multipostingReducer } from "redux/reducers/multipostingReducer";
import { notificationReducer } from "redux/reducers/notificationReducer";

const reducer = combineReducers({
candidatData:condidatReducer,
annonceData:annonceReducer,
multipostingData:multipostingReducer,
notificationData:notificationReducer
});
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
