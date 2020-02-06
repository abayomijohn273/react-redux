import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "../reducers"
import thunk from "redux-thunk"

const middleware = [thunk]
const initialState = {}
// It take the rootReducer, initialState and the enhancer with that have a middleware for asycn operation like thunk and saga e.g applyMiddleWare(...middleware) where middleware = [thunk, saga]
// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store