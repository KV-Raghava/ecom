
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productreducer";
// import {loggerMiddleware} from './middlewares/loggerMiddleware'

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer:{
        productReducer
    },
    // middleware:[loggerMiddleware]
})