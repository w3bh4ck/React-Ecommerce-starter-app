import React from "react";
import { connect } from "react-redux";
import "./CartDropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../cart-item/CartItem.component";

interface cartProps {
	hidden?: boolean;
	toggleCartHidden: void;
}

const CartDropdown = (props: any) => {
	const { cartItems } = props;
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length > 0
					? cartItems.map((cartItem: any) => <CartItem key={cartItem.id} item={cartItem} />)
					: ""}
			</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
