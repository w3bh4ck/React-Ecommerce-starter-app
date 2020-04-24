import React from "react";
import { connect } from "react-redux";
import "./CollectionItem.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ addItem, item }) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${item.imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">{item.price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};

export default connect(null, { addItem })(CollectionItem);
