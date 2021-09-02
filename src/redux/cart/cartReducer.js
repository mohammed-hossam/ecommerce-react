import { addItem, reduceItem } from './cart.utils';
const INITAL_STATE = { hidden: true, cartItems: [] };

export default function cartReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return { ...state, hidden: !state.hidden };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payLoad),
      };
    case 'REDUCE_ITEM':
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payLoad),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payLoad.id;
        }),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}
