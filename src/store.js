import React from "react"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducer from "./reducer"

const store = createStore(
  reducer,
  // combineReducers({
  //   listings,
  // }),
  applyMiddleware(thunk, logger)
)

export default store