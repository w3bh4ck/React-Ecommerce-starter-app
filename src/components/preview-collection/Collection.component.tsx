import React from "react";
import "./Collection.styles.scss";

interface Iprops {
	title: string;
	items: Array<{ name: string; id: number; imageUrl: string; price: number }>;
}

const Collection = ({ title, items }: Iprops) => {
	return (
		<div className="collection-preview">
			<h1>{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, i) => i < 4)
					.map((item: { name: string }, i: number) => {
						return <div key={i}>{item.name}</div>;
					})}
			</div>
		</div>
	);
};

export default Collection;
