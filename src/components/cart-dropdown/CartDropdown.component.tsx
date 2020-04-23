import React from "react";

import "./CartDropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
