import React from "react";
import { connect } from "react-redux";
import "./CartDropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";

interface cartProps {
	hidden?: boolean;
	toggleCartHidden: void;
}

const CartDropdown = (props: any) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

export default connect(null, { toggleCartHidden })(CartDropdown);
