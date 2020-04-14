import React from "react";
import "./Collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem.component";

interface Iprops {
	title: string;
	items: Array<{ name: string; id: number; imageUrl: string; price: number }>;
}

const Collection = ({ title, items }: Iprops) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, i) => i < 4)
					.map((item, i: number) => {
						return (
							<CollectionItem key={i} name={item.name} imageUrl={item.imageUrl} price={item.price} />
						);
					})}
			</div>
		</div>
	);
};

export default Collection;
