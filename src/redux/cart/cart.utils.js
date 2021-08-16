export function addItem(cardItems, itemToBeAdded) {
  const existingCardItem = cardItems.find((item) => {
    return item.id === itemToBeAdded.id;
  });

  if (existingCardItem) {
    const newArray = cardItems.map((item) => {
      return item.id === itemToBeAdded.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    return newArray;
  } else {
    return [...cardItems, { ...itemToBeAdded, quantity: 1 }];
  }
}

export function reduceItem(cartItems, itemToBeReduced) {
  const existingCartItem = cartItems.find((item) => {
    return item.id === itemToBeReduced.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== itemToBeReduced.id;
    });
  }
  return cartItems.map((item) => {
    return item.id === itemToBeReduced.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
}
