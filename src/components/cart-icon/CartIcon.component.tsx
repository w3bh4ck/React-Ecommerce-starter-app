import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import "./CartIcon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { cartItemsReducer } from "../../utils/cart.utils";

const CartIcon = (props: any) => {
	const { toggleCartHidden, cartItemsCount } = props;

	return (
		<div className="cart-icon" onClick={() => toggleCartHidden()}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemsCount}</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItemsCount: state.cart.cartItems.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
		0
	),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
