export const addItemToCart = (cartItems, newItemToAdd) => {
  const existingCartItem = cartItems.find(c => c.id === newItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === newItemToAdd.id
        ? { ...cartItems, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
};
