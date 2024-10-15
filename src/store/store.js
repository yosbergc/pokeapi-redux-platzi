import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { makeNameUpperCase } from "../middlewares/MakeNameUppercase";
import { reducer } from "../reducers/reducer";

const store = createStore(reducer, applyMiddleware(makeNameUpperCase))

export { store }