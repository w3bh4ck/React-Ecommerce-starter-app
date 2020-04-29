import React from "react";
import { connect } from "react-redux";
import "./Category.styles.scss";
import Collection from "../../components/preview-collection/Collection.component";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { ID_MAP } from "../../utils/id-map";

const Category = ({ match, collection }) => {
	let index = ID_MAP[match.params.categoryId];
	return (
		<div className="collection-page">
			<h2 className="title">{collection.title}</h2>
			<div className="items">
				{collection[index - 1].items.map((item) => (
					<CollectionItem item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	collection: state.shop.shopData,
});

export default connect(mapStateToProps, null)(Category);
