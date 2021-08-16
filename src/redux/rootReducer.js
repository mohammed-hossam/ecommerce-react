import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';

//redux persiste
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const rootReducer = combineReducers({
  userData: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
