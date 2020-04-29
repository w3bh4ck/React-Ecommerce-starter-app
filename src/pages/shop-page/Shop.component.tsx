import React, { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverviewComponent from "../../components/collection-overview/Collections-overview.component";
import Category from "../category/Category.component";

const ShopPage = ({ match }) => {
	console.log("match", match.params);
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
			<Route path={`${match.path}/:categoryId`} component={Category} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	collections: state.shop.shopData,
});

export default connect(mapStateToProps)(ShopPage);
