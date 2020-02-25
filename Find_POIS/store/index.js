//initialize the store
//and createStore takes a reducer as the first argument 
//reducers produce the state of your application.


import { createStore , applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger'

const logger = createLogger();

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger)// Redux Logger: allows to log information within the console

  );

export default store;