import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={cartItem.imageUrl} alt="item" />
			</div>
			<span className="name">{cartItem.name}</span>
			<span className="price">{cartItem.price}</span>
			<span className="quantity">{cartItem.quantity}</span>
			<span onClick={() => clearItemFromCart(cartItem)} className="remove-button">
				&#10005;
			</span>
		</div>
	);
};

export default connect(null, { clearItemFromCart })(CheckoutItem);
