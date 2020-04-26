import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart, removeItem, addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={cartItem.imageUrl} alt="item" />
			</div>
			<span className="name">{cartItem.name}</span>
			<span className="price">{cartItem.price}</span>
			<span className="quantity">
				<div onClick={() => removeItem(cartItem)} className="arrow">
					&#10094;
				</div>
				<span className="value"> {cartItem.quantity}</span>
				<div onClick={() => addItem(cartItem)} className="arrow">
					&#10095;
				</div>
			</span>
			<span onClick={() => clearItemFromCart(cartItem)} className="remove-button">
				&#10005;
			</span>
		</div>
	);
};

export default connect(null, { clearItemFromCart, removeItem, addItem })(CheckoutItem);
