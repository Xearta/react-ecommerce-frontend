import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';

const initalState = { cart: { cartItems }, userSignin: { userInfo } };

const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
  }),
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;