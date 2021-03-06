export const addItemToCart = (cartItems, newItemToAdd) => {
  const existingCartItem = cartItems.find(c => c.id === newItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === newItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(c => c.id === itemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }
  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
