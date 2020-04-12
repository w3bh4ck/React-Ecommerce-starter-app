import React, { useState } from "react";
import { SHOP_DATA } from "../../mocks/shopData";
import Collection from "../../components/preview-collection/Collection.component";

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

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

export default ShopPage;
