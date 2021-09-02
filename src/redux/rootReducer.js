import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';
import shopReducer from './shop/shopReducer';

//redux persiste
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
  blacklist: ['shopData', 'userData'],
  //el 7agat ele fl blacklist deh bttshal mn el 7agat ele byt3mlha persist fa msh bytm el e7tfaz beha ,(ta2rebn kda el library 2y 7aga bt7tfz beha btdeha l redux ka bedayt el state 2wel ma nft7)
};

const rootReducer = combineReducers({
  userData: userReducer,
  cart: cartReducer,
  shopData: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
