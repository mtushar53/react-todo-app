import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as TodoReducer } from "./TodoRedux";
import { reducer as PostReducer } from "./PostRedux";

const middlewares = [
  thunk
]

const rootReducer = combineReducers({
  todos: TodoReducer,
  posts: PostReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store