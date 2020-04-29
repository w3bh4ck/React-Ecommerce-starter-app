import React from "react";
import { connect } from "react-redux";
import "./Collections-overview.styles.scss";
import Collection from "../preview-collection/Collection.component";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
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

export default connect(mapStateToProps)(CollectionsOverview);
