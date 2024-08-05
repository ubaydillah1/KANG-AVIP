/* eslint-disable no-unused-vars */
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Action
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("onCreate Store : ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

// Dispatch
const action = addToCart({ id: 1, qty: 20 });
store.dispatch(action);
store.dispatch(login());
// store.dispatch();
