// store.js
import { createStore } from 'redux';
import TokenReducer from '../reducer/TokenReducer.jsx'; // Buat reducer sesuai kebutuhan

const store = createStore(TokenReducer);

export default store;
