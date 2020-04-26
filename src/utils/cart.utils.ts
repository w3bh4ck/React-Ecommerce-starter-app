export const addItemToCart = (cartItems, cartItemsToAdd) => {
	let existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemsToAdd.id);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}

	return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const cartItemsReducer = (array: any) => {
	if (array && array.length > 0) {
		const reducer = (accumulator, cartItem) => accumulator + cartItem.quantity;
		let totalQuantity = array.reduce();
		console.log("from reduced value", totalQuantity);
	}
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
	let existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
	);
};
