import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import "./CartIcon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = (props: any) => {
	const { toggleCartHidden } = props;
	return (
		<div className="cart-icon" onClick={() => toggleCartHidden()}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default connect(null, { toggleCartHidden })(CartIcon);
