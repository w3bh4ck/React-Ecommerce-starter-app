import React, { useState } from "react";
import { SHOP_DATA } from "../../mocks/shopData";
import Collection from "../../components/preview-collection/Collection.component";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => {
	// const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map((collection, i) => {
				return (
					<>
						<Collection title={collection.title} items={collection.items} />
					</>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	collections: state.shop.shopData,
});

export default connect(mapStateToProps)(ShopPage);
