import React, { useState } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem.component";

const Directory = () => {
	const [directory, setDirectory] = useState([
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			linkUrl: "shop/hats",
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			linkUrl: "shop/jackets",
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl: "shop/sneakers",
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			linkUrl: "shop/womens",
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			linkUrl: "shop/mens",
		},
	]);

	const renderDirectory = () => {
		if (directory.length > 0) {
			return directory.map((dir, i) => (
				<MenuItem key={i} imageUrl={dir.imageUrl} title={dir.title} size={dir.size ? dir.size : ""} />
			));
		} else {
			return <p>Nothing dey</p>;
		}
	};

	return (
		<>
			<div className="directory-menu">{renderDirectory()}</div>
		</>
	);
};

export default Directory;
