export function toggleCart() {
  return { type: 'TOGGLE_CART_HIDDEN' };
}
export function addItem(item) {
  return { type: 'ADD_ITEM', payLoad: item };
}
export function reduceItem(item) {
  return { type: 'REDUCE_ITEM', payLoad: item };
}
export function removeItem(item) {
  return { type: 'REMOVE_ITEM', payLoad: item };
}

//clear cart action
export function clearCart() {
  return { type: 'CLEAR_CART' };
}
