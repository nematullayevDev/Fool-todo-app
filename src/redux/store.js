import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  todos: TodoReducer,
});

const store = createStore(rootReducer);

export default store;
