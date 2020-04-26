import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import { selectCartItemsTotalPrice, selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

const Checkout = ({ cartItems, totalCartPrice }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems ? cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />) : ""}
			<div className="total">
				<span className="total">TOTAL: ${totalCartPrice}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalCartPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps, null)(Checkout);
