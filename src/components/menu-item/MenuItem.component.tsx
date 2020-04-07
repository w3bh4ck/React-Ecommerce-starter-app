import React from "react";
import "./menuItem.styles.scss";
interface IPROPS {
	title: string;
	imageUrl: string;
	size: string;
}

const MenuItem = ({ title, imageUrl, size }: IPROPS) => {
	return (
		<>
			<div className={`${size} menu-item`}>
				<div
					className="background-image"
					style={{
						background: `url(${imageUrl})`,
					}}
				/>

				<div className="content">
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">Shop Now</span>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
