/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

// 如果您希望在开发环境之外不使用logger，可以这样做
const reduxLogger = createLogger();
const middleWares: any = [thunk, reduxPromise];
const env = process.env.NODE_ENV || "development";

if (env === "development") {
  middleWares.push(reduxLogger);
}

// 创建store容器
const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
