import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import "./CartIcon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { cartItemsReducer } from "../../utils/cart.utils";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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
	cartItemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
