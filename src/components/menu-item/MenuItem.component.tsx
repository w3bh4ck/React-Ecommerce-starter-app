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
			<div
				style={{
					background: `url(${imageUrl})`,
				}}
				className={`${size} menu-item`}>
				<div className="content">
					<h1 className="title">{title}</h1>
					<span className="subtitle">Shop Now</span>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
