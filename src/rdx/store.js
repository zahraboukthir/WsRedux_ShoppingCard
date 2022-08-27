import { createStore } from 'redux'
import cardReducer from './cardReducer';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store=createStore (cardReducer,devtools)